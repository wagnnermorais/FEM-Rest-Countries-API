import "../styles/Container.css";

const Container = ({ flag, alt, title, population, region, capital }) => {
  return (
    <div className="country-box">
      <div className="flag-box">
        <img src={flag} alt={alt} width={250} height={200} />
      </div>
      <div className="country-data">
        <h3 className="country-data-title">{title}</h3>
        <p className="country-data-p">
          Population: <span className="data">{population}</span>
        </p>
        <p className="country-data-p">
          Region: <span className="data">{region}</span>
        </p>
        <p className="country-data-p">
          Capital: <span className="data">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Container;
