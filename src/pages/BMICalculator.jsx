// src/pages/BMICalculator.jsx or .tsx
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { Info, Activity, Heart, Scale, Target } from 'lucide-react';

const BMICalculator = () => {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return {
        bmi,
        category: 'Underweight',
        description: 'You may be underweight for your height.',
        advice: 'Eat nutrient-dense foods, lift weights, and monitor progress.',
        color: '#3b82f6',
      };
    } else if (bmi < 24.9) {
      return {
        bmi,
        category: 'Normal Weight',
        description: 'You are in the healthy weight range.',
        advice: 'Keep up the balanced diet and regular workouts.',
        color: '#10b981',
      };
    } else if (bmi < 29.9) {
      return {
        bmi,
        category: 'Overweight',
        description: 'You may be above the healthy weight range.',
        advice: 'Walk daily, eat mindfully, and track habits.',
        color: '#f59e0b',
      };
    } else {
      return {
        bmi,
        category: 'Obese',
        description: 'BMI suggests obesity, which may carry health risks.',
        advice: 'Seek support, start light activity, and create small healthy routines.',
        color: '#ef4444',
      };
    }
  };

  const calculateBMI = () => {
    const ft = parseFloat(feet);
    const inch = parseFloat(inches);
    const kg = parseFloat(weight);
    if (!ft || !kg || ft <= 0 || kg <= 0) return alert('Enter valid values');

    const totalInches = (ft * 12) + (inch || 0);
    const meters = totalInches * 0.0254;
    const bmi = kg / (meters * meters);
    const bmiData = getBMICategory(bmi);
    setResult(bmiData);
    setShowResult(true);
  };

  const reset = () => {
    setFeet('');
    setInches('');
    setWeight('');
    setResult(null);
    setShowResult(false);
  };

  const chartData = result
    ? [
        { name: 'Underweight', value: result.category === 'Underweight' ? result.bmi : 18.5, color: '#3b82f6' },
        { name: 'Normal', value: result.category === 'Normal Weight' ? result.bmi : 6.4, color: '#10b981' },
        { name: 'Overweight', value: result.category === 'Overweight' ? result.bmi : 4.9, color: '#f59e0b' },
        { name: 'Obese', value: result.category === 'Obese' ? result.bmi : 10, color: '#ef4444' },
      ]
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold flex justify-center items-center gap-2 text-gray-900">
            <Scale className="text-cyan-500" />
            BMI Calculator
          </h1>
          <p className="text-gray-600 mt-2">
            Enter your measurements and receive insights into your body mass index.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white/80 rounded-xl shadow-lg p-6 backdrop-blur-md">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <Activity className="text-cyan-500" /> Your Measurements
            </h2>

            <div className="mb-4">
              <label className="block font-medium mb-1">Height</label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Feet"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  className="p-2 border rounded-md w-full"
                />
                <input
                  type="number"
                  placeholder="Inches"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  className="p-2 border rounded-md w-full"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-1">Weight (kg)</label>
              <input
                type="number"
                placeholder="70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="p-2 border rounded-md w-full"
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={calculateBMI}
                className="flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                <Target size={16} /> Calculate BMI
              </button>
              {showResult && (
                <button onClick={reset} className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div>
            {showResult && result ? (
              <>
                <div className="bg-white/80 rounded-xl shadow-md p-6 mb-6 text-center backdrop-blur-md">
                  <div
                    className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white text-xl font-bold"
                    style={{ backgroundColor: result.color }}
                  >
                    {result.bmi.toFixed(1)}
                  </div>
                  <h3 className="text-2xl font-semibold mt-4" style={{ color: result.color }}>
                    {result.category}
                  </h3>
                  <p className="text-gray-600 mt-2">{result.description}</p>
                </div>

                <div className="bg-white/80 rounded-xl shadow-md p-6 mb-6 backdrop-blur-md">
                  <h3 className="text-lg font-semibold mb-4">BMI Chart</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {chartData.map((entry, i) => (
                            <Cell key={`cell-${i}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white/80 rounded-xl shadow-md p-6 backdrop-blur-md">
                  <h3 className="text-lg font-semibold mb-2">Advice</h3>
                  <p className="text-gray-700">{result.advice}</p>
                  <p className="text-sm text-blue-800 mt-4 bg-blue-100 p-3 rounded">
                    <strong>Note:</strong> This tool is for educational purposes only.
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center p-10 bg-white/80 rounded-xl shadow backdrop-blur-md text-gray-500">
                <Scale size={48} className="mx-auto mb-4 opacity-40" />
                <p>Enter your height and weight to view your BMI score and category.</p>
              </div>
              
            )}
          </div>
        </div>
        <article className="mt-12">
  <div className="shadow-lg border-0 bg-white/80 backdrop-blur-sm rounded-lg p-6">
    <div className="mb-4">
      <h2 className="text-2xl font-bold text-gray-900">About Body Mass Index (BMI)</h2>
    </div>

    <div className="prose max-w-none">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          <h3 className="text-lg font-semibold mb-3">What is BMI?</h3>
          <p className="text-gray-700 mb-4">
            Body Mass Index (BMI) is a simple calculation using a person's height and weight. 
            The BMI formula divides an adult's weight in kilograms by their height in meters squared.
          </p>

          <h3 className="text-lg font-semibold mb-3">Why BMI Matters</h3>
          <p className="text-gray-700">
            BMI is a useful screening tool that can indicate whether someone is underweight, 
            at a healthy weight, overweight, or obese. It helps healthcare providers assess 
            potential health risks related to weight.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-lg font-semibold mb-3">BMI Categories</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>Underweight: BMI less than 18.5</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>Normal weight: BMI 18.5-24.9</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span>Overweight: BMI 25-29.9</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span>Obese: BMI 30 or greater</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>

      </div>
    </div>
  );
};

export default BMICalculator;