import { React } from "react";
import ScheduleDay from "../ScheduleDay/ScheduleDay";
import RecipeCard from "../RecipeCard/RecipeCard.jsx";
import AddMealButton from "../Buttons/AddMealButton.jsx";

function ScheduleWeek({ onAddMeal }) {
  return (
    <div className="grid grid-cols-4 gap-4 auto-rows-fr grow">
      <ScheduleDay dayLabel={"Sunday"}>
        <AddMealButton onClick={() => onAddMeal("Sunday")} />
      </ScheduleDay>
      <ScheduleDay dayLabel={"Monday"}>
        <RecipeCard
          id={716429}
          sourceUrl="http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html"
          title="Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs"
          image="https://spoonacular.com/recipeImages/716429-556x370.jpg"
          readyInMinutes={45}
          favourited={false}
        />
      </ScheduleDay>
      <ScheduleDay dayLabel={"Tuesday"}>
        <AddMealButton onClick={() => onAddMeal("Tuesday")} />
      </ScheduleDay>
      <ScheduleDay dayLabel={"Wednesday"}>
        <AddMealButton onClick={() => onAddMeal("Wednesday")} />
      </ScheduleDay>
      <ScheduleDay dayLabel={"Thursday"}>
        <AddMealButton onClick={() => onAddMeal("Thursday")} />
      </ScheduleDay>
      <ScheduleDay dayLabel={"Friday"}>
        <AddMealButton onClick={() => onAddMeal("Friday")} />
      </ScheduleDay>
      <ScheduleDay dayLabel={"Saturday"}>
        <AddMealButton onClick={() => onAddMeal("Saturday")} />
      </ScheduleDay>
    </div>
  );
}

export default ScheduleWeek;
