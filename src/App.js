import React from 'react';
import {
  BrowserRouter,
  hashHistory,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SignupForm from "./components/SignupForm";
import MotiveCard from "./components/MotiveCard";
import Register from "./components/Register";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter history={hashHistory}>
          <Switch>
            <Route path="/demo/signup" component={SignupForm} />
            <Route path="/demo/motivecard" component={MotiveCard} />
            <Route path="/demo/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
