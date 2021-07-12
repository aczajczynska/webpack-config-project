import '../styles/index.scss'
import Recipes from './Recipes';
import Images from './Images';
import logo from '../images/logo-on-white-bg.png'
import statistic from '../images/statistics.svg';
import catGif from '../images/cat-giphy.gif';

const App = () => {
  return (
    <div className="app-container">
      <section className="hero"></section>
      <main>
      <section>
        <h1>This is Webpack Config!</h1>
      </section>
       <Images />
      <Recipes />
      </main>
    </div>
    )
};

export default App;