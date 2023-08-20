
import './App.css';
import { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import Description from './Description';
import PartsSelection from './PartsSelection';

function App() {
  return (
    <Fragment>
      <main>
        <Switch>
          <Route path="/" exact>
            <Description/>
          </Route>
          <Route path="/home" >
            <PartsSelection/>
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
