import "../styles/Button.css";

const Button = ({
  onClick,
  text,
  icon,
  isDarkMode,
  margin,
  padding,
  alignCenter = true,
}) => {
  return (
    <div className={`button-component ${alignCenter ? "center" : ""}`}>
      <button
        className={`main-button ${
          isDarkMode ? "s-dark-button" : "s-light-button"
        }`}
        style={{ margin, padding }}
        onClick={onClick}
      >
        {icon && <span className="icon">{icon}</span>}
        {text}
      </button>
    </div>
  );
};

export default Button;
