import { forwardRef, ForwardRefRenderFunction } from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setCategory: (category: string) => void;
  category: string;
}

const Sidebar: ForwardRefRenderFunction<HTMLDivElement, SidebarProps> = (
  { sidebarOpen, toggleSidebar, setCategory, category },
  ref
) => {
  return (
    <aside
      ref={ref}
      className={`sidebar ${sidebarOpen ? "sidebar-responsive" : ""}`}
    >
      <section className="logo">
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
        <li
          className={
            category === "quick fix" ? "category-item active" : "category-item"
          }
          onClick={() => setCategory("quick fix")}
        >
          <a className="category-link">Quick Fix</a>
        </li>
        <li
          className={
            category === "frontend" ? "category-item active" : "category-item"
          }
          onClick={() => setCategory("frontend")}
        >
          <a className="category-link">Frontend</a>
        </li>
        <li
          className={
            category === "backend" ? "category-item active" : "category-item"
          }
          onClick={() => setCategory("backend")}
        >
          <a className="category-link">Backend</a>
        </li>
        <li
          className={
            category === "blockchain" ? "category-item active" : "category-item"
          }
          onClick={() => setCategory("blockchain")}
        >
          <a className="category-link">Blockchain</a>
        </li>
        <li
          className={
            category === "web3" ? "category-item active" : "category-item"
          }
          onClick={() => setCategory("web3")}
        >
          <a className="category-link">Web3</a>
        </li>
        <li
          className={
            category === "bug" ? "category-item active" : "category-item"
          }
          onClick={() => setCategory("bug")}
        >
          <a className="category-link">Bug</a>
        </li>
        <li
          className={
            category === "research" ? "category-item active" : "category-item"
          }
          onClick={() => setCategory("research")}
        >
          <a className="category-link">Research</a>
        </li>
        <li
          className={
            category === "refactoring"
              ? "category-item active"
              : "category-item"
          }
          onClick={() => setCategory("refactoring")}
        >
          <a className="category-link">Refactoring</a>
        </li>
        <li
          className={
            category === "help" ? "category-item active" : "category-item"
          }
          onClick={() => setCategory("help")}
        >
          <a className="category-link">Help</a>
        </li>
        <li
          className={
            category === "documentation"
              ? "category-item active"
              : "category-item"
          }
          onClick={() => setCategory("documentation")}
        >
          <a className="category-link">Documentation</a>
        </li>
      </ul>
    </aside>
  );
};

export default forwardRef(Sidebar);
