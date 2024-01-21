class RecipeDTO:
    def __init__(self, recipe_id: int, source_url: str, image: str, prep_time: str, rating: float, ingredients: list):
        self.recipeId = recipe_id
        self.sourceUrl = source_url
        self.image = image
        self.prepTime = prep_time
        self.rating = rating
        self.ingredients = ingredients if isinstance(ingredients, list) else []

    def to_dict(self) -> dict:
        return {
            "recipeId": self.recipeId,
            "sourceUrl": self.sourceUrl,
            "image": self.image,
            "prepTime": self.prepTime,
            "rating": self.rating,
            "ingredients": self.ingredients,
        }
