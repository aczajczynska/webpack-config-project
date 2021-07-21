import { useState } from 'react';
const workTaskList = {
  taskNumber3: 2,
  commits: 14,
  newBranch: 3,
};

const homeTaskList = {
  ...workTaskList,
  workout: 1,
  dinner: 1,
};

const getLodash = () =>
  import(
    /* webpackChunkName: "get-lodash" */
    'lodash-es'
  );

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  const setValue = () => {
    setRecipe(homeTaskList);
    getLodash();
  };
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(workTaskList)}>Work Task List</button>
      <button onClick={() => setValue()}>Home Task List</button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
