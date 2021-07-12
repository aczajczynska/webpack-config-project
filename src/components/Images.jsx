import '../styles/index.scss'
import logo from '../images/logo-on-white-bg.png'
import statistic from '../images/statistics.svg';
import catGif from '../images/cat-giphy.gif';

const Images = () => {
  return (
       <section className='images-section'>
        <h2>Images Section:</h2>
        <img src={statistic} alt="statistic" width="250"/>
        <img src={logo} alt="logo" width="250"/>
        <img src={catGif} alt="cat" width="250"/>
      </section>
    )
};

export default Images;