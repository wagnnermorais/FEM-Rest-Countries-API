import "../styles/Header.css";
import DarkMode from "./DarkMode";
const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="main-header">
      <div className="header-wrapper">
        <h2>Where in the world?</h2>
        <DarkMode
          text={"Dark Mode"}
          onClick={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
      </div>
    </header>
  );
};

export default Header;
