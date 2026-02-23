import { Link, } from "react-router";
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <Link to='/' className={styles.logo}>ShoShop</Link>
      <nav>
        <ul className={styles.listItems}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Shop'>Shop</Link>
          </li>
          <li>
            <Link to='/Cart'>Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;