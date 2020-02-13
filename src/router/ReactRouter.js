/** @format */

import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../helpers/history';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import MainPage from '../containers/MainPage';
import FavoritePage from '../containers/FavoritePage';
import NotFound from '../components/NotFound';
import ScrollToTop from '../components/ScrollToTop';

class ReactRouter extends Component {
	render() {
		console.log('test');
		return (
			<Router history={createBrowserHistory}>
				<ScrollToTop>
					<header>
						<Header />
					</header>

					<article>
						<Switch>
							<Route exact path='/' component={MainPage} />
							<Route exact path='/home' component={MainPage} />
							<Route exact path='/favorite' component={FavoritePage} />
							<Route exact path='*' component={NotFound} />
						</Switch>
					</article>

					<footer>
						<Footer />
					</footer>
				</ScrollToTop>
			</Router>
		);
	}
}
export default ReactRouter;
