import React, {Fragment} from 'react';
import Router from "./Components/Routes/Router";
import {Footer} from "./Components/Layout/Footer";

const App = () => {
  return (
      <Fragment>
          <Router></Router>
          <Footer></Footer>
      </Fragment>
  );
}

export default App;
