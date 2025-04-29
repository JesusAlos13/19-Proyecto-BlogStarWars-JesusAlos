import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const Planet = () => {
    const [planetData, setPlanetData] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetchPlanet();
    }, [id]); 

    const fetchPlanet = async () => {
        try {
            const response = await fetch(`https://swapi.tech/api/planets/${id}`);
            const data = await response.json();
            setPlanetData(data.result.properties);
        } catch (error) {
            console.error("Error fetching planet:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
                    <div className="text-center">
                        <h1>{planetData.name}</h1>
                        <p>Climate: {planetData.climate}</p>
                        <p>Diameter: {planetData.diameter}</p>
                        <p>Gravity: {planetData.gravity}</p>
                        <p>Orbital Period: {planetData.orbital_period}</p>
                        <p>Population: {planetData.population}</p>
                        <p>Terrain: {planetData.terrain}</p>
                    </div>

                    <div className="mx-5">
                        <img
                            className="rounded img-fluid"
                            src="https://external-preview.redd.it/8t2Ke2zdrHx669tFR1UzcOvELcpRPMUsPUyMLVB0EN0.jpg?width=640&crop=smart&auto=webp&s=7634d7e18c7152e569626f4c59b44249b2466f7b"
                            alt="Planet"
                        />
                    </div>

                    <div className="text-center mt-3">
                        <Link to="/planets">
                            <button className="btn btn-light my-1">Back</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

