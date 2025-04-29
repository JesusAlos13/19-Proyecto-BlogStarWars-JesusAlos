import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Vehicles = () => {
    const [vehicleList, setVehicleList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { dispatch } = useGlobalReducer();

    useEffect(() => {
        fetchVehicles();
    }, []); 

    const fetchVehicles = async () => {
        try {
            const response = await fetch("https://swapi.tech/api/vehicles/");
            const data = await response.json();
            setVehicleList(data.results);
        } catch (error) {
            console.error("Error fetching vehicles:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <h1>Vehículos Star Wars</h1>
            <div className="d-flex flex-wrap m-1">
                {vehicleList.map((vehicle, index) => (
                    <Card
                        key={index}
                        name={vehicle.name}
                        dispatch={dispatch}
                        link={`/vehicle/${vehicle.name}`} 
                    />
                ))}
            </div>
        </div>
    );
};
