import { Link, Outlet } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='Home'>Home</Link>
          </li>
          <li>
            <Link to='Shop'>Shop</Link>
          </li>
          <li>
            <Link to='Cart'>Cart</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;