import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface Props {
  to: string;
  children: string;
}

function Navbar() {
  //Checks if path is equal to href to be able to add active class
  return (
    <nav className="nav">
      <Link to="/" className="Site-title">
        Website
      </Link>
      <ul>
        <CustomLink to="/Pricing">Pricing</CustomLink>
        <CustomLink to="/About">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }: Props) {
  const ResolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: ResolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
