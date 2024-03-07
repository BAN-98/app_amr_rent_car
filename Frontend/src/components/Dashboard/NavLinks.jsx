import { Link } from "react-router-dom";
import { Social } from "../Home/Social";

const NavLinks = () => {
  const links = [
    {
      inicio: { path: "/", label: "Inicio" },
      about: { path: "/", label: "About" },
      services: { path: "/", label: "Servicios" },
      login: { path: "/login", label: "Iniciar Sesion" },
      signup: { path: "/signup", label: "Registrate" },
        
    },
  ];
  return (
    <>
      <div className="relative space-x-12 ">
        {links.map(({ inicio, about, services,login,signup }, key) => (
          <>
            <Link className="text-black bg-amber-500 items-center hover:bg-amber-600 hover:text-black py-2 rounded-full sm:px-3 scale-105 transition ease-in text-sm sm:text-base capitalize" key={key} to={inicio.path}>
              {inicio.label}
            </Link>
            <Link className="text-black bg-amber-500 items-center hover:bg-amber-600 hover:text-black py-2 rounded-full sm:px-3 scale-105 transition ease-in text-sm sm:text-base capitalize" key={key} to={about.path}>
              {about.label}
            </Link>
            <Link className="text-black bg-amber-500 items-center hover:bg-amber-600 hover:text-black py-2 rounded-full sm:px-3 scale-105 transition ease-in text-sm sm:text-base capitalize" key={key} to={services.path}>
              {services.label}
            </Link>
            <Link className="text-black bg-amber-500 items-center hover:bg-amber-600 hover:text-black py-2 rounded-full sm:px-3 scale-105 transition ease-in text-sm sm:text-base capitalize" key={key} to={login.path}>
              {login.label}
            </Link>
            <Link className="text-black bg-amber-500 items-center hover:bg-amber-600 hover:text-black py-2 rounded-full sm:px-3 scale-105 transition ease-in text-sm sm:text-base capitalize" key={key} to={signup.path}>
              {signup.label}
            </Link>
          </>
        ))}
      </div>
      <Social />
    </>
  );
};
export default NavLinks;
