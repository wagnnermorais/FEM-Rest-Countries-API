import Header from "../components/Header";
import Button from "../components/Button";
import Container from "../components/Container";
import "../styles/Home.css";
import countries from "../../db/data.json";
import { useLoadCountries } from "../hooks/useLoadCountries";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const { visibleRows, handleLoadMore, handleLoadLess } = useLoadCountries(2);
  return (
    <div className="container">
      <Header />
      <div className="input-box home-wrapper">
        <div className="search-input">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="xl"
            className="mag-icon"
          />
          <input
            type="text"
            placeholder="Search for a country..."
            className="s-input"
          />
        </div>
        <div className="filter">
          <p>Filter by Region</p>
          <div className="list">
            <ul className="filter">
              <li className="filter-list-item">Africa</li>
              <li className="filter-list-item">America</li>
              <li className="filter-list-item">Asia</li>
              <li className="filter-list-item">Europe</li>
              <li className="filter-list-item">Oceania</li>
            </ul>
          </div>
        </div>
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
      <div className="button-box">
        <Button onClick={handleLoadMore} text={"Load more"} />
        <Button onClick={handleLoadLess} text={"Load less"} />
      </div>
    </div>
  );
};

export default Home;
