import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import "./Header.css"; // <-- Import your custom CSS

export default function Header() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="navbar navbar-expand-lg custom-navbar shadow-sm px-4">
            <Link to="/" className="navbar-brand custom-brand">Movie Flex</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={clsx("nav-link custom-link", isActive("/") && "active-link")}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/login"
                            className={clsx("nav-link custom-link", isActive("/login") && "active-link")}
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
