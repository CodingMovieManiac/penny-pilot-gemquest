import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const PersonalInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Personal Information</h2>
      <p className="text-gray-600">Tell us a bit about yourself</p>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" placeholder="John Doe" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>
        <div>
          <Label htmlFor="age">Age</Label>
          <Input id="age" type="number" placeholder="18" />
        </div>
      </div>
    </div>
  );
};