import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PREFERENCE_OPTIONS } from "../../globals";
import CardCheckbox from "../../components/CardCheckbox/CardCheckbox";
import "./Questionnaire.css";
import NextButton from "../../components/Buttons/NextButton";
import BackButton from "../../components/Buttons/BackButton";
import CircleCheckbox from "../../components/CircleCheckbox.jsx/CircleCheckbox";

function Questionnaire() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [questionnaireDone, setQuestionnaireDone] = useState(false);
  const [loading, setLoading] = useState(false);
  var userDietaryRestrictions = [];
  var userCuisines = [];
  var userDaysToCook = [];
  const [userPreferences, setUserPreferences] = useState({
    dietary_restrictions: userDietaryRestrictions,
    cuisine_preferences: userCuisines,
    daysToPlan: userDaysToCook,
  });

  useEffect(() => {
    if (questionnaireDone) {
      console.log("submitting");
      submitUser();
    }
  }, [questionnaireDone]);

  const submitUser = () => {
    //simulate request
    console.log("navigating");
    setTimeout(() => {
      navigate("/dash");
    }, 1000);
  };

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

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    if (step == Object.keys(PREFERENCE_OPTIONS).length - 1) {
      setQuestionnaireDone(true);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <>
      {questionnaireDone ? (
        <div className="p-8 flex flex-col gap-3 items-center max-w-6/12 h-screen text-gray-800">
          <span className="font-brand text-orange-500 text-4xl pb-16 text-center">
            MealHub
          </span>
          <div className="h-full flex flex-col justify-center items-center">
            <span className="text-gray-800 text-lg pb-3">
              Tailoring your plan...
            </span>
            <div className="pb-48" role="status">
              <svg
                aria-hidden="true"
                className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-orange-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative min-h-screen overflow-y-hidden">
          <div className="p-8 flex flex-col gap-3 items-center max-w-6/12 text-gray-800">
            <span className="font-brand text-orange-500 text-4xl pb-16 text-center">
              MealHub
            </span>
            <form>
              {/*dietary */}
              <div
                className={`my-transition flex flex-col items-center gap-8
          ${
            step == 0
              ? "pointer-events-auto opacity-100 transition-in"
              : "pointer-events-none opacity-0 transition-out"
          }`}
              >
                <span className="size-sm">Let's begin</span>
                <h1 className="uppercase text-6xl font-header font-bold tracking-widest text-orange-500">
                  meal planning
                </h1>
                <h2 className="pt-8">
                  To start, please select your <b>dietary restrictions</b>:
                </h2>
                <div className="grid gap-4 grid-cols-[repeat(5,_auto)] items-center justify-center">
                  {PREFERENCE_OPTIONS.DIETARY_RESTRICTIONS.map(
                    (option, index) => (
                      <CardCheckbox
                        key={index}
                        labelText={option}
                        isSelected={userPreferences[
                          "dietary_restrictions"
                        ].includes(option)}
                        onToggleOption={() => {
                          handleOptionChange(option, "dietary_restrictions");
                        }}
                      />
                    )
                  )}
                </div>
              </div>

              {/** cuisine */}
              <div
                className={`my-transition flex flex-col items-center gap-8
          ${
            step == 1
              ? "pointer-events-auto opacity-100 transition-in"
              : "pointer-events-none opacity-0 transition-out"
          }`}
              >
                <h2>
                  Select your <b>preferred cuisines</b>:
                </h2>

                <div className="grid gap-4 grid-cols-[repeat(5,_auto)] items-center justify-center">
                  {PREFERENCE_OPTIONS.CUISINES.map((option, index) => (
                    <CardCheckbox
                      key={index}
                      labelText={option}
                      isSelected={userPreferences[
                        "cuisine_preferences"
                      ].includes(option)}
                      onToggleOption={() => {
                        handleOptionChange(option, "cuisine_preferences");
                      }}
                    />
                  ))}
                </div>
              </div>

              {/*days of week */}
              <div
                className={`my-transition flex flex-col items-center gap-8
          ${
            step == 2
              ? "pointer-events-auto opacity-100 transition-in"
              : "pointer-events-none opacity-0 transition-out"
          }`}
              >
                <h2>
                  Select the <b>days we'll plan for you</b>:
                </h2>

                <div className="flex gap-4 items-center">
                  {PREFERENCE_OPTIONS.WEEKDAYS.map((option, index) => (
                    <CircleCheckbox
                      key={index}
                      labelText={option}
                      isSelected={userPreferences[
                        "cuisine_preferences"
                      ].includes(option)}
                      onToggleOption={() => {
                        handleOptionChange(option, "cuisine_preferences");
                      }}
                    />
                  ))}
                </div>
              </div>
            </form>
          </div>
          {/*control sliders */}
          <div className="flex items-center justify-center gap-10">
            <BackButton isVisible={step !== 0} onClick={handleBack} />
            <NextButton onClick={handleNext} />
          </div>
          {/*slider indicators */}
          <div className="absolute z-30 flex items-center -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {Object.keys(PREFERENCE_OPTIONS).map((option, index) => (
              <button
                key={option}
                type="button"
                className={`rounded-full bg-gray-800
                ${index == step ? "w-4 h-4 opacity-80" : "w-3 h-3 opacity-50"}
            `}
                aria-current="true"
              ></button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Questionnaire;
