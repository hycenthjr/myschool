import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import FormButton from "./admin/FormButton";
import Banner from "./admin/Banner";
import Logo from "../constants/Logo";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword((v) => !v);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    setAuthError("");
    // Accept demo credentials: enter `demo` for both email and password
    // they will be mapped to the demo admin account
    const isDemo = data.email === "demo" && data.password === "demo";
    const email = isDemo ? "admin@mail.com" : data.email;
    const password = isDemo ? "@demo123" : data.password;

    // Simulate authentication delay
    await new Promise((r) => setTimeout(r, 700));

    if (isDemo || (email === "admin@mail.com" && password === "@demo123")) {
      // simulated successful login
      console.log("[ADMIN LOGIN] success", email);
      setLoading(false);
      navigate("/admin/dashboard");
      return;
    }

    setAuthError(
      "Invalid credentials. For demo use: email `demo` and password `demo`."
    );
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex md:flex-row md:h-screen">
      <div className="w-full hidden md:flex">
        <Banner />
      </div>
      <div className="w-full md:max-w-[calc(100% - 50rem)] px-[5%] md:px-[0%] py-[10%] md:py-[5%]">
        <div className="w-full md:max-w-[450px]">
          <div className="flex justify-center items-center mb-[10%] md:hidden">
            <Logo textColor="black" />
          </div>
          <h2 className="text-3xl font-semibold mb-8 text-center">Welcome</h2>
          <p className="text-center text-sm text-gray-600 mb-6 uppercase font-semibold">
            Please login to your admin dashboard
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`mt-1 block w-full p-2 border rounded-md outline-none focus:ring-2 bg-white ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                placeholder="Enter email address"
                autoComplete="off"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className={`block w-full p-2 pr-10 border rounded-md outline-none focus:ring-2 bg-white ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="Enter password"
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                >
                  {showPassword ? (
                    <LuEye size={18} />
                  ) : (
                    <LuEyeClosed size={18} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {authError && (
              <p className="text-red-500 text-sm mt-1 text-center">
                {authError}
              </p>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-[0.7rem] md:text-sm text-gray-700">
                  Remember Me
                </label>
              </div>
              <Link
                to="/"
                className="text-[0.7rem] md:text-sm text-blue-900 hover:underline"
              >
                Go Back To Website
              </Link>
            </div>

            <div className="max-w-[20rem] mx-auto mt-[15%] ">
              <FormButton title="Login" type="submit" loading={loading} />
              <Link
                to="./forgot-password"
                className="text-[0.7rem] md:text-sm text-blue-900 hover:underline mx-auto block text-center mt-4 uppercase font-bold"
              >
                Forgot your Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
