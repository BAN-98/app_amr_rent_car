import { CategorieCard } from "./CategorieCard";

export const Categories = () => {
  return (
    <div className="bg-zinc-200 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl text-center font-bold mb-5">
        <span className="text-gray-500">
          Categorías de carros disponibles en {" "}
        </span>
        American Rent Car
      </h1>
      <div className="grid grid-cols-4 gap-3">
        <CategorieCard />
        <CategorieCard />
        <CategorieCard />
        <CategorieCard />
      </div>
    </div>
  );
};
