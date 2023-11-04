import React from "react";
import styles from "./Header.module.css";
import Profile from "../Profile";
import Search from "../Search";
import { SearchAutocompliteListProps } from "../Search/Search.interface";
import { Link } from "react-router-dom";

const Header: React.FC<SearchAutocompliteListProps> = ({ searchAutocomplite }) => {

  console.log(searchAutocomplite)

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.right_side}>
        <Profile />
        <Search searchAutocomplite={searchAutocomplite}/>
      </div>
    </header>
  );
};

export default Header;
