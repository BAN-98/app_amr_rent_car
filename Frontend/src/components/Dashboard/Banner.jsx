import image from "../../images/bg-home-ab.webp";

const Banner = () => {
  return (
    <div className="flex items-center justify-center bg-gray-950   ">
      <img
        className="relative bg-cover min-h-[530px] bg-gray-950 opacity-50"
        src={image}
      ></img>
      <div className=" absolute flex flex-col container ">
        <h2 className="font-bold text-5xl text-white text-center">
          Busca, compra y alquila
        </h2>
        <h1 className="font-normal text-3xl text-white text-center mt-8 mb-16">
          Alquiler de coches a los mejores precios
        </h1>
        <div className="w-full h-[148px] inline-block container rounded-md m-auto items-center justify-center bg-yellow-500">
          <form>
            <div className="w-full items-center flex mb-0.5 p-6 shadow-inherit space-x-4">
              <div className="flex flex-col gap-6">
                <label>Lugar de recogida:</label>
                <input className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="flex flex-col gap-6">
                <label>Fecha y hora de recogida:</label>
                <input className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"></input>
              </div>
              <div className="flex flex-col gap-6">
                <label>Fecha y hora devolucion:</label>
                <input className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"></input>
              </div>
              <div className="flex flex-col gap-6">
                <label>Residencia:</label>
                <input className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"></input>
              </div>
              <div className="flex flex-col gap-6">
                <button className="mt-10 py-3 rounded-lg px-8 text-center bg-emerald-500 text-white hover:bg-emerald-600">
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
