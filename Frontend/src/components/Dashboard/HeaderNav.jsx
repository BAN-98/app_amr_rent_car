import Logo from "../../images/R-_1_.png";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
const HeaderNav = () => {
  return (
    <nav className="bg-white p-2 backdrop-blur-lg border-b border-neutral-200">
      <div className=" mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-lg ">
          <img
            src={Logo}
            alt="logo"
            className="w-16 h-16 rounded-full bg-cover"
          />
        </Link>

        <h1 className="text-black uppercase text-2xl justify-center items-center">
          American Rent Car
        </h1>
        <NavLinks />
      </div>
    </nav>
  );
};

export default HeaderNav;
