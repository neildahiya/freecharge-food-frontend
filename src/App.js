import React from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Payment from "./components/Payment";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/payment" exact component={Payment}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
