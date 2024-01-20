import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const DietaryRestrictionList = () => {
  const [step, setStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const steps = [
    {
      title: "Dietary Restrictions",
      options: ["Vegan", "Vegetarian", "Gluten-free"],
    },
    {
      title: "Days to Cook",
      options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    {
      title: "Cuisines",
      options: ["Asian", "Chinese", "Indian", "Italian", "Korean", "Mediterranean", "Mexican", "Middle Eastern", "Thai"],
    },
  ];

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);

    // Store the selected options for the current step
    // Assuming you want to keep a record of selected options for each step
    const selectedOptionsForStep = {
      step,
      options: selectedOptions,
    };

    // You can use or store selectedOptionsForStep as needed
    console.log(selectedOptionsForStep);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleOptionChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selected) => selected !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h3 className="text-center text-orange-500 text-5xl">Meal Hub</h3>
      <p className="text-center text-gray-700 text-base mt-2">Let's Begin</p>
      <h4 className="text-center text-orange-500 text-6xl mt-4">Meal Planning</h4>

      <div className="mt-4">
        {step < steps.length && (
          <div>
            <h5 className="text-center text-gray-700 text-3xl">{`Card${step + 1}/Step${step + 1}: ${steps[step].title}`}</h5>

            <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {steps[step].options.map((option, index) => (
                <label
                  key={index}
                  className={`block p-8 border rounded cursor-pointer transition-all ${
                    selectedOptions.includes(option) ? "bg-blue-200" : "bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 grid gap-4 grid-cols-2">
          <button
            disabled={step === 0}
            onClick={handleBack}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={step === steps.length - 1}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DietaryRestrictionList;
