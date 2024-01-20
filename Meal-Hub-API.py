import spoonacular as sp
import json
from flask import Flask, request, jsonify


api = sp.API("35b3e7d707684b61bf0463a2834b2c86")
app = Flask(__name__)

# https://api.spoonacular.com/recipes/random?apiKey=35b3e7d707684b61bf0463a2834b2c86


@app.route("/")
def home():
    return "Home"

@app.route("/search")
def search():
    return "Search Bar"


@app.route("/recipeInfo")
def recipeInfo():
    # return "RecipeInfo"
    res = api.get_random_recipes()
    recipe = res.json()

    recipeURL = recipe["recipes"][0]["sourceUrl"]
    #
    return recipeURL


if __name__ == "__main__":
    app.run(debug=True)
