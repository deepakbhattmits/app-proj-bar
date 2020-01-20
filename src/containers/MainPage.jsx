/** @format */

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MainComponent from '../components/MainComponent';
import { getBeers, addTofavorites, removeFromfavorites } from '../actions';
import SearchPage from './SearchPage';
class MainPage extends Component {
	componentDidMount() {
		if (!this.props.beers) {
			this.props.getBeers(); // call action
		}
	}
	getDrivedStateFromProps() {
		this.getfav();
	}
	getfav = () => {
		return this.props.fbeers;
	};
	addToFavorite = e => {
		this.props.addTofavorites(e.target.id);
	};
	removeFromfavorites = e => {
		this.props.removeFromfavorites(e.target.id);
	};

	render() {
		return (
			<Fragment>
				<SearchPage />
				<div className='ui row'>
					<MainComponent
						beers={this.props.beers}
						fbeers={this.getfav()}
						addToFavorite={this.addToFavorite}
						removeFromfavorites={this.removeFromfavorites}
						className={this.props.favorites}
					/>
				</div>
			</Fragment>
		);
	}
}
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
