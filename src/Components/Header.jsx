import React from "react";
import styles from "./Header.module.css";
import photo from "../assets/dogs.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={photo} alt="logo-dogs" />
      <div>Login | Criar</div>
    </header>
  );
};

export default Header;
