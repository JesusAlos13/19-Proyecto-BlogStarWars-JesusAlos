import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import  useGlobalReducer  from "../hooks/useGlobalReducer";  

     
export const Vehicles = () => {
        const [vehicles, setVehicles] = useState([]);
        const [loading, setLoading] = useState(true);
        const { store, dispatch } = useGlobalReducer();
    
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
    
        return (
            <div className="container">
                <h1>Vehículos Star Wars</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="d-flex flex-wrap justify-content-center m-1">
                       
                        {vehicles.map((vehicle, index) => (
                            <Card key={index} name={vehicle.name} dispatch={dispatch} link={`/vehicle/${vehicle.uid}`} />
                        ))}

                    </div>
                    
                )}
            </div>
        );
    
    
   
    
};