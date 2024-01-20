import React from "react";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">
      <div className="m-auto w-full max-w-md p-6 bg-white dark:bg-gray-900 shadow rounded-lg">
        <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
          Login
        </h1>

        <div className="mt-4">
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="button"
              className="ml-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-6">
          <Button className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 dark:hover:bg-indigo-800">
            Login
          </Button>
        </div>
        <div className="mt-6">
          <Button className="w-full rounded-md bg-blue-600 py-2 px-4 text-white hover:bg-blue-700 dark:hover:bg-blue-800">
            Create Account
          </Button>
        </div>

        <div className="mt-4 flex justify-between">
          <Alert>
            <AlertTitle>Need help?</AlertTitle>
            <AlertDescription>Contact support for assistance.</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
