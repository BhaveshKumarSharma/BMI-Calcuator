"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(50);
  const [age, setAge] = useState(20);
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
      <form onSubmit={handleSubmit} className="container mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 sm:col-span-1">
            <label className="block bg-background text-foreground">
              Height (cm):{" "}
            </label>
            <input
              className="mt-1 block w-full rounded-md p-2 text-lg shadow-sm "
              type="number"
              value={height}
              required
              onChange={(event) => setHeight(Number(event.target.value))}
            />
          </div>
          <div className="col-span-3 sm:col-span-1">
            <label className="block bg-background text-foreground">
              Weight (in kg):
            </label>
            <input
              className="mt-1 block w-full rounded-md p-2 text-lg shadow-sm "
              type="number"
              value={weight}
              required
              onChange={(event) => setWeight(Number(event.target.value))}
            />
          </div>
          <div className="col-span-3 sm:col-span-1">
            <label className="block bg-background text-foreground">Age:</label>
            <input
              className="mt-1 block w-full rounded-md p-2 text-lg shadow-sm "
              type="number"
              value={age}
              required
              onChange={(event) => setAge(Number(event.target.value))}
            />
          </div>

          <div className="col-span-3">
            <Button type="submit">Calculate BMI</Button>
          </div>
        </div>
      </form>

      <div className="mt-4">
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
