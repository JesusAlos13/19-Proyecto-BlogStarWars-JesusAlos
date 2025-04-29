import { Link, useParams } from "react-router-dom"; // Importar hooks de react-router-dom
import useGlobalReducer from "../hooks/useGlobalReducer"; // Importar hook personalizado para acceder al estado global

export const Single = () => {

  const { store } = useGlobalReducer();


  const { theId } = useParams();
  const singleTodo = store.todos.find(todo => todo.id === parseInt(theId));

  return (
    <div className="container text-center">

      <h1 className="display-4">Todo: {singleTodo?.title}</h1>
      <hr className="my-4" />


      <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
          Volver atrás
        </span>
      </Link>
    </div>
  );
};
