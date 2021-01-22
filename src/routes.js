import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Day1 } from './Pages/Day1';
import { Day2 } from './Pages/Day2';

export default function routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Day1} />
          <Route path="/day2" exact component={Day2} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
