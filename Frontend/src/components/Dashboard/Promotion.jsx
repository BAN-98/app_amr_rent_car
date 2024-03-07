import imagePromotion from "../../images/mitsubishi-xpander-cross-2022.png.png";
export const Promotion = () => {
  return (
    <div className="border-gray-900 bg-zinc-200 p-10 text-center">
      <h1 className="text-4xl font-bold mb-6 text-center">
        <span className="text-zinc-500">Ofertas</span> RentCars
      </h1>
      <div className="bg-red-50 rounded-xl shadow-xl p-2">
        <div className="flex flex-row items-center gap-4">
          <img
            className="w-full max-w-lg bg-cover "
            src={imagePromotion}
            alt="Oferta de alquiler de coches con Localiza"
          />

          <p className="text-gray-700 text-lg text-balance">
            ¡Alquila con Localiza y obtén la exención de la tarifa del
            aeropuerto! Promoción válida para reservas confirmadas hasta
            31/12/24, con retiro entre 11/12/23 hasta 31/12/24. Promoción no
            acumulativa, pudiendo ser alterada sin previo aviso. Válida para
            reservas prepagas y vehículos que presentan la etiqueta de
            promoción.
          </p>
        </div>
      </div>
    </div>
  );
};
