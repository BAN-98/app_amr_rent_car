import React from "react";
import raptor from "../images/R.jpeg";
import { FormLogin } from "../components/FormLogin";
import { Link } from "react-router-dom";

export class Login extends React.Component {
  render() {
    return (
      <div className="font-Onest min-h-screen flex  items-center justify-center bg-gradient-to-t from-slate-800 to-red-600">
        <div className="flex flex-none bg-zinc-600/30 sm:shadow-xl sm:px-0 md:px-0 rounded-lg max-w-7xl">
          <div className="bg-gray-100 rounded-lg flex justify-center items-center">
            <div className="w-1/2 h-full  hidden lg:block rounded-lg ">
              <img
                src={raptor}
                alt="Placeholder Image"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="rounded md:p-5 sm:20 p-8 w-full lg:w-1/2">
              <div className="text-center font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
                Inicia sesion con tu cuenta
              </div>
              <button className="w-full items-center justify-center rounded-lg py-2 text-sm text-gray-800 bg-gray-100 hover:bg-blue-700 hover:text-white">
                <span className=" flex items-center justify-center h-full w-10 text-blue-500">
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span>O Facebook</span>
              </button>
              <div className="relative mt-3 h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                  <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                    O Inicia sesion con tu correo
                  </span>
                </div>
              </div>
              <div className="mt-5 ">
                <FormLogin></FormLogin>
                <div className="flex justify-center items-center my-1">
                  <p>No tienes una cuenta ?</p>
                </div>
                <div className="flex w-full justify-center">
                  <Link className="bg-green-800 p-2 w-1/5 text-center rounded text-white uppercase hover:bg-green-500 hover:scale-105 duration-500" to="/register">
                    Registrate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
