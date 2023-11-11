import "../styles/Container.css";
import { Link } from "react-router-dom";

const Container = ({ flag, alt, title, population, region, capital }) => {
  const formattedPopulation = population.toLocaleString();
  return (
    <Link to={`details/${title}`} className="no-style-link">
      <div className="country-box">
        <div className="flag-box">
          <img src={flag} alt={alt} width={250} height={200} />
        </div>
        <div className="country-data">
          <h3 className="country-data-title">{title}</h3>
          <p className="country-data-p">
            Population: <span className="data">{formattedPopulation}</span>
          </p>
          <p className="country-data-p">
            Region: <span className="data">{region}</span>
          </p>
          <p className="country-data-p">
            Capital: <span className="data">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Container;
