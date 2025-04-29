import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card";

// Componente para el botón de eliminar favoritos
const ClearFavoritesButton = ({ onClear }) => (
  <div className="text-center mb-6">
    <button
      onClick={onClear}
      className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition-all"
    >
      🗑 Eliminar todos los favoritos
    </button>
  </div>
);

const Favorite = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleClearFavorites = () => {
    dispatch({ type: "CLEAR_FAVORITES" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">
        Tus Favoritos{" "}
        <span className="text-lg text-gray-500">({store.favorites.length})</span>
      </h1>

      {store.favorites.length > 0 ? (
        <>
          <ClearFavoritesButton onClear={handleClearFavorites} />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {store.favorites.map((item, index) => (
              <Card key={index} name={item.name} link={item.link} />
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-8">
          Todavía no hay favoritos. ¡Añade alguno!
        </p>
      )}

      <div className="mt-12 text-center">
        <Link to="/">
          <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md transition-all">
            ⬅ Volver al inicio
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Favorite;


