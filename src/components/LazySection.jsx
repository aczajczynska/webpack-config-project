import { useState } from 'react';
import TestButton from './TestButton';
// import LazyComponent from './LazyComponent';
const getLazyComponent = () => import('./LazyComponent');

const LazySection = () => {
  const [loadLazy, setLoadlazy] = useState(false);
  const [buttonState, setButtonState] = useState('Initial state');

  const showLazyComponent = () => {
    setLoadlazy(true);
    getLazyComponent().then((comp) => {
      console.log(comp);
    });
  };

  return (
    <div>
      <h3>Lazy section</h3>
      <TestButton
        onClick={() => showLazyComponent()}
        buttonState={buttonState}
      />
      {loadLazy && <LazyComponent />}
    </div>
  );
};

export default LazySection;
