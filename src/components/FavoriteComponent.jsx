/** @format */

import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Favorite = props => {
	// console.log('props');
	const [hover, setHover] = useState(false);
	const toggleHover = () => {
		setHover(!hover);
	};
	const handleRemove = e => {
		console.log('remove :', e.target.id);
		props.umarkFav(e.target.id);
	};
	const renderFav = () => {
		if (props.fBeers && Object.values(props.fBeers).length === 0) {
			return (
				<div className='loading'>
					<h1 className='ui header'>No any favorite items</h1>
					<Link
						to='/home'
						onMouseEnter={toggleHover}
						onMouseLeave={toggleHover}>
						<i className={`icon hand point left ${hover ? '' : 'outline'}`} />{' '}
						Go Back
					</Link>
				</div>
			);
		}
		return (
			props.fBeers &&
			Object.values(props.fBeers).map((el, i, self) => {
				return (
					<div className='card a' key={i}>
						<div className='ui medium image'>
							<img
								className='ui medium image'
								src={el.image_url}
								alt='img'
								style={{ width: 200, height: 200 }}
							/>
						</div>
						<div className='content'>
							<i
								id={el.id}
								className='right floated star icon green'
								title='Unmark Favorite'
								onClick={handleRemove}
							/>
							<div className='header'>{el.name}</div>
							<div className='meta'>
								<label>{el.tagline}</label>
							</div>
							<div className='description'>{el.description}</div>
						</div>
					</div>
				);
			})
		);
	};
	return (
		<Fragment>
			<div className='item'>
				<h3 className='text-capitalize'> favorite page </h3>
			</div>
			<div className='ui link cards favorite'>{renderFav()}</div>
		</Fragment>
	);
};
export default Favorite;
