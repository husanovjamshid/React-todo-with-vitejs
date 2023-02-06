import { Link } from "react-router-dom";
import "./public.scss";
export const PublicHeader = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          target="_blank"
          className="navbar-brand"
          href="https://github.com/husanovjamshid"
        >
          <i className="fab fa-github fa-2x mx-3 ps-1" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="me-3">
            <div className="form-white input-group" style={{ width: 250 }}>
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search or jump to... ( / )"
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Service{" "}
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link btn btn-primary" href="#">
                Sign in
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/login">
                Sign in <i class="fa-solid fa-right-to-bracket text-white ms-2"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center " to="/register">
                Sign up <i class="fa-solid fa-address-card ms-2 text-white"></i>
              </Link>
            </li>
          </ul>
          {/* <ul className="navbar-nav d-flex flex-row ms-auto me-3">
            <li className="nav-item me-3 me-lg-0 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-plus" />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item me-3 me-lg-0 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                  className="rounded-circle"
                  height={22}
                  alt
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};
