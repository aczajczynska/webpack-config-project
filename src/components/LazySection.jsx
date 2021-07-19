import { useState } from 'react';
import TestButton from './TestButton';

const LazySection = () => {
  const [loadLazy, setLoadlazy] = useState(false);
  const [buttonState, setButtonState] = useState('Initial state');

  const showLazyComponent = () => {
    import('../functions/calculate').then((math) => {
      console.log(math.calculate(16, 26));
    });
  };

  return (
    <div>
      <h3>Lazy section:</h3>
      <TestButton
        onClick={() => showLazyComponent()}
        buttonState={buttonState}
      />
    </div>
  );
};

export default LazySection;
