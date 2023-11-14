import Header from "../components/Header";
import Button from "../components/Button";
import Container from "../components/Container";
import Filter from "../components/Filter";
import countries from "../../db/data.json";
import { useState } from "react";
import { useLoadCountries } from "../hooks/useLoadCountries";
import useDarkMode from "../hooks/useDarkMode";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Home.css";
import PageUp from "../components/PageUp";

const Home = () => {
  const { visibleRows, handleLoadMore, handleLoadLess } = useLoadCountries(2);
  const initialDarkMode = localStorage.getItem("isDarkMode") === "true";
  const { isDarkMode, toggleDarkMode } = useDarkMode(initialDarkMode);
  const [searchValue, setSearchValue] = useState("");
  const [selectedContinent, setSelectedContinent] = useState(null);

  const filteredCountries = countries
    .map((country) => {
      if (country.region === "Americas") {
        country.region = "America";
      }
      return country;
    })
    .filter((country) => {
      if (!selectedContinent) {
        return true;
      }
      return country.region === selectedContinent;
    })
    .filter((country) => {
      if (!searchValue) {
        return true;
      }
      return country.name.toLowerCase().includes(searchValue.toLowerCase());
    });

  return (
    <div
      className={`container ${isDarkMode ? "dark-mode" : "light-container"}`}
    >
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="input-box home-wrapper">
        <div className="filters-box">
          <div className="search-input-box">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="xl"
              color={
                isDarkMode
                  ? "hsl(var(--neutral-white)"
                  : "hsl(var(--neutral-lm-dark-gray)"
              }
              className="mag-icon"
            />
            <input
              type="text"
              placeholder="Search for a country..."
              className={isDarkMode ? "s-dark-input" : "s-light-input"}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div className="filter">
            <Filter
              title={"Filter by Region"}
              items={["All", "Africa", "America", "Asia", "Europe", "Oceania"]}
              selectedContinent={selectedContinent}
              setSelectedContinent={setSelectedContinent}
            />
          </div>
        </div>
        <div className="countries-container">
          <div className="home-wrapper">
            <div className="container-grid">
              {filteredCountries.slice(0, visibleRows * 4).map((country) => (
                <div key={country.name} className="country-container">
                  <Container
                    flag={country.flags.svg}
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
      </div>
      <div className="button-box">
        <Button
          onClick={handleLoadMore}
          text={"Load more"}
          isDarkMode={isDarkMode}
          margin="1rem 0"
          padding=".5rem 2rem"
        />
        {visibleRows > 2 && (
          <Button
            onClick={handleLoadLess}
            text={"Load less"}
            margin="1rem 0"
            padding=".5rem 2rem"
            isDarkMode={isDarkMode}
          />
        )}
      </div>
      <PageUp />
    </div>
  );
};

export default Home;
