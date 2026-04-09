import "../styles/navbar.css";
import { NAV_IDS } from "../data/portfolio";

/**
 * Fixed navigation bar with scroll-spy and smooth scrolling.
 * @param {Object} props
 * @param {string}   props.name   - Developer name (logo)
 * @param {string}   props.active - ID of the currently visible section
 * @param {Function} props.go     - Function to scroll to a section
 */
export default function Navbar({ name, active, go }) {
  const year = new Date().getFullYear();

  return (
    <nav className="p-nav">
      <div className="container nav-inner">
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => { 
            e.preventDefault(); 
            go("home"); 
          }}
        >
          {name}
        </a>

        <ul className="nav-links mb-0">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={(e) => { 
                  e.preventDefault(); 
                  go(id); 
                }}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-avail">Available {year}</div>
      </div>
    </nav>
  );
}