import React, { useState } from "react";
import styles from "./Header.module.css";
import Search from "components/Search";
import { HeaderProps } from "components/Search/Search.interface";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import SignIn from "components/SignIn";

const Header: React.FC<HeaderProps> = ({ items, handleSignOut, user }) => {
  const { toggleTheme } = useTheme();
  const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false);

  const toggleUserMenu = (): void => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={styles.mainMenu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button onClick={toggleTheme}>TOGGLE</button>

        <Search items={items} />

        <div className={styles.userContainer}>
          {user ? (
            <>
              {user.photoURL ? (
                <div>
                  <p>{user.displayName}</p>
                  <img
                    src={user.photoURL}
                    alt="user name"
                    className={styles.userImage}
                    onClick={toggleUserMenu}
                  />
                </div>
              ) : (
                <div>{user.displayName}</div>
              )}

              {isUserMenuOpen ? (
                <div className={styles.userMenu}>
                  <ul>
                    <li>
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <a href="#">Settings</a>
                    </li>
                    <li>
                      <button onClick={handleSignOut}>Sign Out</button>
                    </li>
                  </ul>
                </div>
              ) : null}
            </>
          ) : (
            <SignIn />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
