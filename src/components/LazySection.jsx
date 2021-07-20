import TestButton from './TestButton';
const functionToCals = () =>
  import(
    /* webpackChunkName: "calculation-functions" */
    '../functions/calculate'
  );

const LazySection = () => {
  const showLazyComponent = () => {
    import('../functions/calculate').then((math) => {
      console.log(math.calculate(16, 26));
    });
  };
  const showLazy = () => {
    functionToCals().then((math) => {
      console.log(math.calcMultiple(2, 3));
    });
  };

  return (
    <div>
      <h3>Lazy section:</h3>
      <TestButton
        onClick={() => showLazyComponent()}
        buttonText={'Calculate: adding'}
      />
      <TestButton
        onClick={() => showLazy()}
        buttonText={'Calculate: multiplication'}
      />
    </div>
  );
};

export default LazySection;
