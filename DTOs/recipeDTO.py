class RecipeDTO:
    def __init__(self, title: str, recipe_id: int, source_url: str, image: str, prep_time: str, ingredients: list):
        self.title = title
        self.recipeId = recipe_id
        self.sourceUrl = source_url
        self.image = image
        self.prepTime = prep_time
        self.ingredients = ingredients if isinstance(ingredients, list) else []

    def to_dict(self) -> dict:
        return {
            "title": self.title,
            "recipeId": self.recipeId,
            "sourceUrl": self.sourceUrl,
            "image": self.image,
            "prepTime": self.prepTime,
            "ingredients": self.ingredients,
        }
