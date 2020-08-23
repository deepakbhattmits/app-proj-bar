/** @format */

import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
	// console.log(props  : ", test ");
	return (
		<div className='ui secondary  menu footer'>
			<div className='item'>
				<NavLink className='ui header text-capitalize' to='/'>
					Project Name : ( footer )
				</NavLink>
			</div>
			<div className='right menu'>
				<NavLink className='item text-uppercase' to='/home'>
					home
				</NavLink>
				<NavLink className='item text-uppercase' to='/favorite'>
					favorite
				</NavLink>
			</div>
		</div>
	);
};
export default Navigation;
