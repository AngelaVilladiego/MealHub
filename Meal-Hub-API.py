from pymongo import MongoClient
import spoonacular as sp
from flask import Flask, request, jsonify, redirect, url_for
import os
from dotenv import load_dotenv
from bson.objectid import ObjectId


from werkzeug.security import generate_password_hash, check_password_hash

load_dotenv()
api_key = os.getenv('SPOONACULAR_API_KEY')
api = sp.API(api_key)

app = Flask(__name__)

## add database information here
client = "mongodb://localhost:27017/DATABASENAMEIDK"
db = client['DATABASE_NAME']


# https://api.spoonacular.com/recipes/random?number=1&include-tags=vegetarian,dessert&exclude-tags=quinoa
@app.route("/")
def home():
    return "Homepage / Dashboard"

# UNTESTED. Signs user up and adds them to the DB, if user exists, will display message.
@app.route("/signup", methods=['POST'])
def signUp():
    user_data = request.get_json()

    # User dictionary model
    user = {
        "_id": ObjectId(),
        "username": user_data.get("username"),
        "password": generate_password_hash(user_data.get("password")),
        "favourites": user_data.get('favourites', []),
        "dietary_restrictions": user_data.get('dietary_restrictions'),
        "cuisine_preferences": user_data.get('cuisine_preferences'),
        "days": user_data.get('days', {"Monday": 0, "Tuesday": 0,"Wednesday": 0,"Thursday": 0,"Friday": 0,"Saturday": 0,"Sunday": 0}),
        "advancePrep": user_data.get('advancePrep', False)
    }

    # Uncomment this when the db is finished -> adds the user to the DB
    # db.users.insert_one(user)

    return "User created"

# Each time a user favourites a recipe, it gets added to their favourites list.
@app.route('/add_favourite', methods=['POST'])
def add_favourite():
    data = request.json()

    user_id = data.get('user_id')
    recipe_id = data.get('recipe_id')

    favourite = {
        "_id" : ObjectId(),
        "recipe_id": recipe_id,
        "user_id": user_id
    }

    # Update the DB to add a favourite object to the favourites list
    # db.users.update_one({"_id": user_id}, {"$push": {"favourites": favourite}})

    return "Favourite added successfully!"

@app.route("/login", methods=['POST'])
def login():
    user_data = request.json()

    username = user_data.get('username')
    password = user_data.get('password')

    # user = db.users.find_one({'username': username})

    # check if the username exists with the hashed password in the DB
    # if user and check_password_hash(user['password'], password):
    #     return "Login successful", 200
    # else:
    #     return "Invalid username or password"

    return "login page spaceholder"

# Returns the list of favourite recipes for the user with the current ID.
@app.route('/user/<user_id>/favourites', methods=['GET'])
def get_favourites(userID):
    user = db.users.find_one({'_id': ObjectId(userID)})

    if user:
        return {'favourites': user.get('favourites', [])}
    else:
        return "No user found"


# Use ID of a favourite recipe to find recipe from the API
@app.route("/search")
def search():
    return "Search Bar"

# TESTING ONLY Display random recipes to the user. *No restrictions added yet
@app.route("/recipeInfo")
def recipeInfo():
    # return "RecipeInfo"
    res = api.get_random_recipes()
    recipe = res.json()
    recipeURL = recipe["recipes"][0]["sourceUrl"]

    return recipeURL

if __name__ == "__main__":
    app.run(debug=True)
