import { Rocket, Coins } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Rocket className="w-8 h-8 text-primary animate-float" />
        <Coins className="absolute -bottom-1 -right-1 w-4 h-4 text-accent" />
      </div>
      <span className="font-heading font-bold text-2xl bg-clip-text text-transparent bg-primary-gradient">
        PennyPilot
      </span>
    </div>
  );
};