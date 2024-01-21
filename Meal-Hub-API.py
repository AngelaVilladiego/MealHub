import json
import requests
from pymongo import MongoClient
import spoonacular as sp
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv, find_dotenv
from bson.objectid import ObjectId
from dataclasses import dataclass
from werkzeug.security import generate_password_hash, check_password_hash

from DTOs.recipeDTO import RecipeDTO


load_dotenv(find_dotenv())

api_key = os.getenv('API_KEY')
mongo_pwd = os.getenv('MONGO_PWD')

api = sp.API(api_key)


app = Flask(__name__)
CORS(app)

# MongoDB setup
client = MongoClient(
    f'mongodb+srv://Omario:{mongo_pwd}@mealhubcluster.lfzbben.mongodb.net/?retryWrites=true&w=majority')
db = client.main

# Collection for recipes
# recipes_collection = db.recipes

# Collection for users
users_collection = db.users


@app.route("/signup", methods=['POST'])
def signUp():
    user_data = request.json
    mealPlan = {}
    daysToPlan = user_data.get("daysToPlan", [])

    for day in daysToPlan:
        mealPlan[day] = ""

    print("signup mealplan: ", mealPlan)

    user = {
        "username": user_data["username"],
        "password": user_data["password"],  # Storing the password directly (not secure)
        "favourites": [], # recipe ids
        "dietary_restrictions": user_data.get("dietary_restrictions", []),
        "cuisine_preferences": user_data.get("cuisine_preferences", []),
        "mealPlan": mealPlan
    }
    
    users_collection.insert_one(user)
    
    user_id = str(user["_id"])
    
    helper_create_mealplan(user_id)
    
    return jsonify({"message": "User created", "user_id": user_id}), 201


@app.route("/login", methods=['POST'])
def login():
    user_data = request.json
    user = users_collection.find_one({"username": user_data["username"]})

    if user and user["password"] == user_data["password"]:
        return jsonify({"message": "Login successful", "user_id": str(user["_id"])}), 200
    else:
        return jsonify({"message": "Invalid username or password"}), 401


@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')
    number_of_results = request.args.get('number', 10)
    results = api.search_recipes(query, number=number_of_results)
    return jsonify(results.json())


@app.route('/add_favourite', methods=['POST'])
def add_favourite():
    data = request.json
    user_id = data['user_id']
    recipe_id = data['recipe_id']

    users_collection.update_one(
        {"_id": ObjectId(user_id)},
        {"$addToSet": {"favourites": recipe_id}}
    )
    return jsonify({"message": "Favourite added successfully!"}), 200

@app.route("/user/create_mealplan", methods=['POST'])
def create_mealplan():
    data = request.json
    user_id = data["user_id"]

    helper_create_mealplan(user_id)
    # Fetch the user from the database using the user_id
    res = helper_get_mealplan(user_id)

    return jsonify(res)

@app.route("/user/get_mealplan", methods=["GET"])
def get_user_mealplan():
    res = helper_get_mealplan(request.args.get("user_id"))

    return res



# return one recipeId based on the user's dietary restrictions and cuisine preferences
@app.route("/user/<user_id>/get_recipe_for_user", methods=["GET"])
def get_recipe_for_user(user_id):
    # user = users_collection.find_one({"_id": user_id})
    res = helper_get_recipe_for_user(user_id)

    return res

# Retrieve a recipe by ID
@app.route('/get_recipebyid', methods=['GET'])
def get_recipeById():
    recipe_id = request.args.get("recipe_id")
    url = f"https://api.spoonacular.com/recipes/{recipe_id}/information?apiKey={api_key}"
    response = requests.get(url)

    if response:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Can't retrieve the recipe"})



# create a recipe dto object from the recipe id
def helper_get_recipeDTO_from_id(recipe_id):
    url = f"https://api.spoonacular.com/recipes/{recipe_id}/information?apiKey={api_key}"
    response = requests.get(url)

    if response:
        data = response.json()

        recipe_dto = RecipeDTO(
            recipe_id = recipe_id,
            title= data["title"],
            source_url=data["sourceUrl"],
            image=data["image"],
            prep_time=data["readyInMinutes"],
            ingredients=[ingredient["name"] for ingredient in data["extendedIngredients"]]
        )

        print("++++ ", recipe_dto.to_dict())

        return recipe_dto.to_dict()
    else:
        return {"error": "Couldn't find recipe"}



@app.route('/user/<user_id>/favourites', methods=['GET'])
def get_favourites(user_id):
    try:
        # Fetch the user document
        user = users_collection.find_one({"_id": ObjectId(user_id)})
        
        if not user:
            return jsonify({"error": "User not found"}), 404
        
        # Access the favourites list
        favourite_recipe_ids = user['favourites']
        return jsonify({"favourite_recipe_ids": favourite_recipe_ids}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def helper_create_mealplan(user_id):
    print("creating mealplan....")
    user = users_collection.find_one({"_id": ObjectId(user_id)})

    print("user: ", user['mealPlan'])
    
    if not user:
        return jsonify({"message": "User not found"}), 404
    
    mealPlan = user['mealPlan']
    print("got mealplan: ", mealPlan)

    for day in mealPlan:
        res = helper_get_recipe_for_user(user_id)
        print("+????", res)
        mealPlan[day] = res

    print("created mealplan: ", mealPlan)

    # users_collection.find_one_and_update({"_id": user_id}, {"$set": {"mealPlan": mealPlan}})
    users_collection.update_one(
        {"_id": ObjectId(user_id)},
        {"$set": {"mealPlan": mealPlan}}
    )

def helper_get_mealplan(user_id):
    user = users_collection.find_one({"_id": ObjectId(user_id)})
    # users_collection.insert_one(user)

    if not user:
        return jsonify({"message": "User not found"}), 404

    mealPlan = user["mealPlan"]
    print("HERE: ", mealPlan)

    mealPlanDTO = {}

    for day in mealPlan:
        print("day: ", day)
        recipe_id = mealPlan[day]
        print("recipe_id: ", recipe_id)
        recipe_dto = helper_get_recipeDTO_from_id(recipe_id)
        print("recipe_dto:" , recipe_dto)
        mealPlanDTO[day] = recipe_dto

    print("+++check me :D ****", mealPlanDTO)
    return mealPlanDTO

def helper_get_recipe_for_user(user_id):
    user = users_collection.find_one({"_id": ObjectId(user_id)})

    if not user:
        return jsonify({"message": "User not found"}, 404)

    dietary_restriction = user.get("dietary_restriction", [])
    cuisine_preferences = user.get("cuisine_preferences", [])

    # https://api.spoonacular.com/recipes/random?number=1&include-tags=vegetarian,dessert&exclude-tags=quinoa&apiKey={api_key}


    response = requests.get(
        # Uncommet this when it's needed
        # f"https://api.spoonacular.com/recipes/random?number=1&include-tags={cuisine_preferences}&exclude-tags={dietary_restriction}&apiKey={api_key}")

        # 'https://api.spoonacular.com/recipes/random?number=1&include-tags=beef&apiKey=35b3e7d707684b61bf0463a2834b2c86'
        f'https://api.spoonacular.com/recipes/random?number=1&include-tags=beef&apiKey={api_key}'
    )
    data = json.loads(response.text)
    recipe_id = data["recipes"][0]["id"]
    print("got recipe id helper get recipe for user: ", recipe_id)
    converted = str(recipe_id)
    print("conv: ", converted)
    # return jsonify({"recipe_id": converted})
    return converted

if __name__ == "__main__":
    app.run(debug=True)


