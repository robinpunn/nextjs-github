import React, { ReactNode } from "react";
import Sidebar from "../navigation/Sidebar";
import Header from "../navigation/Header";
// import styles from "../../styles/Home.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <main className="issues">{children}</main>
    </>
  );
};

export default Layout;
