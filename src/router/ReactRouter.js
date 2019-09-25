import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "../helpers/history";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import MainPage from "../containers/MainPage";
import FavoritePage from "../containers/FavoritePage";
import NotFound from "../components/NotFound";

class ReactRouter extends Component {
  render() {
    return (
      <Router history={createBrowserHistory}>
        <header>
          <Header />
        </header>
        <article>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/home" component={MainPage} />
            <Route exact path="/favorite" component={FavoritePage} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </article>
        <footer>
          <Footer />
        </footer>
      </Router>
    );
  }
}
export default ReactRouter;
