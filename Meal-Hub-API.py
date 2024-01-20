# import PyMongo
import spoonacular as sp
from flask import Flask, request, jsonify, redirect, url_for
import os
from dotenv import load_dotenv

from werkzeug.security import generate_password_hash, check_password_hash

load_dotenv()
api_key = os.getenv('SPOONACULAR_API_KEY')
api = sp.API(api_key)

app = Flask(__name__)

# add database information here
# app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
# mongo = PyMongo(app)

# User dictionary model
user = {
    "_id": "userID",
    "username": "Joe Doe",
    "password_hash": "hashedPassword",
    "favourites": [
        {
            "_id": "favouriteId",
            "recipe_id": "recipe1",
            "user_id": "userId"
        },
    ],
    "dietary_restrictions": "Vegetarian",
    "cuisine_preferences": "French",
    "days": {"Monday": 0, "Tuesday": 0,"Wednesday": 0,"Thursday": 0,"Friday": 0,"Saturday": 0,"Sunday": 0},
    "advancePrep": True
}


# Returns the list of favourite recipes for the user with the current ID.
def get_favourites(user):
    return

# https://api.spoonacular.com/recipes/random?number=1&include-tags=vegetarian,dessert&exclude-tags=quinoa
@app.route("/")
def home():
    return "Homepage / Dashboard"

# UNTESTED. Signs user up and adds them to the DB, if user exists, will display message.
@app.route("/signup", methods=['POST'])
def signUp():
    return


@app.route("/login")
def login():
    return "login page spaceholder"


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
