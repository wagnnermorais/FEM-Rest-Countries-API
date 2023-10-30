import Header from "../components/Header";
import Button from "../components/Button";
import Container from "../components/Container";
import "../styles/Home.css";
import countries from "../../db/data.json";
import { useLoadMore } from "../hooks/useLoadMore";

const Home = () => {
  const { visibleRows, handleLoadMore } = useLoadMore(2);
  return (
    <div className="">
      <Header />
      <div className="container">
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
        <Button onClick={""} text={"Load less"} />
      </div>
    </div>
  );
};

export default Home;
