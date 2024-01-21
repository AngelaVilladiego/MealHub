const LOCAL_API = "http://127.0.0.1:5000/";
const testing_env = true;
var BASE_URL = testing_env ? LOCAL_API : "";

export const GLOBALS = {
  BASE_URL: BASE_URL,
  SIGNUP: "signup",
  LOGIN: "login",
  ADD_FAVOURITE: "add_favourite",
  CREATE_MEALPLAN: "create_mealplan",
};

export const PREFERENCE_OPTIONS = {
  DIETARY_RESTRICTIONS: ["Vegan", "Vegetarian", "Gluten-free"],
  WEEKDAYS: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  CUISINES: [
    "Asian",
    "Chinese",
    "Indian",
    "Italian",
    "Korean",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Thai",
  ],
};
