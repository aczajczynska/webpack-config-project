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

const Tasks = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(workTaskList)}>Work Task List</button>
      <button onClick={() => setRecipe(homeTaskList)}>Home Task List</button>

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

export default Tasks;
