import { forwardRef, ForwardRefRenderFunction } from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: ForwardRefRenderFunction<HTMLDivElement, SidebarProps> = (
  { sidebarOpen, toggleSidebar },
  ref
) => {
  return (
    <aside
      ref={ref}
      className={`sidebar ${sidebarOpen ? "sidebar-responsive" : ""}`}
    >
      <section className="logo">
        <h2>Github Issues</h2>
        {sidebarOpen && (
          <span
            onClick={toggleSidebar}
            className="close-icon material-symbols-outlined"
          >
            close
          </span>
        )}
      </section>
      <ul className="categories">
        <li className="category-item">
          <a href="#">First Issue</a>
        </li>
        <li className="category-item">
          <a href="#">Frontend</a>
        </li>
        <li className="category-item">
          <a href="#">Backend</a>
        </li>
        <li className="category-item">
          <a href="#">Blockchain</a>
        </li>
        <li className="category-item">
          <a href="#">Bug Reports</a>
        </li>
        <li className="category-item">
          <a href="#">Help Wanted</a>
        </li>
        <li className="category-item">
          <a href="#">Research Needed</a>
        </li>
        <li className="category-item">
          <a href="#">Refactoring</a>
        </li>
        <li className="category-item">
          <a href="#">Up-for-Grabs</a>
        </li>
        <li className="category-item">
          <a href="#">Documentation</a>
        </li>
      </ul>
    </aside>
  );
};

export default forwardRef(Sidebar);
