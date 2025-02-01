import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const FinancialGoals = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Financial Goals</h2>
      <p className="text-gray-600">What would you like to achieve?</p>

      <RadioGroup defaultValue="savings">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="savings" id="savings" />
            <Label htmlFor="savings">Build Savings</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="investment" id="investment" />
            <Label htmlFor="investment">Learn Investing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="budgeting" id="budgeting" />
            <Label htmlFor="budgeting">Better Budgeting</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="debt" id="debt" />
            <Label htmlFor="debt">Debt Management</Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};