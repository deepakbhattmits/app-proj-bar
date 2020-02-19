/** @format */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteComponent from '../components/FavoriteComponent';
import { removeFromfavorites } from '../actions';
const FavoritePage = () => {
	const favoriteBeer = useSelector(state => state.beerData.addFbeers);
	console.log(favoriteBeer);
	const dispatch = useDispatch();
	return (
		<div className='ui row'>
			<FavoriteComponent
				fBeers={favoriteBeer}
				umarkFav={dispatch(removeFromfavorites)}
			/>
		</div>
	);
};
// const mapDispatchToProps = dispatch => ({
// 	removeFromfavorites: data => dispatch(removeFromfavorites(data))
// });
// const mapStateToProps = state => {
// 	return {
// 		favoriteBeer: state.beerData.addFbeers
// 	};
// export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage);
export default FavoritePage;
