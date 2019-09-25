import React, { Component } from 'react';
import NavigationComponent from '../components/NavigationComponent';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Header extends Component {
    render() {
        
        return (
           
                <div className='ui row'>
                    <NavigationComponent />
                    <ToastContainer autoClose={2000} />
                </div>
              
           
        )
    }
};
export default Header;
