export const AccountReview = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Review Your Account</h2>
      <p className="text-gray-600">Please review your information before completing registration</p>
      
      <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">
          By clicking "Complete Registration", you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};