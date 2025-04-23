import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card";

export const Favorite = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Tus Favoritos <span className="text-lg text-gray-500">({store.favorites.length})</span>
      </h1>

      {store.favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {store.favorites.map((item, index) => (
            <div key={index}>
              <Card name={item.name} link={item.link} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">Todavía no hay favoritos. Añade alguno!</p>
      )}

      <div className="mt-10 text-center">
        <Link to="/">
          <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition">
            ⬅ Volver al inicio
          </button>
        </Link>
      </div>
    </div>
  );
};

