import Image from "next/image";
import React from "react";
import styles from "./header.module.scss";
import HeaderImage from "/public/static/header.svg";
import { Divider } from "antd";
import NavBar from "../Navbar";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        Coffee <span>shops</span>
      </h1>
      <Image
        className={styles.image}
        src={HeaderImage}
        width={200}
        height={100}
        alt=""
      />
      <Divider className={styles.description} style={{ marginTop: "8px" }} />
      <NavBar />
      <Divider className={styles.description} style={{ marginBottom: "8px" }} />
    </div>
  );
};

export default Header;
