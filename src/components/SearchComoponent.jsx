/** @format */

import React from 'react';
const SearchComoponent = props => {
	console.log(props);
	return (
		<div className='ui category search'>
			<div className='ui icon input'>
				<input
					className={props.classNameSearch}
					name='beerName'
					type='text'
					placeholder='Search for Beer...'
					autoComplete='off'
					onChange={props.handleChange}
					onKeyUp={props.onKeyUp}
				/>
				<span className={props.classNameButton} onClick={props.buttonClick}>
					Search
				</span>
			</div>
		</div>
	);
};
export default SearchComoponent;
