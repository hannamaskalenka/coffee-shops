import { PAGES } from "@/shared/constants";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {PAGES.map((page) => (
          <li key={page.id} className={styles.item}>
            <Link href={page.route}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
