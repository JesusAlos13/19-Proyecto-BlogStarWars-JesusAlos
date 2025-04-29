import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    useEffect(() => {
        fetchPlanets();
    }, []);

    const fetchPlanets = async () => {
        try {
            const response = await fetch("https://swapi.tech/api/planets/");
            const data = await response.json();
            setPlanets(data.results);
        } catch (error) {
            console.error("Error fetching planets:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="container">
            <h1>Planetas Star Wars</h1>
            <button onClick={handleBack} className="btn btn-primary mb-3">
                Volver atrás
            </button>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className="d-flex flex-wrap justify-content-center m-1">
                    {planets.map((planet, index) => (
                        <Card
                            key={index}
                            name={planet.name}
                            dispatch={dispatch}
                            link={`/planet/${planet.uid}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
