import "../styles/Button.css";

const Button = ({ onClick, text, icon, isDarkMode, margin, padding }) => {
  return (
    <div className="button-component">
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
