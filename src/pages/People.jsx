import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import  useGlobalReducer  from "../hooks/useGlobalReducer";  

export const People = () => {
        const [people, setPeople] = useState([]);
        const [loading, setLoading] = useState(true);
        const { store, dispatch } = useGlobalReducer();
    
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
        
        return (
            <div className="container my-4">
                <h1 className="text-center mb-4">Personajes Star Wars</h1>
                {loading ? (
                    <p className="text-center">Cargando...</p>
                ) : (
                    <div className="row g-4">
                        {people.map((person, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <Card
                                    name={person.name}
                                    dispatch={dispatch}
                                    link={`/person/${person.uid}`}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
        
    
    
   
    
};