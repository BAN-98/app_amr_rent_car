import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imagenCard from "../../images/OIP.jpg";
import { faWheelchairMove } from "@fortawesome/free-solid-svg-icons";
export const CategorieCard = ({ src, info }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-sm hover:bg-gray-100">
        <h1 className="text-center">
          <span className="font-bold text-2xl">Fiat Mobi</span> o similares
        </h1>
        <img
          className="rounded-lg bg-cover mb-1"
          src={imagenCard}
          alt="imagenCard"
        />
        <div className="">

        </div>
        <FontAwesomeIcon icon={faWheelchairMove} /> 
      </div>
    </div>
  );
};
