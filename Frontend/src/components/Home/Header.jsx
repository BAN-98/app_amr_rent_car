import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../images/R-_1_.png'
import { Social } from "./Social";

export class Header extends React.Component {
    render() {
        return (
            <nav className="bg-zinc-900/30 p-2 backdrop-blur-lg sticky border-b-2 border-black">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="text-white text-lg font-bold">
                        <img src={Logo} alt="logo" className="w-16 h-16 rounded-full bg-cover" />
                    </Link>

                    <h1 className="text-white uppercase text-2xl justify-center items-center">American Rent Car</h1>

                    <div className="relative space-x-24">
                        <Link to="/" className="text-white items-center font-bold hover:bg-white/10 hover:text-red-600 py-2 rounded-full sm:px-3 scale-105 transition ease-in text-sm sm:text-base capitalize">
                            Inicio
                        </Link>

                        <Link to="#about" className="text-white items-center font-bold hover:bg-white/10 hover:text-red-600 py-2 rounded-full sm:px-3 scale-105 transition ease-in text-sm sm:text-base capitalize">
                            Acerca de
                        </Link>

                        <Link to="/services" className="text-white items-center font-bold hover:bg-white/10 hover:text-red-600 py-2 rounded-full sm:px-3 scale-105 transition ease-in text-sm sm:text-base capitalize">
                            Servicios
                        </Link>

                        <Link to="/contact" className="text-white items-center font-bold hover:bg-white/10 hover:text-red-600 py-2 rounded-full sm:px-3 scale-105 transition ease-in text-sm sm:text-base capitalize">
                            Contacto
                        </Link>

                    </div>
                    <Social />
                </div>
            </nav>
        );
    }

}
