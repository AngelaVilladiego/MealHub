import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navToLogin = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/signup/questionnaire", {
      state: { username: email, password: password },
    });
  };

  return (
    <div className="p-8 flex flex-col gap-3 items-center h-screen text-gray-800">
      <span className="font-brand text-orange-500 text-4xl pb-16 text-center">
        MealHub
      </span>
      <form onSubmit={handleSubmit} className="w-4/12 mx-auto">
        <h1 className="mb-10 text-2xl font-header">Sign up</h1>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgblock w-full p-2.5"
            placeholder="name@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="passwordConfirm"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="passwordConfirm"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <span className="flex items-center justify-between">
          <span className="inline-flex items-center gap-3">
            Have an account?
            <button
              type="button"
              onClick={navToLogin}
              className="text-white bg-emerald-500 hover:bg-emerald-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Log in
            </button>
          </span>
          <button
            type="submit"
            className="text-white bg-orange-500 hover:bg-orange-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Sign up
          </button>
        </span>
      </form>
    </div>
  );
}

export default SignUpPage;
