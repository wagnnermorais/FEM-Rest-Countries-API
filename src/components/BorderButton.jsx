import "../styles/BorderButton.css";

const BorderButton = ({ onClick, text, isDarkMode }) => {
  return (
    <div className="border-button-container">
      <button
        className={`border-button ${
          isDarkMode ? "s-dark-button" : "s-light-button"
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default BorderButton;
