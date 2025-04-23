import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Planet = () => {
    const [planet, setPlanet] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetchPlanet();
    }, []);

    const fetchPlanet = async () => {
        try {
            const response = await fetch(`https://swapi.tech/api/planets/${id}`);
            const data = await response.json();
            setPlanet(data.result.properties);
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
                        <h1>{planet.name}</h1>
                        <p>Climate : {planet.climate}</p>
                        <p>Diameter : {planet.diameter}</p>
                        <p>Gravity : {planet.gravity}</p>
                        <p>Orbital Period : {planet.orbital_period}</p>
                        <p>Population : {planet.population}</p>
                        <p>Terrain : {planet.terrain}</p>
                    </div>

                    <div className="mx-5">
                        <img className="rounded" style={{ width: "30rem" }} src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg" alt="Planet" />
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
