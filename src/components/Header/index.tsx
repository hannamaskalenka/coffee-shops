import Image from "next/image";
import React from "react";
import styles from "./header.module.scss";
import HeaderImage from "/public/static/header.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1}>
          Coffee <span>shops</span>
        </h1>
      </div>
      <Image
        style={{ position: "absolute", top: 0, right: 0 }}
        src={HeaderImage}
        alt=""
      />
      <p className={styles.description}>Discover your coffee shops around</p>
    </div>
  );
};

export default Header;
