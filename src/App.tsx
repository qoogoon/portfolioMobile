import React, { useState } from "react";
import style from './App.module.scss';
import './App.css';
import Body from "./Component/Body/Body"
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Route path="/portfolioMobile" exact={true} render={() => <Body mode="mobileOnly" />} />
      <Route path="/portfolioMobile/web" exact={true} render={() => <Body mode="webFirst" />} />
      <Route path="/portfolioMobile/web/only" exact={true} render={() => <Body mode="webOnly" />} />
      <Route path="/portfolioMobile/mobile" exact={true} render={() => <Body mode="mobileFirst" />} />
      <Route path="/portfolioMobile/mobile/only" exact={true} render={() => <Body mode="mobileOnly" />} />
    </BrowserRouter>
  )
}

export default App;
