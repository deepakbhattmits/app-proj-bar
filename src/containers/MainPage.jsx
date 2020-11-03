/** @format */
// import React, { useEffect, useState } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainComponent from '../components/MainComponent';
import { getBeers, addTofavorites, removeFromfavorites } from '../actions';
import SearchPage from './SearchPage';
const MainPage = (props) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const beers = useSelector((state) => state.beerData.beers);
	const fbeers = useSelector((state) => state.beerData.addFbeers);
	const favorites = useSelector((state) => state.beerData.favorites);
	const getfav = () => {
		return fbeers;
	};
	useEffect(() => {
		// if (!beers) {
		dispatch(getBeers()); // action call.
		// }
		// }, [beers, dispatch]);
	}, [dispatch]);
	const addToFavorite = (e) => {
		dispatch(addTofavorites(e.target.id));
	};
	const removeFromfavorite = (e) => {
		dispatch(removeFromfavorites(e.target.id));
	};

	return (
		<>
			<SearchPage setIsLoading={setIsLoading} />
			<div className='ui row'>
				<MainComponent
					beers={beers}
					fbeers={getfav()}
					addToFavorite={addToFavorite}
					removeFromfavorite={removeFromfavorite}
					className={favorites}
					isLoading={isLoading}
				/>
			</div>
		</>
	);
};
export default MainPage;
