import { Check } from "lucide-react";

const steps = [
  "Personal Information",
  "Financial Goals",
  "Learning Preferences",
  "Security Setup",
  "Review"
];

export const Steps = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="relative">
      <div className="absolute top-4 w-full h-0.5 bg-gray-200">
        <div
          className="absolute h-full bg-primary transition-all duration-500"
          style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
        />
      </div>
      
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 <= currentStep
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {index + 1 < currentStep ? (
                <Check className="h-5 w-5" />
              ) : (
                index + 1
              )}
            </div>
            <span className="mt-2 text-xs text-gray-600">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};