import { React, useState, useEffect } from "react";
import { PREFERENCE_OPTIONS } from "../../globals";
import CardCheckbox from "../../components/CardCheckbox/CardCheckbox";

function Questionnaire() {
  const [step, setStep] = useState(0);
  var userDietaryRestrictions = [];
  var userCuisines = [];
  var userDaysToCook = [];
  const [userPreferences, setUserPreferences] = useState({
    dietary_restrictions: userDietaryRestrictions,
    cuisine_preferences: userCuisines,
    daysToPlan: userDaysToCook,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("got:", userPreferences);
  }, [userPreferences]);

  const handleOptionChange = (option, preferenceType) => {
    console.log(preferenceType, option);
    var preferencesOfType = [...userPreferences[preferenceType]];
    console.log(preferencesOfType);
    var indexOfOption = preferencesOfType.indexOf(option);
    if (indexOfOption == -1) {
      console.log(false);
      preferencesOfType.push(option);
    } else {
      console.log(true);
      preferencesOfType.splice(indexOfOption, 1);
    }
    console.log(preferencesOfType);
    var newUserPreferences = { ...userPreferences };
    newUserPreferences[preferenceType] = preferencesOfType;
    console.log(newUserPreferences);
    setUserPreferences(newUserPreferences);
  };

  return (
    <div className="p-8 flex flex-col gap-3 items-center max-w-6/12 text-gray-800">
      <span className="font-brand text-orange-500 text-4xl pb-16 text-center">
        MealHub
      </span>
      <span className="size-sm">Let's begin</span>
      <h1 className="uppercase text-6xl font-header font-bold tracking-widest text-orange-500">
        meal planning
      </h1>
      <form
        className="flex flex-col items-center gap-8"
        onSubmit={handleSubmit}
      >
        <h2 className="pt-8">
          To start, please select your <b>dietary restrictions</b>:
        </h2>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PREFERENCE_OPTIONS.DIETARY_RESTRICTIONS.map((option, index) => (
            <CardCheckbox
              key={index}
              labelText={option}
              isSelected={userPreferences["dietary_restrictions"].includes(
                option
              )}
              onToggleOption={() => {
                handleOptionChange(option, "dietary_restrictions");
              }}
            />
          ))}
        </div>
      </form>
    </div>
  );
}

export default Questionnaire;
