
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Employee Management
        </NavLink>

        <div className="navbar-nav ms-auto">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active fw-bold' : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/employee-form"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active fw-bold' : ''}`
            }
          >
            Employee Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
