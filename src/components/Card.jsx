import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({ name, link }) => {
    const { store, dispatch } = useGlobalReducer();
    const isFavorite = store.favorites.some(item => item.name === name);

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "REMOVE_FROM_FAVORITES", payload: { name } });
        } else {
            dispatch({ type: "ADD_TO_FAVORITES", payload: { name, link } });
        }
    };

    return (
        <div className="card shadow-sm rounded-4 border-0 m-2" style={{ width: "18rem", transition: "transform 0.2s" }}>
            <img
                src="https://external-preview.redd.it/8t2Ke2zdrHx669tFR1UzcOvELcpRPMUsPUyMLVB0EN0.jpg?width=640&crop=smart&auto=webp&s=7634d7e18c7152e569626f4c59b44249b2466f7b"
                className="card-img-top rounded-top-4"
                alt="Foto"
            />
            <div className="card-body">
                <h5 className="card-title text-center fw-semibold">{name}</h5>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Link to={link} className="btn btn-outline-success btn-sm">
                        Mas detalles
                    </Link>
                    <button className={`btn btn-sm ${isFavorite ? "btn-danger" : "btn-outline-danger"}`} onClick={toggleFavorite}>
                        {isFavorite ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
        </div>
    );
};
