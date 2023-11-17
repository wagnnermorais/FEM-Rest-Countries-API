import Header from "../components/Header";
import data from "../../db/data.json";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import Button from "../components/Button";
import "../styles/Details.css";
import PageTransition from "../components/PageTransition";
import BorderButton from "../components/BorderButton";

const Details = () => {
  const navigate = useNavigate();
  const { countryName } = useParams();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const countryDetails = data.find(
    (country) => country.name.toLowerCase() === countryName.toLowerCase()
  );

  const borderCountries = countryDetails.borders
    ? data.filter((country) =>
        countryDetails.borders.includes(country.alpha3Code)
      )
    : [];

  const handlePreviousPage = () => {
    navigate(-1);
  };

  if (!countryDetails) {
    return <div>Country not found</div>;
  }

  return (
    <PageTransition>
      <div
        className={`details-box ${
          isDarkMode ? "dark-mode" : "light-container"
        }`}
      >
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className="home-wrapper details-button-box">
          <Button
            text={"Back"}
            icon={
              <ion-button aria-label="Back">
                <ion-icon name="arrow-back-outline" aria-hidden="true" />
              </ion-button>
            }
            isDarkMode={isDarkMode}
            onClick={handlePreviousPage}
            margin="3rem 0 0.5rem"
            padding="0.5rem 2.5rem 0.5rem 2rem"
            alignCenter={false}
          />
        </div>
        <div className="home-wrapper details">
          <div className="details-flag-box">
            <img
              src={countryDetails.flags.svg}
              alt={`${countryDetails.name} Flag`}
              className="image-details"
            />
          </div>
          <div className="details-container">
            <div className="country-information">
              <div className="geo-information">
                <div className="country-name">
                  <h3>{countryDetails.name}</h3>
                </div>
                <p>
                  Native Name:{" "}
                  <span className="data">{countryDetails.nativeName}</span>
                </p>
                <p>
                  Population:{" "}
                  <span className="data">
                    {countryDetails.population
                      ? countryDetails.population.toLocaleString()
                      : "N/A"}
                  </span>
                </p>
                <p>
                  Region: <span className="data">{countryDetails.region}</span>
                </p>
                <p>
                  Sub Region:{" "}
                  <span className="data">{countryDetails.subregion}</span>
                </p>
                <p>
                  Capital:{" "}
                  <span className="data">{countryDetails.capital}</span>
                </p>
              </div>
              <div className="demograph-information">
                <p>
                  Top Level Domain:{" "}
                  <span className="data">{countryDetails.topLevelDomain}</span>
                </p>
                <p>
                  Currencies:{" "}
                  <span className="data">
                    {countryDetails.currencies[0].name}
                  </span>
                </p>
                <p>
                  Languages:{" "}
                  <span className="data">
                    {countryDetails.languages[0].name}
                  </span>
                </p>
              </div>
            </div>
            <div className="border-countries-container">
              <div className="border-countries-title">
                <p className="border-country-title">Border Countries:</p>
              </div>
              <div className="borders">
                {countryDetails.borders ? (
                  borderCountries.map((borderCountry) => (
                    <div
                      key={borderCountry.alpha3Code}
                      className="border-country-box"
                    >
                      <Link
                        to={`/details/${borderCountry.name}`}
                        className="no-style-link"
                      >
                        <BorderButton
                          text={borderCountry.nativeName}
                          isDarkMode={isDarkMode}
                        />
                      </Link>
                    </div>
                  ))
                ) : (
                  <BorderButton text={"No borders"} isDarkMode={isDarkMode} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Details;
