import { NavLink } from "react-router-dom";
import Authorized from "./auth/Authorized";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success border-bottom box-shadow mb-3 ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          MovieBox
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/filter">
                Filter Movies
              </NavLink>
            </li>
            <Authorized
              role="admin"
              authorized={
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/actors">
                      Actors
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/moviecinemas">
                      Cinema
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/movies/create">
                      Create Movie
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/genres">
                      Genres
                    </NavLink>
                  </li>
                </>
              }
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
