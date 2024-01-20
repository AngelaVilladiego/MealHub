import spoonacular as sp
from flask import Flask, request, jsonify, redirect, url_for
import os
from dotenv import load_dotenv
from werkzeug.security import generate_password_hash, check_password_hash

load_dotenv()
api_key = os.getenv('SPOONACULAR_API_KEY')
api = sp.API(api_key)

app = Flask(__name__)
# app.config['DATABASE_URI_GOES_HERE'] = 'blahblah:////tmp/test.db'
# db = DATABASE(app)

# add database information here

# Favourite recipe model.
# class Favourite(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     recipe_id = db.Column(db.String(120), nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#
# # User model that has a relationship to a Favourite recipe model
# class User(db.model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String(80), unique=True, nullable=False)
#     password_hash = db.Column(db.String(120), nullable=False)
#     favourites = db.relationship('Favourite', backref='user', lazy=True)
#
# # Call this function to add a favourite recipe to the User's "favourites"
# def add_favourite(user, recipe_id):
#     favourite = Favourite(recipe_id=recipe_id, user=user)
#     db.session.add(favourite)
#     db.session.commit()

# Returns the list of favourite recipes for the user with the current ID.
def get_favourites(user):
    return

# https://api.spoonacular.com/recipes/random?apiKey=35b3e7d707684b61bf0463a2834b2c86

@app.route("/")
def home():
    return "Homepage / Dashboard"

# UNTESTED. Signs user up and adds them to the DB, if user exists, will display message.
# @app.route("/signup", methods=['POST'])
# def signUp():
#     data = request.get_json()
#     username = data.get('username')
#     password = data.get('password')
#     if not username or not password:
#         return jsonify({'message': 'Both username and password are required'}), 400
#     if User.query.filter_by(username=username).first() is not None:
#         return jsonify({'message': 'Username already exists'}), 400
#     user = User(username=username, password_hash=generate_password_hash(password))
#     db.session.add(user)
#     db.session.commit()
#     return redirect(url_for('login'))


@app.route("/login")
def login():
    return "login page spaceholder"


# Use ID of a favourite recipe to find recipe from the API
@app.route("/search")
def search():
    return "Search Bar"

# Display random recipes to the user. *No restrictions added yet
@app.route("/recipeInfo")
def recipeInfo():
    # return "RecipeInfo"
    res = api.get_random_recipes()
    recipe = res.json()
    recipeURL = recipe["recipes"][0]["sourceUrl"]

    return recipeURL

if __name__ == "__main__":
    app.run(debug=True)
