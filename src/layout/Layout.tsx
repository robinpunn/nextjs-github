import React, { ReactNode, useState, useRef } from "react";
import Sidebar from "../navigation/Sidebar";
import Header from "../navigation/Header";

interface LayoutProps {
  children: ReactNode;
  setCategory: (category: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, setCategory }) => {
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
