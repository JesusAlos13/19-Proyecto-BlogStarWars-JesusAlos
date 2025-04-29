import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const Person = () => {
    const [personData, setPersonData] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetchPerson();
    }, [id]);

    const fetchPerson = async () => {
        try {
            const response = await fetch(`https://swapi.tech/api/people/${id}`);
            const data = await response.json();
            setPersonData(data.result.properties);
        } catch (error) {
            console.error("Error fetching people:", error);
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
                        <h1>{personData.name}</h1>
                        <p>Height: {personData.height}</p>
                        <p>Mass: {personData.mass}</p>
                        <p>Birth Year: {personData.birth_year}</p>
                        <p>Gender: {personData.gender}</p>
                    </div>

                    <div className="mx-5">
                        <img
                            className="rounded img-fluid"
                            src="https://external-preview.redd.it/8t2Ke2zdrHx669tFR1UzcOvELcpRPMUsPUyMLVB0EN0.jpg?width=640&crop=smart&auto=webp&s=7634d7e18c7152e569626f4c59b44249b2466f7b"
                            alt="Character"
                        />
                    </div>

                    <div className="text-center mt-3">
                        <Link to="/people">
                            <button className="btn btn-light my-1">Volver a personajes</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

