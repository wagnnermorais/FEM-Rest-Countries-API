import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "../styles/DarkMode.css";

const DarkMode = ({ text, onClick, isDarkMode }) => {
  return (
    <div className="theme-box" onClick={onClick}>
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="xl" />
      <p>{isDarkMode ? "Light Mode" : text}</p>
    </div>
  );
};

export default DarkMode;
