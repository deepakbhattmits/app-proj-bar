/** @format */

import React from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
	return (
		<div className='ui row'>
			<NavigationComponent />
			<ToastContainer autoClose={2000} />
		</div>
	);
};
export default Header;
