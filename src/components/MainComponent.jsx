/** @format */

import React from 'react';

const MainComponent = (props) => {
	// console.log("test :  ",props);
	return (
		<>
			<div className='ui link cards'>
				{props.beers &&
					props.beers.map((el, i) => {
						return (
							<div className='card' key={i}>
								<div className='ui medium image'>
									<img
										className='medium ui image'
										src={el.image_url}
										alt='img'
										style={{ width: 200, height: 200 }}
									/>
								</div>
								<div className='content'>
									<i
										id={el.id}
										className={`right floated star icon
                  ${
										props.className &&
										Object.values(props.className).filter((item) =>
											item.id === el.id ? item.id : ''
										).length > 0
											? 'green'
											: ''
									}`}
										onClick={
											props.className &&
											Object.values(props.className).filter((item) =>
												item.id === el.id ? item.id : ''
											).length > 0
												? props.removeFromfavorite
												: props.addToFavorite
										}
										title={`${
											props.className &&
											Object.values(props.className).filter((item) =>
												item.id === el.id ? item.id : ''
											).length > 0
												? 'Unmark Favorite'
												: 'Mark Favorite'
										}`}
									/>
									<div className='header'>{el.name}</div>
									<div className='meta'>
										<label>{el.tagline}</label>
									</div>
									<div className='description'>{el.description}</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};
export default MainComponent;
