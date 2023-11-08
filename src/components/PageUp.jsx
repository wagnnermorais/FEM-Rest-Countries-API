import { useState, useEffect } from "react";
import "../styles/PageUp.css";

const PageUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    window.scrollY > 850 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`page-up ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <ion-icon name="arrow-up-outline" />
    </div>
  );
};

export default PageUp;
