import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = lazy(() => import('../routes/Home'));
const Images = lazy(() => import('../routes/Images'));
const Tasks = lazy(() => import('../routes/Tasks'));
const SplitImport = lazy(() => import('../routes/SpitImport.jsx'));

const App = () => (
  <Router>
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/images'>Images</Link>
            </li>
            <li>
              <Link to='/tasks'>Tasks</Link>
            </li>
            <li>
              <Link to='/split'>Split Import</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/images' component={Images} />
          <Route path='/tasks' component={Tasks} />
          <Route path='/split' component={SplitImport} />
        </Switch>
      </Suspense>
    </div>
  </Router>
);

export default App;
