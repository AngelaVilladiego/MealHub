from pymongo import MongoClient
import spoonacular as sp
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from bson.objectid import ObjectId
from dataclasses import dataclass
from werkzeug.security import generate_password_hash, check_password_hash

load_dotenv()
api_key = os.getenv('SPOONACULAR_API_KEY')
api = sp.API(api_key)

app = Flask(__name__)
CORS(app)

# MongoDB setup
client = MongoClient(
    'mongodb+srv://Omario:Utk68tgciDee2Wv1@mealhubcluster.lfzbben.mongodb.net/?retryWrites=true&w=majority')
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
        mealPlan[day] = {}

    user = {
        "username": user_data["username"],
        "password": user_data["password"],  # Storing the password directly (not secure)
        "favourites": [],
        "dietary_restriction": user_data.get("dietary_restriction", []),
        "cuisine_preferences": user_data.get("cuisine_preferences", []),
        "mealPlan": mealPlan
    }

    users_collection.insert_one(user)
    return jsonify({"message": "User created", "user_id": str(user["_id"])}), 201

@app.route('/add_favourite', methods=['POST'])
def add_favourite():
    data = request.json
    user_id = data['user_id']
    recipe_id = data['recipe_id']

    # Add the recipe's ID to the user's 'favourites' list
    update_result = users_collection.update_one(
        {"_id": ObjectId(user_id)},
        {"$addToSet": {"favourites": recipe_id}}  # Ensures the recipe_id is not duplicated in the list
    )

    # Check the result of the update operation
    if update_result.matched_count == 0:
        return jsonify({"message": "User not found"}), 404
    elif update_result.modified_count == 0:
        return jsonify({"message": "Recipe was already in the favourites list"}), 200
    else:
        return jsonify({"message": "Favourite added successfully!"}), 200

# @app.route("/user/<user_id>/create_mealplan", methods=['POST'])
# def create_mealplan(user_id):
#     data = request.json
#     user_id = data["user_id"]
#
#     # Fetch the user from the database using the user_id
#     user = users_collection.find_one({"_id": user_id})
#     users_collection.insert_one(user)
#
#     if not user:
#         return jsonify({"message": "User not found"}), 404
#
#     mealPlan = user["mealPlan"]
#
#     for day in mealPlan:
#         recipe_id = get_recipe_for_user(user_id)
#         recipe_dto = get_recipeDTO_from_id(recipe_id)
#         mealPlan[day] = recipe_dto
#
#     return mealPlan

# @app.route("user/<user_id>/get_recipe_for_user")
# def get_recipe_for_user(user_id):
#     #return one recipeId based on the user's dietary restrictions and cuisine preferences
#
# def get_recipeDTO_from_id(recipe_id):
#     #create a recipe dto object from the recipe id

@app.route('/user/<user_id>/favourites', methods=['GET'])
def get_favourites(user_id):
    user = users_collection.find_one({"_id": ObjectId(user_id)})
    if user:
        favourite_recipe_ids = user['favourites']
    #     favourite_recipes = recipes_collection.find({"id": {"$in": favourite_recipe_ids}})
    #
    #     # Convert the recipes to JSON serializable format
    #     favourite_recipes_list = []
    #     for recipe in favourite_recipes:
    #         recipe['_id'] = str(recipe['_id'])  # Convert ObjectId to string
    #         favourite_recipes_list.append(recipe)
    #
    #     return jsonify(favourite_recipes_list), 200
    # else:
    #     return jsonify({"message": "No user found"}), 404


if __name__ == "__main__":
    app.run(debug=True)
