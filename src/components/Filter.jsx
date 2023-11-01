import "../styles/Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Filter = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleList} className="title">
        <p className="filter-title">{title}</p>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </div>
      <div className={`filter-box ${isOpen ? "open" : ""}`}>
        <ul className="filter-list">
          {items.map((item, index) => (
            <li key={index} className="filter-list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
