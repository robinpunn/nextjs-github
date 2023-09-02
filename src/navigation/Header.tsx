import React from "react";

interface ToggleProps {
  toggleSidebar: () => void;
}

const Header: React.FC<ToggleProps> = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div
        className="menu"
        onClick={toggleSidebar}
        dangerouslySetInnerHTML={{
          __html: '<span class="material-symbols-outlined">menu</span>',
        }}
      />
      <h2>Github Issues</h2>
    </header>
  );
};

export default Header;
