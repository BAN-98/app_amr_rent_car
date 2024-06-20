import { useForm } from "react-hook-form";
import { UserIcon } from "../icons/UserIcon";
import { Input } from "./InputFiled";
import { EmailIcon } from "../icons/EmailIcon";
import { LockIcon } from "../icons/LockIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import { LocationIcon } from "../icons/LocationIcon";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuth, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);

  const onSubmit = async (values) => {
    signup(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {registerErrors.map((error, index) => (
        <p
          className="bg-red-500 rounded-lg p-1 text-white text-pretty text-sm"
          key={index}
        >
          {error}
        </p>
      ))}
      <div className="flex flex-col mb-3">
        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
          Usuario
        </label>
        <div className="relative">
          <UserIcon />
          <Input
            id="userName"
            type="text"
            register={register}
            required
            placeholder="JHON98"
          />
        </div>
        {errors.userName && (
          <>
            <p className="text-red-500">Usuario requerido</p>
          </>
        )}
      </div>
      <div className="flex flex-col mb-3">
        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
          Nombre
        </label>
        <div className="relative">
          <UserIcon />
          <Input
            id="name"
            type="text"
            register={register}
            required
            placeholder="Jhon"
          />
        </div>
        {errors.name && (
          <p className="text-red-500">El nombre de usuario es requerido</p>
        )}
      </div>
      <div className="flex flex-col mb-3">
        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
          Correo
        </label>
        <div className="relative">
          <EmailIcon />
          <Input
            id="email"
            type="email"
            register={register}
            required
            placeholder="abc123@email.com"
          />
        </div>
        {errors.email && <p className="text-red-500">El correo es requerido</p>}
      </div>
      <div className="flex flex-col mb-3">
        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
          Contraseña:
        </label>
        <div className="relative">
          <LockIcon />
          <Input
            id="password"
            type="password"
            register={register}
            required
            placeholder=""
          />
        </div>
        {errors.password && (
          <p className="text-red-500">La contraseña es requerida</p>
        )}
      </div>
      <div className="flex flex-col mb-3">
        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
          Telefono:
        </label>
        <div className="relative">
          <PhoneIcon />
          <Input
            id="phone"
            type="phone"
            register={register}
            required
            placeholder="+573123456789"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500">El telefono es requerido</p>
        )}
      </div>
      <div className="flex flex-col mb-3">
        <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
          Direccion:
        </label>
        <div className="relative">
          <LocationIcon />
          <Input
            id="address"
            type="address"
            register={register}
            required
            placeholder="Av Boyaca"
          />
        </div>
      </div>
      {errors.address && (
        <p className="text-red-500">La direccion es requerida</p>
      )}
      
      <div className="flex w-full py-2">
        <button
          type="submit"
          className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-zinc-700 hover:bg-blue-500 hover:scale-105 rounded-xl py-2 w-full transition duration-300 ease-in"
        >
          <span className="mr-2 uppercase font-bold">Registrar</span>
          <span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </button>
        
      </div>
      <div className="flex flex-col justify-center items-center mb-3 gap-3">
        <p className="text-white text-base">
          Ya tienes una <b>Cuenta ? </b>
        </p>
          <Link
            to="/"
            className="w-11/12 text-center rounded-lg bg-green-600 p-3 font-bold text-white sm:text-sm hover:bg-green-500 hover:scale-105 duration-300 uppercase"
          >
           Inicia sesion
          </Link>
      </div>
    </form>
  );
};
