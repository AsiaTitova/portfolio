import React from 'react';
import {Switch} from 'react-router-dom';

import Index from "./pages/Index";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Index/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
