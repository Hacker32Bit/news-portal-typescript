import React from "react";
import styles from "./Header.module.css";
import Profile from "../Profile";
import Search from "../Search";
import { SearchAutocompliteListProps } from "../Search/Search.interface";

const Header: React.FC<SearchAutocompliteListProps> = ({ searchAutocomplite }) => {

  console.log(searchAutocomplite)

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
      <div className={styles.right_side}>
        <Profile />
        <Search searchAutocomplite={searchAutocomplite}/>
      </div>
    </header>
  );
};

export default Header;
