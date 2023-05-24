import { NavLink } from 'react-router-dom';
import styles from './Styles.module.css';

const Navbar = () => (
  <header>
    <h1><a href="/">Currency Exchanger</a></h1>
    <nav>
      <ul className="menu">
        <li><NavLink className={styles.link} to="/">Converter</NavLink></li>
        <li><NavLink className={styles.link} to="/support">Support</NavLink></li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
