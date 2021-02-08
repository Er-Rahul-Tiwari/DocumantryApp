import {React} from "react";
import logo from '../assets/svg/logo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='nav'>
        <img src={logo} className='nav__logo' alt='logo' />
        <div className='nav__box'>
            <a href='#!' className='nav__link nav__link__active'>Home</a>
            <a href='#!' className='nav__link'>Products</a>
            <a href='#!' className='nav__link'>Service</a>
            <a href='#!' className='nav__link'>ContactUs</a>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
