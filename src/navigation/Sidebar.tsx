import { forwardRef, ForwardRefRenderFunction } from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  setCategory: (category: string) => void;
}

const Sidebar: ForwardRefRenderFunction<HTMLDivElement, SidebarProps> = (
  { sidebarOpen, toggleSidebar, setCategory },
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
        <li className="category-item">
          <a href="#" onClick={() => setCategory("quick fix")}>
            Quick Fix
          </a>
        </li>
        <li className="category-item">
          <a href="#" onClick={() => setCategory("frontend")}>
            Frontend
          </a>
        </li>
        <li className="category-item">
          <a href="#" onClick={() => setCategory("backend")}>
            Backend
          </a>
        </li>
        <li className="category-item">
          <a href="#" onClick={() => setCategory("blockchain")}>
            Blockchain
          </a>
        </li>
        <li className="category-item">
          <a href="#" onClick={() => setCategory("web3")}>
            Web3
          </a>
        </li>
        <li className="category-item">
          <a href="#" onClick={() => setCategory("bug")}>
            Bug
          </a>
        </li>
        <li className="category-item">
          <a href="#" onClick={() => setCategory("research")}>
            Research
          </a>
        </li>
        <li className="category-item">
          <a href="#" onClick={() => setCategory("refactoring")}>
            Refactoring
          </a>
        </li>
        <li className="category-item">
          <a href="#" onClick={() => setCategory("help")}>
            Help
          </a>
        </li>
        <li className="category-item">
          <a href="#" onClick={() => setCategory("documentation")}>
            Documentation
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default forwardRef(Sidebar);
