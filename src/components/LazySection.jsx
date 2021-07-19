import { useState, lazy, Suspense } from 'react';
import TestButton from './TestButton';
// import LazyComponent from './LazyComponent';
const getLazyComponent = lazy(() => import('./LazyComponent'));

const LazySection = () => {
  const [loadLazy, setLoadlazy] = useState(false);
  const [buttonState, setButtonState] = useState('Initial state');

  const showLazyComponent = () => {
    getLazyComponent().then((comp) => {
      console.log(comp);
      setLoadlazy(true);
    });
  };

  return (
    <Suspense fallback={<div>Loading component, please wait</div>}>
      <div>
        <h3>Lazy section</h3>
        <TestButton
          onClick={() => showLazyComponent()}
          buttonState={buttonState}
        />
        {loadLazy && <LazyComponent />}
      </div>
    </Suspense>
  );
};

export default LazySection;
