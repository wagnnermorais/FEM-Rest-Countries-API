import { useParams } from "react-router-dom";

const Details = ({ countries }) => {
  const { countryName } = useParams();

  const country = countries.find((c) => c.name === countryName);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <div className="flag-box">
        <img src={country.flags.png} alt={`${country.name} Flag`} />
      </div>
      <div className="details-box">
        <div className="country-name">{country.name}</div>
      </div>
      <div className="details-container">
        <div className="geo-information">
          <p>Native Name: {country.native}</p>
          <p>
            Population:{" "}
            {country.population ? country.population.toLocaleString() : "N/A"}
          </p>
          <p>Region: {country.region}</p>
          <p>Sub Region: {country.sub}</p>
          <p>Capital: {country.capital}</p>
        </div>
        <div className="demograph-information">
          <p>Top Level Domain: {country.level}</p>
          <p>Currencies: {country.currency}</p>
          <p>Languages: {country.lang}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
