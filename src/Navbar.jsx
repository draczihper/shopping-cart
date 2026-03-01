import { Link, } from "react-router";
import styles from './Navbar.module.css'
import shopIcon from "./assets/shop.png"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <Link to='/' className={styles.logo}>ShoShop</Link>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link className={styles.item} to='/'>Home</Link>
          </li>
          <li>
            <img src={shopIcon} alt="" />
            <Link className={styles.item} to='/Shop'>Shop</Link>
          </li>
          <li>
            <Link className={styles.item} to='/Cart'>Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;