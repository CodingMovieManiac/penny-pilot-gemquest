import { Logo } from "@/components/Logo";
import { GetStartedButton } from "@/components/GetStartedButton";
import { WaveBackground } from "@/components/WaveBackground";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // For now, we'll show a toast since the login page isn't built yet
    toast.info("Login feature coming soon!");
    // Once you have a login page, uncomment this:
    // navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 relative overflow-hidden">
      <WaveBackground />
      
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left z-10">
        <Logo />
        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl">
          Master Your Money,{" "}
          <span className="bg-clip-text text-transparent bg-primary-gradient">
            One Gem at a Time!
          </span>
        </h1>
        <p className="text-lg text-gray-600 font-sans">
          Free financial courses | Age-smart learning | Earn rewards
        </p>
        <div className="space-y-4">
          <GetStartedButton />
          <div className="text-sm text-gray-500">
            Already have an account?{" "}
            <Button 
              variant="link" 
              className="text-primary hover:text-primary-hover"
              onClick={handleSignIn}
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side - Placeholder for future content */}
      <div className="hidden md:block md:w-1/2 p-6">
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm" />
      </div>
    </div>
  );
};

export default Index;