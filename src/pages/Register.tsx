import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Steps } from "@/components/registration/Steps";
import { PersonalInfo } from "@/components/registration/PersonalInfo";
import { FinancialGoals } from "@/components/registration/FinancialGoals";
import { LearningPreferences } from "@/components/registration/LearningPreferences";
import { SecuritySetup } from "@/components/registration/SecuritySetup";
import { AccountReview } from "@/components/registration/AccountReview";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      toast.success("Account created successfully!");
      navigate("/dashboard");
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto p-8">
        <Steps currentStep={step} />
        
        <div className="mt-8">
          {step === 1 && <PersonalInfo />}
          {step === 2 && <FinancialGoals />}
          {step === 3 && <LearningPreferences />}
          {step === 4 && <SecuritySetup />}
          {step === 5 && <AccountReview />}
        </div>

        <div className="mt-8 flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button onClick={nextStep}>
            {step === 5 ? "Complete Registration" : "Next"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Register;