import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const GetStartedButton = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // For now, we'll show a toast since the registration page isn't built yet
    toast.info("Registration feature coming soon!");
    // Once you have a registration page, uncomment this:
    // navigate("/register");
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