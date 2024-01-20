import spoonacular as sp
from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv('SPOONACULAR_API_KEY')
api = sp.API(api_key)

app = Flask(__name__)

# https://api.spoonacular.com/recipes/random?apiKey=35b3e7d707684b61bf0463a2834b2c86

@app.route("/")
def home():
    return "Homepage / Dashboard"

@app.route("/signup")
def signUp():
    return "sign up page spaceholder"

@app.route("/login")
def login():
    return "login page spaceholder"


@app.route("/search")
def search():
    return "Search Bar"

@app.route("/recipeInfo")
def recipeInfo():
    # return "RecipeInfo"
    res = api.get_random_recipes()
    recipe = res.json()
    recipeURL = recipe["recipes"][0]["sourceUrl"]

    return recipeURL


if __name__ == "__main__":
    app.run(debug=True)
