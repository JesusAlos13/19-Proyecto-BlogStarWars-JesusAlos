import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Planets = () => {
    const [planetList, setPlanetList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { dispatch } = useGlobalReducer();

    useEffect(() => {
        fetchPlanets();
    }, []);

    const fetchPlanets = async () => {
        try {
            const response = await fetch("https://swapi.tech/api/planets/");
            const data = await response.json();
            setPlanetList(data.results);
        } catch (error) {
            console.error("Error fetching planets:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <h1>Planetas Star Wars</h1>
            <div className="d-flex flex-wrap m-1">
                {planetList.map((planet, index) => (
                    <Card
                        key={index}
                        name={planet.name}
                        dispatch={dispatch}
                        link={`/planet/${planet.name}`} 
                    />
                ))}
            </div>
        </div>
    );
};
