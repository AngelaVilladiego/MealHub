import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS directly

const DietaryRestrictionList = () => {
  const [step, setStep] = useState(1);
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
    setStep(step + 1);
    // You can add logic here to handle saving the selected options based on the step.
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleOptionChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selected) => selected !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
  };

  return (
    <div className="mt-4">
      <h3 className="text-center">Meal Hub</h3>
      <p className="text-center mt-2 text-gray-600">Let's Begin</p>
      <h4 className="text-center mt-4">Meal Planning</h4>

      <div className="mt-4">
        <h5>{`Card${step}/Step${step}: ${steps[step - 1].title}`}</h5>

        <div className="mt-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {steps[step - 1].options.map((option, index) => (
            <label
              key={index}
              className={`block p-4 border rounded cursor-pointer transition-all ${
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

        <div className="mt-4 grid gap-2 grid-cols-2">
          <button
            disabled={step === 1}
            onClick={handleBack}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={step === steps.length}
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
