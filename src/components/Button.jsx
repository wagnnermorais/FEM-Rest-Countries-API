import "../styles/Button.css";

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button className="main-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
