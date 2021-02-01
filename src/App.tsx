import React, { useState } from "react";
import style from './App.module.scss';
import './App.css';
import Body from "./Component/Body/Body"
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Route path="/portfolio" exact={true} render={() => <Body mode="webFirst" />} />
      <Route path="/portfolio/web" exact={true} render={() => <Body mode="webFirst" />} />
      <Route path="/portfolio/web/only" exact={true} render={() => <Body mode="webOnly" />} />
      <Route path="/portfolio/mobile" exact={true} render={() => <Body mode="mobileFirst" />} />
      <Route path="/portfolio/mobile/only" exact={true} render={() => <Body mode="mobileOnly" />} />
    </BrowserRouter>
  )
}

export default App;
