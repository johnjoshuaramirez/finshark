import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

type Props = {};

type LoginFormsInputs = {
  userName: string;
  password: string;
};

const validation = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required")
});

const LoginPage = (props: Props) => {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.userName, form.password);
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-md bg-white rounded-md shadow-md">
        <div className="p-8 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            Sign in to your account
          </h1>
          <form
            className="space-y-6"
            onSubmit={handleSubmit(handleLogin)}
            noValidate
          >
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
              Sign in
            </button>
            <p className="text-center text-sm text-gray-700">
              Don’t have an account yet?{" "}
              <Link to="/register" className="font-medium text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
