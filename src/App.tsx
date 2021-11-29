import "./App.css";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./route-config";
import configureValidation from "./Validations";
import { claim } from "./auth/auth.models";
import { useState } from "react";
import AuthenticationContext from "./auth/AuthenticationContext";

configureValidation();

function App() {
  const [claims, setClaims] = useState<claim[]>([
    { name: "email", value: "lekea4@gmail.com" },
  ]);

  function isAdmin() {
    return (
      claims.findIndex(
        (claim) => claim.name === "role" && claim.value === "admin"
      ) > -1
    );
  }
  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
        <Menu />

        <div className="container">
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                {route.isAdmin && !isAdmin() ? (
                  <>You are not allowed to view this page</>
                ) : (
                  <route.component />
                )}
              </Route>
            ))}
          </Switch>
        </div>
        <footer className="bd-footer py-5 mt-5 bg-light border-top footer text-muted">
          <div className="container-fluid text-center">
            &copy;{new Date().getFullYear().toString()} - MovieBox
          </div>
        </footer>
      </AuthenticationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
