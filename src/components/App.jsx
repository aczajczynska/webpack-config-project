import '../styles/index.scss'
import Recipes from './Recipes';
import Images from './Images';

const App = () => {
  return (
    <div className="app-container">
      <section className="hero"></section>
      <main>
      <section>
        <h1>This is Webpack Config!</h1>
      </section>
      <Recipes />
      <Images />
      </main>
    </div>
    )
};

export default App;