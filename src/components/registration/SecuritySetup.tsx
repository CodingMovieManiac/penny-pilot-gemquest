import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SecuritySetup = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Security Setup</h2>
      <p className="text-gray-600">Secure your account</p>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" type="password" placeholder="••••••••" />
        </div>
      </div>
    </div>
  );
};