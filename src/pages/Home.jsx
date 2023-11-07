import Header from "../components/Header";
import Button from "../components/Button";
import Container from "../components/Container";
import Filter from "../components/Filter";
import countries from "../../db/data.json";
import { useState } from "react";
import { useLoadCountries } from "../hooks/useLoadCountries";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Home.css";

const Home = () => {
  const { visibleRows, handleLoadMore, handleLoadLess } = useLoadCountries(2);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`container ${isDarkMode ? "dark-mode" : "light-container"}`}
    >
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="input-box home-wrapper">
        <div className="search-input-box">
          {isDarkMode ? (
            <div className="search-input">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="xl"
                color="hsl(var(--neutral-white)"
                className="mag-icon"
              />
              <input
                type="text"
                placeholder="Search for a country..."
                className="s-dark-input"
              />
            </div>
          ) : (
            <div className="search-input">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="xl"
                color="hsl(var(--neutral-lm-dark-gray)"
                className="mag-icon"
              />
              <input
                type="text"
                placeholder="Search for a country..."
                className="s-light-input"
              />
            </div>
          )}
        </div>
        <div className="filter">
          <Filter
            title={"Filter by Region"}
            items={["Africa", "America", "Asia", "Europe", "Oceania"]}
          />
        </div>
        <div className="countries-container">
          <div className="home-wrapper">
            {countries.slice(0, visibleRows * 4).map((country) => (
              <div key={country.name} className="country-container">
                <Container
                  flag={country.flags.png}
                  alt={`${country.name} Flag`}
                  title={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="button-box">
        <Button onClick={handleLoadMore} text={"Load more"} />
        <Button onClick={handleLoadLess} text={"Load less"} />
      </div>
    </div>
  );
};

export default Home;
