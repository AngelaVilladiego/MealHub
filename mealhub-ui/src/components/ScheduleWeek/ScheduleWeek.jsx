import { React } from "react";
import ScheduleDay from "../ScheduleDay/ScheduleDay";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import AddMealButton from "../Buttons/AddMealButton.jsx";
import { PREFERENCE_OPTIONS as p } from "../../globals.js";

function ScheduleWeek({ onAddMeal, mealPlan, isEditing }) {
  return (
    <div className="grid grid-cols-4 gap-4 auto-rows-fr grow">
      {p.WEEKDAYS.map((day, index) => (
        <ScheduleDay key={day} dayLabel={day}>
          {isEditing && !mealPlan.hasOwnProperty(day) ? (
            <AddMealButton onClick={() => onAddMeal(day)} />
          ) : !isEditing && mealPlan.hasOwnProperty(day) ? (
            <RecipeCard
              key={day}
              id={mealPlan[day]["recipeId"]}
              sourceUrl={mealPlan[day]["sourceUrl"]}
              title={mealPlan[day]["title"]}
              image={mealPlan[day]["image"]}
              readyInMinutes={mealPlan[day]["readyInMinutes"]}
              favourited={false}
            />
          ) : (
            <></>
          )}
        </ScheduleDay>
      ))}
    </div>
  );
}

export default ScheduleWeek;
