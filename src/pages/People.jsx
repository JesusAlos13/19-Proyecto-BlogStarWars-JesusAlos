import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const People = () => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = async () => {
        try {
            const response = await fetch("https://swapi.tech/api/people/");
            const data = await response.json();
            setPeople(data.results);
        } catch (error) {
            console.error("Error fetching people:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="container">
            <h1>Personajes Star Wars</h1>
            <button onClick={handleBack} className="btn btn-primary mb-3">
                Volver atrás
            </button>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className="d-flex flex-wrap justify-content-center m-1">
                    {people.map((person, index) => (
                        <Card
                            key={index}
                            name={person.name}
                            dispatch={dispatch}
                            link={`/person/${person.uid}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
