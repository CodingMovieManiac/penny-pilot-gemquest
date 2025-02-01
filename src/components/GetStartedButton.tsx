import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GetStartedButton = () => {
  return (
    <Button
      size="lg"
      className="bg-primary-gradient hover:opacity-90 transition-opacity animate-pulse"
    >
      Get Started
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
};