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
        <div className="card m-1" style={{ width: "18rem" }}>
            <img
                src="https://i.blogs.es/de17ae/star-wars-outlaws-playstation-xbox-pc/1366_2000.jpeg"
                className="card-img-top"
                alt="Foto"
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={link} className="btn btn-light">
                        More info
                    </Link>
                    <button className="btn btn-dark" onClick={toggleFavorite}>
                        {isFavorite ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
        </div>
    );
};