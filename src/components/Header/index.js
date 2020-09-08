import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

import { useStateValue } from '../../services/StateProvider';
import { auth } from '../../services/firebase';

import './styles.css';

function Header() {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className='container__header'>
            <Link to='/'>
                <img
                    className='header__logo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon Logo"
                />
            </Link>

            <div className="header__search">
                <input
                    type="text"
                    className="header__searchInput"
                />
                <button className='header__searchButton'>
                    <FiSearch size={20} />
                </button>
            </div>

            <div className="header__nav">
                <Link className='header__link' to={!user && '/login'}>
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello, {user && user.displayName}</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link className='header__link' to='/'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link className='header__link' to='/'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link className='header__link' to='/checkout'>
                    <div className="header__optionBasket">
                        <FiShoppingCart className='nav__cart' size={20} />
                        <span className="header__optionLineTwo">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;