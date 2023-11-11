import Header from "../components/Header";
import data from "../../db/data.json";
import { useParams } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import "../styles/Details.css";

const Details = () => {
  const { countryName } = useParams();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const countryDetails = data.find(
    (country) => country.name.toLowerCase() === countryName.toLowerCase()
  );

  if (!countryDetails) {
    return <div>País não encontrado</div>;
  }

  return (
    <div
      className={`container ${isDarkMode ? "dark-mode" : "light-container"}`}
    >
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div className="flag-box">
        <img
          src={countryDetails.flags.png}
          alt={`${countryDetails.name} Flag`}
        />
      </div>
      <div className="details-box">
        <div className="country-name">{countryDetails.name}</div>
      </div>
      <div className="details-container">
        <div className="geo-information">
          <p>Native Name: {countryDetails.nativeName}</p>
          <p>
            Population:{" "}
            {countryDetails.population
              ? countryDetails.population.toLocaleString()
              : "N/A"}
          </p>
          <p>Region: {countryDetails.region}</p>
          <p>Sub Region: {countryDetails.subregion}</p>
          <p>Capital: {countryDetails.capital}</p>
        </div>
        <div className="demograph-information">
          <p>Top Level Domain: {countryDetails.topLevelDomain}</p>
          <p>Currencies: {countryDetails.currencies[0].name}</p>
          <p>Languages: {countryDetails.languages[0].name}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
