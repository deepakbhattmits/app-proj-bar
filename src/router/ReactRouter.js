/** @format */

import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../helpers/history';

import LoadingSpinner from '../reusable/LoadingSpinner';
//  import ErrorBoundary from '../reusable/ErrorBoundary';
const Header = lazy(() => import('../containers/Header'));
const Footer = lazy(() => import('../containers/Footer'));
const MainPage = lazy(() => import('../containers/MainPage'));
const FavoritePage = lazy(() => import('../containers/FavoritePage'));
const NotFound = lazy(() => import('../components/NotFound'));
const ScrollToTop = lazy(() => import('../components/ScrollToTop'));

const ReactRouter = () => {
	// console.log('test : ');
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Router history={createBrowserHistory}>
				<ScrollToTop>
					<header>
						<Header />
					</header>

					<article>
						<Switch>
							{/* <Route exact path='/' component={MainPage} />
							<Route exact path='/home' component={MainPage} />
							<Route exact path='/favorite' component={FavoritePage} />
							<Route exact path='*' component={NotFound} /> */}

							<Route exact path='/'>
								<MainPage />
							</Route>
							<Route exact path='/home'>
								<MainPage />
							</Route>
							<Route exact path='/favorite'>
								<FavoritePage />
							</Route>
							<Route exact path='*'>
								<NotFound />
							</Route>
						</Switch>
					</article>

					<footer>
						<Footer />
					</footer>
				</ScrollToTop>
			</Router>
		</Suspense>
	);
};
export default ReactRouter;
