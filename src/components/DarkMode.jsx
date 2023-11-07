import "../styles/DarkMode.css";

const DarkMode = ({ text, onClick, isDarkMode }) => {
  return (
    <div className="theme-box" onClick={onClick}>
      {isDarkMode ? (
        <ion-icon name="sunny-outline" className="theme-icon" />
      ) : (
        <ion-icon name="moon-outline" className="theme-icon" />
      )}
      <p>{isDarkMode ? "Light Mode" : text}</p>
    </div>
  );
};

export default DarkMode;
