import React, {
  MouseEvent,
  ReactNode,
  useState,
  useRef,
  useEffect,
} from "react";
import Sidebar from "../navigation/Sidebar";
import Header from "../navigation/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // const handleOutsideClick = (event: MouseEvent) => {
  //   console.log("clicked", event.target);
  //   if (
  //     sidebarRef.current !== null &&
  //     !sidebarRef.current.contains(event.target as Node) &&
  //     event.target !== document.querySelector(".menu")
  //   ) {
  //     setSidebarOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   if (sidebarOpen) {
  //     document.addEventListener("click", handleOutsideClick);
  //   } else {
  //     document.removeEventListener("click", handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [sidebarOpen]);

  return (
    <>
      <div ref={sidebarRef}>
        <Sidebar sidebarOpen={sidebarOpen} />
      </div>
      <Header toggleSidebar={toggleSidebar} />
      <main className="issues">{children}</main>
    </>
  );
};

export default Layout;
