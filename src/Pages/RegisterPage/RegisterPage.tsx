import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";

type Props = {};

type RegisterFormsInputs = {
  email: string;
  userName: string;
  password: string;
};

const validation = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required")
});

const RegisterPage = (props: Props) => {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: RegisterFormsInputs) => {
    registerUser(form.email, form.userName, form.password);
  };
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-md bg-white rounded-md shadow-md">
        <div className="p-8 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            Register a new account
          </h1>
          <form
            className="space-y-6"
            onSubmit={handleSubmit(handleLogin)}
            noValidate
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
                className={`w-full p-2.5 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                {...register("userName")}
                className={`w-full p-2.5 border ${
                  errors.userName ? "border-red-500" : "border-gray-300"
                } rounded-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
              />
              {errors.userName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.userName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                {...register("password")}
                className={`w-full p-2.5 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-none transition"
            >
              Register
            </button>

            <p className="text-center text-sm text-gray-700">
              Already have an account?{" "}
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
