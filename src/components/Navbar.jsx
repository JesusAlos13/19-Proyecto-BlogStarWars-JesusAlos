import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Heart } from "lucide-react";

export const Navbar = () => {
	const { store } = useGlobalReducer();
	const favoritesCount = store.favorites.length;

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top" style={{ height: "120px" }}>
			<div className="container d-flex justify-content-between align-items-center" style={{ height: "120px" }}>
				<Link className="navbar-brand mx-auto" to="/">
					<img
						src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
						alt="Home"
						style={{ width: "250px", height: "auto", objectFit: "contain" }}
						className="rounded"
					/>
				</Link>

				<div className="d-flex align-items-center">
					<Link className="nav-link text-white d-flex align-items-center gap-1" to="/favorite" style={{ fontSize: "1.2rem" }}>
						Favoritos
						<span className="ms-2 d-flex align-items-center justify-content-center" style={{
							backgroundColor: "yellow",
							borderRadius: "50%",
							padding: "0.2rem 0.5rem",
							color: "red",
							fontSize: "1rem"
						}}>
							<Heart size={16} className="me-1" /> {favoritesCount}
						</span>
					</Link>
				</div>


			</div>
		</nav>
	);
};

