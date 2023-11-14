import "../styles/Button.css";

const Button = ({
  onClick,
  text,
  icon,
  isDarkMode,
  margin,
  padding,
  width,
}) => {
  return (
    <div>
      <button
        className={`main-button ${
          isDarkMode ? "s-dark-button" : "s-light-button"
        }`}
        style={{ margin, padding, width }}
        onClick={onClick}
      >
        {icon && <span className="icon">{icon}</span>}
        {text}
      </button>
    </div>
  );
};

export default Button;
