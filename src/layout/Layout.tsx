import React, { ReactNode, useState, useRef } from "react";
import Sidebar from "../navigation/Sidebar";
import Header from "../navigation/Header";

interface LayoutProps {
  children: ReactNode;
  setCategory: (category: string) => void;
  category: string;
}

const Layout: React.FC<LayoutProps> = ({ children, setCategory, category }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleOutsideClick = (event: any) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <Sidebar
        category={category}
        setCategory={setCategory}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        ref={sidebarRef}
      />
      <Header toggleSidebar={toggleSidebar} />
      <main className="issues" onClick={handleOutsideClick}>
        {children}
      </main>
    </>
  );
};

export default Layout;
