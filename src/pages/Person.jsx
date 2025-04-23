import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Person = () => {
    const [person, setPerson] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetchPerson();
    }, []);

    const fetchPerson = async () => {
        try {
            const response = await fetch(`https://swapi.tech/api/people/${id}`);
            const data = await response.json();
            setPerson(data.result.properties);
        } catch (error) {
            console.error("Error fetching people:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
                    <div className="text-center">
                        <h1>{person.name}</h1>
                        <p>Height : {person.height}</p>
                        <p>Mass : {person.mass}</p>
                        <p>Birth Year : {person.birth_year}</p>
                        <p>Gender : {person.gender}</p>
                    </div>

                    <div className="mx-5">
                        <img className="rounded" style={{ width: "30rem" }} src="https://wallpapers.com/images/featured/fondos-de-star-wars-vdgqv4b95q9ur6ak.jpg" alt="Character" />
                    </div>

                    <div className="text-center mt-3">
                        <Link to="/people">
                            <button className="btn btn-light my-1">Back</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};
``
