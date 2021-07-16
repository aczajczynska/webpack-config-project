import { useState } from 'react';
import TestButton from './TestButton';
import LazyComponent from './LazyComponent';

const LazySection = () => {
  const [loadLazy, setLoadlazy] = useState(false);
  const [buttonState, setButtonState] = useState('Initial state');

  const showLazyComponent = () => {
    setLoadlazy(true);
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
