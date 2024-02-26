import { useForm } from "react-hook-form";
import { Input } from "./InputFiled";
import { LockIcon } from "../icons/LockIcon";
import { EmailIcon } from "../icons/EmailIcon";
import { useAuth } from "../context/AuthContext";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    signin(data);
  });

  return (
    <form onSubmit={onSubmit}>
      {signinErrors.map((err, key) => (
        <p
          className="bg-red-500 p-1 text-center mt-2 text-white text-sm text-pretty rounded-lg"
          key={key}
        >
          {err}
        </p>
      ))}
      <div className="flex flex-col mb-2">
        <label
          htmlFor="email"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          Correo
        </label>
        <div className="relative">
          <EmailIcon />
          <Input
            id="email"
            type="email"
            register={register}
            required={true}
            placeholder="Correo"
          />
          {errors.email && (
            <p className="text-red-500">El correo es requerido</p>
          )}
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <label
          htmlFor="password"
          className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
        >
          Contraseña:
        </label>
        <div className="relative">
          <LockIcon />
          <Input
            id="password"
            type="password"
            register={register}
            placeholder="Contraseña..."
            required={true}
          />
          {errors.password && (
            <p className="text-red-500">La contraseña es requerida</p>
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          type="submit"
          className="flex justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 hover:scale-105 rounded py-2 w-4/5 transition duration-300 ease-in"
        >
          <span className="mr-2 uppercase">Login</span>
          <span>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};
