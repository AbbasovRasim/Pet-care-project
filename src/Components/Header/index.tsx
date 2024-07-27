import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/start">start</NavLink>
    </header>
  );
};

export default Header;
