import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const GetStartedButton = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register");
  };

  return (
    <Button
      size="lg"
      className="bg-primary-gradient hover:opacity-90 transition-opacity animate-pulse"
      onClick={handleGetStarted}
    >
      Get Started
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
};