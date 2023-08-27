import React, { ReactNode } from "react";
// import Navbar from "../navbar/index";
// import styles from "../../styles/Home.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <aside className="sidebar">
        <section className="search"></section>
        <section className="categories"></section>
      </aside>
      <main className="issues">{children}</main>
    </>
  );
};

export default Layout;
