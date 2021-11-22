import "./App.css";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./route-config";
import configureValidation from "./Validations";

configureValidation();

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <div className="container">
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </div>
      <footer className="bd-footer py-5 mt-5 bg-light border-top footer text-muted">
        <div className="container-fluid text-center">
          &copy;{new Date().getFullYear().toString()} - MovieBox
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
