import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { authed } from '../../common/authed';
import { logout } from '../../firebase/auth';
import { getCartItems, getUserData } from '../../firebase/db';
import { setCart } from '../../state/actions';
import Cart from '../Cart/cart.component';
import CartIcon from './cartIcon.component';



const DropDown = () => {
    const navigate = useNavigate();
    return (
        <ul
            style={{
                right: '20%',
                top: '5%',
            }}
            className='list pointer br2 shadow-3 pa2 absolute right-0 bg-white'>

            <li className='pa2 grow' onClick={() => navigate('/profile')}>
                Profile
            </li>
            <li className='pa2 grow' onClick={() => logout()}>Sign Out</li>

        </ul>

    )
}


export default function Nav1() {
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart.item)
    const [clicked, setClicked] = useState(false);
    const [cartClicked, setCartClicked] = useState(false);
    const dispatch = useDispatch();

    const handleWindowClick = (e) => {
        const avatar = e?.srcElement?.attributes?.alt?.textContent;

        if (avatar && avatar === 'avatar' || avatar === 'cart') {
            return;
        }
        else {
            setClicked(false)
            // setCartClicked(false)
        }
    }
    useEffect(() => {
        window.addEventListener('click', handleWindowClick);
        getUserData(user?.user?.uid, 'cart').then(data => {
            if (data && data.length) {
                dispatch(setCart(data))
            }
        })
        return () => {
            window.removeEventListener('click', handleWindowClick)
        }
    }, [user.user])
    return (
        <div className='flex justify-around ma3'>
            <div>
                {
                    clicked && <DropDown />
                }
                <NavLink to='/'>
                    <span className='v-mid'>My Logo</span>
                </NavLink>
            </div>
            <div className='mh3'>
                {
                    authed(user) ?
                        <>
                            <div className="flex justify-between tc center pointer">
                                <div onClick={() => setClicked(!clicked)} >
                                    <img
                                        src="/trainer.jpg"
                                        className="br-100 h2 w2 dib" alt="avatar"
                                    />

                                </div>
                                <CartIcon clicked={cartClicked} setClicked={setCartClicked} length={cart?.length} />
                                {
                                    cartClicked && <Cart />
                                }
                            </div>
                        </>
                        :
                        <>
                            <NavLink
                                style={
                                    ({ isActive }) => {
                                        return isActive ? {
                                            boxShadow: '0 0 5px black'
                                        }
                                            : null
                                    }
                                }

                                className='mh3 pa1' to='/signup'>
                                <span>Sign Up</span>
                            </NavLink>
                            <NavLink
                                style={
                                    ({ isActive }) => {
                                        return isActive ? {
                                            boxShadow: '0 0 5px black'
                                        }
                                            : null
                                    }
                                }
                                className='pa1'
                                to='/signin'>
                                <span>Sign In</span>
                            </NavLink>
                        </>

                }
            </div>
        </div>
    )
}