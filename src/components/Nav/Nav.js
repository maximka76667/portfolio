import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__link">Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="about" className="nav__link">About</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="projects" className="nav__link">Projects</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="blog" className="nav__link">Blog</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;