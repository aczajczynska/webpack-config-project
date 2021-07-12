import { useState } from 'react';
const olaRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
}

const olaLetsRecipe = {
  ...olaRecipe,
  leather: 1,
  refinedMoonstone: 4,

}

console.log(olaRecipe)
console.log(olaLetsRecipe)

const Recipes = () => {
  const [recipe, setRecipe] = useState({})
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(olaRecipe)}>Ola Recipe</button>
      <button onClick={() => setRecipe(olaLetsRecipe)}>Ola Lets Recipe</button>

      <ul>
      {Object.keys(recipe).map((material) => (
        <li key={material}>
        {material}: {recipe[material]}
        </li>
      ))}
      </ul>
    </div>
    )
};

export default Recipes;