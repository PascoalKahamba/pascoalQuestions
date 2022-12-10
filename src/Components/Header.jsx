import React from "react";
import styles from "./Header/module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="../assets/dogs.svg" alt="logo-dogs" />
      <div>Login | Criar</div>
    </header>
  );
};

export default Header;
