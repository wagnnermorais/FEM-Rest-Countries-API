import "../styles/Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Filter = ({ title, items, setSelectedContinent, selectedContinent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectContinent = (continent) => {
    setSelectedContinent(continent === "All" ? null : continent);
  };

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
            <li
              key={index}
              className={`filter-list-item ${
                selectedContinent === item ? "selected" : ""
              }`}
              onClick={() => handleSelectContinent(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
