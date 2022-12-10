import React from "react";
import styles from "./Header.module.css";
import photo from "../assets/dogs.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={photo} alt="logo-dogs" />
      </Link>
      <Link to="login">
        <div className={styles.login}>Login | Criar</div>
      </Link>
    </header>
  );
};

export default Header;
