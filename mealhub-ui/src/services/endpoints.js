import { GLOBALS as g } from "../globals";

export const SignUpUser = async (userData) => {
  let reqBody = JSON.stringify({
    username: userData["username"],
    password: userData["password"],
    daysToPlan: userData["daysToPlan"],
    dietary_restrictions: userData["dietary_restrictions"],
    cuisine_preferences: userData["cuisine_preferences"],
  });

  console.log("req bod:", reqBody);
  let res = fetch(`${g.BASE_URL + g.SIGNUP}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: reqBody,
  })
    .then((r) => r.json())
    .then((r) => {
      console.log("Response", r);
      return r;
    })
    .catch((error) => console.error("Error:", error));

  return res;
};

export const GetUserMealPlan = async (userId) => {
  let url = new URL(`${g.BASE_URL + g.GET_MEALPLAN}`);
  url.search = new URLSearchParams({ user_id: userId });
  let res = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((r) => {
      console.log("Response", r);
      return r;
    })
    .catch((error) => console.error("Error:", error));

  return res;
};
