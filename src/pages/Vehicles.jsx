import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        try {
            const response = await fetch("https://swapi.tech/api/vehicles/");
            const data = await response.json();
            setVehicles(data.results);
        } catch (error) {
            console.error("Error fetching vehicles:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="container">
            <h1>Vehículos Star Wars</h1>
            <button onClick={handleBack} className="btn btn-primary mb-3">
                Volver atrás
            </button>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className="d-flex flex-wrap justify-content-center m-1">
                    {vehicles.map((vehicle, index) => (
                        <Card
                            key={index}
                            name={vehicle.name}
                            dispatch={dispatch}
                            link={`/vehicle/${vehicle.uid}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
