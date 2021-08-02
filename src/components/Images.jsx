import "../styles/index.scss";
import logo from "../images/logo-on-white-bg.png";
import statistic from "../images/statistics.svg";
import catGif from "../images/cat-giphy.gif";

const Images = () => {
  return (
    <div>
      <h2>Images Section:</h2>
      <section className="images-section">
        <img src={statistic} alt="statistic" width="250" />
        <img src={logo} alt="logo" width="250" />
        <img src={catGif} alt="cat" width="250" />
      </section>
    </div>
  );
};

export default Images;
