import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const LearningPreferences = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Learning Preferences</h2>
      <p className="text-gray-600">How would you like to learn?</p>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="videos" />
          <Label htmlFor="videos">Video Lessons</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="quizzes" />
          <Label htmlFor="quizzes">Interactive Quizzes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="articles" />
          <Label htmlFor="articles">Written Articles</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="challenges" />
          <Label htmlFor="challenges">Daily Challenges</Label>
        </div>
      </div>
    </div>
  );
};