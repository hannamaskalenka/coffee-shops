import React, { FC, ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
