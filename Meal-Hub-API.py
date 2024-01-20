import spoonacular as sp
from flask import Flask, request, jsonify

api = sp.API("35b3e7d707684b61bf0463a2834b2c86")
app = Flask(__name__)

@app.route("/")
def home():
    return "Home"

@app.route("/recipeInfo")
def recipeInfo():
    return "RecipeInfo"

if __name__ == "__main__":
    app.run(debug=True)
