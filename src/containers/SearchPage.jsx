/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeerByName, getBeers } from '../actions';
import SearchComponent from '../components/SearchComoponent';
class SearchPage extends Component {
	state = {
		beerName: '',
	};
	getData = () => {
		if (this.state.beerName.length > 0) {
			this.props.getBeerByName(this.state.beerName);
		} else {
			this.props.getBeers();
		}
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			const timer = setTimeout(() => {
				this.getData();
				// console.log('Test  : ');
				this.props.setIsLoading(true);
			}, 1000);
			return () => {
				this.props.setIsLoading(false);
				clearTimeout(timer);
			};
		});
	};
	onKeyUp = (e) => {
		if (e.keyCode === 13) {
			this.buttonClick();
		}
	};
	buttonClick = () => {
		if (this.state.beerName.length > 0) {
			this.props.getBeerByName(this.state.beerName);
		} else {
			alert('Please Enter Search Term');
			this.props.getBeers();
		}
	};
	// componentWillUnmount() {
	//   clearTimeout(timer)
	// }
	render() {
		return (
			<div className='ui row'>
				<SearchComponent
					classNameButton='ui primary button'
					classNameSearch='custom-search'
					buttonClick={this.buttonClick}
					handleChange={this.handleChange}
					onKeyUp={this.onKeyUp}
				/>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	getBeerByName: (data) => dispatch(getBeerByName(data)),
	getBeers: () => dispatch(getBeers()),
});
// const mapStateToProps = ( state ) => {
//     return {
//         searchBeer: state.searchBeer,

//     }
// }
export default connect(null, mapDispatchToProps)(SearchPage);
