const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="logo">
        <h2>Categories</h2>
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

export default Sidebar;
