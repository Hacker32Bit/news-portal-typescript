import React, { useState } from "react";
import styles from "./Profile.module.css";

const Profile: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onProfile = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.profile} onClick={onProfile}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile"
        ></img>
      </div>
      {isOpen ? (
        <div className={styles.profile_menu}>
          <ul>
            <li>
              <a href="#">Setting</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
          <div className={styles.line}></div>
          <ul>
            <li>
              <a href="#">Sign Out</a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Profile;