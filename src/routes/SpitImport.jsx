import { useState, lazy } from 'react';
import TestButton from '../components/TestButton';
import '../styles/index.scss';

const LazyComponent = lazy(() => import('../components/LazyComponent'));

const SplitImport = () => {
  const [buttonState, setButtonState] = useState('Initial state');
  const [lazyComponent, setLazyComponent] = useState(false);

  const showLazyComponent = () => {
    setButtonState('Button was clicked');
    setLazyComponent(true);
  };

  return (
    <div className='app-container'>
      <h2>Spliting code using imports</h2>
      <TestButton
        buttonState={buttonState}
        onClick={() => showLazyComponent()}
      />
      {lazyComponent && <LazyComponent />}
    </div>
  );
};

export default SplitImport;
