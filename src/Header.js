import React from 'react';
import './Header.css';
import amazonIcon from './amazon_icon.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Home from './Home';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

function Header() {

    const [{ cart, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user){
            auth.signOut()
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src={amazonIcon} alt="amazon" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={!user && './login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello, {user?.email}
                        </span>
                        <span className="header__optionLineTwo">
                            {user?'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header__optionCart">
                    <Link to='/checkout' style={{ color: 'white', textDecoration: 'none' }}>
                        <ShoppingCartIcon className='' />
                        <span className="header__optionLineTwo header__cartCount">{cart.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header