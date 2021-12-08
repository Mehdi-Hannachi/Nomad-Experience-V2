import LandingPage from "components/LandingPage/LandingPage";
import LoginPage from "components/LoginPage/LoginPage";
import ProfilePage from "components/ProfilePage/ProfilePage";
import SignUp from "components/RegisterPage/SignUp";
import Index from "comps/Index";
import React from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />

        <Route
          exact
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          exact
          path="/register-page"
          render={(props) => <SignUp {...props} />}
        />
        <Route
          exact
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          exact
          path="/other-components"
          render={(props) => <Index {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
