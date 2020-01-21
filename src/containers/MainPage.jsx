/** @format */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainComponent from '../components/MainComponent';
import { getBeers, addTofavorites, removeFromfavorites } from '../actions';
import SearchPage from './SearchPage';
const MainPage = props => {
	const getfav = () => {
		return props.fbeers;
	};
	useEffect(() => {
		if (!props.beers) {
			props.getBeers(); // call action
		}
		getfav();
	}, [props]);
	// const getDrivedStateFromProps = () => {
	// 	getfav();
	// };
	const addToFavorite = e => {
		props.addTofavorites(e.target.id);
	};
	const removeFromfavorites = e => {
		props.removeFromfavorites(e.target.id);
	};
	return (
		<>
			<SearchPage />
			<div className='ui row'>
				<MainComponent
					beers={props.beers}
					fbeers={getfav()}
					addToFavorite={addToFavorite}
					removeFromfavorites={removeFromfavorites}
					className={props.favorites}
				/>
			</div>
		</>
	);
};
const mapDispatchToProps = dispatch => ({
	getBeers: () => dispatch(getBeers()),
	addTofavorites: data => dispatch(addTofavorites(data)),
	removeFromfavorites: data => dispatch(removeFromfavorites(data))
});
const mapStateToProps = state => {
	return {
		beers: state.beerData.beers,
		fbeers: state.beerData.addFbeers,
		favorites: state.beerData.favorites
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
