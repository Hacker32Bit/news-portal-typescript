import React from "react";
import styles from "./Header.module.css";
import Profile from "../Profile";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <Profile />
    </header>
  );
}

export default Header