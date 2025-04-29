import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card";

export const Favorite = () => {
  const { store } = useGlobalReducer();
  const { favorites = [] } = store;

  return (
    <div className="container py-4">
      <h1 className="mb-4">Favorites</h1>

      {favorites.length > 0 ? (
        <div className="row">
          {favorites.map(({ name, link, id }, idx) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={id || idx}>
              <Card name={name} link={link} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic text-lg mt-4 animate-fade-in">
          ¡Todavía no hay favoritos!
        </p>

      )}

      <div className="mt-4">
        <Link to="/">
          <button className="btn btn-secondary">Volver atrás</button>
        </Link>
      </div>
    </div>
  );
};
