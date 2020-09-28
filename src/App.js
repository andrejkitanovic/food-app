import React from "react";
import "./App.scss";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PageLayout from "./hoc/PageLayout/PageLayout";
import LandingPage from "./containers/views/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageLayout>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Redirect to="/" />
          </Switch>
        </PageLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
