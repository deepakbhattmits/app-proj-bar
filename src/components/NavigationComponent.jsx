/** @format */

// import React from 'react';
import React, { useRef, useEffect, useCallback } from 'react';
import { ReactComponent as CalenderSVG } from '../assets/images/icon-calendar.svg';

import { NavLink } from 'react-router-dom';
import daterangepicker from 'daterangepicker';

const Navigation = props => {
	const datePicker = useRef();
	const dateRange = useCallback(datePicker => {
		console.log('call ');
		new daterangepicker(datePicker, {
			singleDatePicker: true,
			showDropdowns: true,
			locale: {
				format: 'MMMM DD YYYY'
			},
			minYear: 1901,
			maxYear: 2020
		});
	}, []);
	useEffect(() => {
		dateRange(datePicker.current);
	}, []);
	return (
		<div className='ui secondary  menu'>
			<div className='item'>
				<NavLink className='ui header text-capitalize' to='/'>
					Project Name
				</NavLink>
			</div>
			<div
				id='reportrange'
				style={{
					display: 'flex',
					background: '#fff',
					cursor: 'pointer',
					border: '1px solid #ccc',
					width: `calc(100% / 4)`,
					height: '25px',
					alignItems: 'center'
				}}>
				<CalenderSVG
					className='icon icon-cal'
					style={{
						zIndex: '1',
						pointerEvents: 'none',
						cursor: 'pointer',
						position: 'absolute'
					}}
				/>
				<input
					ref={datePicker}
					type='text'
					name='daterange'
					placeholder='January 22 2020'
					style={{
						outline: 'none',
						border: 'none',
						width: '100%',
						paddingLeft: '1.8rem',
						cursor: 'pointer'
					}}
				/>
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
