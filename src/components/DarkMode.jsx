import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import "../styles/DarkMode.css";

const DarkMode = ({ text }) => {
  return (
    <div className="theme-box">
      <FontAwesomeIcon icon={faMoon} size="xl" />
      <p>{text}</p>
    </div>
  );
};

export default DarkMode;
