import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container py-5 min-vh-100 d-flex justify-content-center align-items-center">
      <div className="row justify-content-center g-4">
        {/* Card for Characters */}
        <Link className="col-md-8 col-lg-6 text-decoration-none" to="/people">
          <div className="card shadow-lg border-0 h-100 rounded-4 overflow-hidden position-relative">
            <div className="card-text position-absolute top-0 start-0 end-0 p-3 bg-white d-flex justify-content-center align-items-center">
              <h5 className="m-0">Personajes</h5>
            </div>
            <img
              src="https://i2.wp.com/youvalencia.com/wp-content/uploads/2015/11/Star-Wars-Fes-Art-003.jpg"
              className="card-img-top"
              alt="Characters"
            />
          </div>
        </Link>

        {/* Card for Planets */}
        <Link className="col-md-8 col-lg-6 text-decoration-none" to="/planets">
          <div className="card shadow-lg border-0 h-100 rounded-4 overflow-hidden position-relative">
            <div className="card-text position-absolute top-0 start-0 end-0 p-3 bg-white d-flex justify-content-center align-items-center">
              <h5 className="m-0">Planetas</h5>
            </div>
            <img
              src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/11/20/17004847215766.jpg"
              className="w-100 h-100 object-fit-cover"
              alt="Planets"
            />
          </div>
        </Link>

        {/* Card for Vehicles */}
        <Link className="col-md-8 col-lg-6 text-decoration-none" to="/vehicles">
          <div className="card shadow-lg border-0 h-100 rounded-4 overflow-hidden position-relative">
            <div className="card-text position-absolute top-0 start-0 end-0 p-3 bg-white d-flex justify-content-center align-items-center">
              <h5 className="m-0">Vehículos</h5>
            </div>
            <img
              src="https://i.blogs.es/e8942b/millennium-falcon/650_1200.jpg"
              className="card-img-top"
              alt="Vehicles"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};






