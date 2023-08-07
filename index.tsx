"use client";
import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(50);
  const [bmiCategory, setBMICategory] = useState("");

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    console.log(bmi);
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    setBMICategory(category);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculateBMI();
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 sm:col-span-1 form-control">
            <label>Height (cm):</label>
            <input
              type="number"
              value={height}
              required
              onChange={(event) => setHeight(Number(event.target.value))}
            />
          </div>
          <div className="col-span-3 sm:col-span-1 form-control">
            <label>Weight (in kg):</label>
            <input
              type="number"
              value={weight}
              required
              onChange={(event) => setWeight(Number(event.target.value))}
            />
          </div>
          <div className="col-span-3">
            <button className="button-primary button-sm" type="submit">
              Calculate BMI
            </button>
          </div>
        </div>
      </form>

      <div className="mt-4 h-[1rem]">
        {bmiCategory && (
          <p className="text-lg font-mono font-semibold">
            Your BMI category is: {bmiCategory}
          </p>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
