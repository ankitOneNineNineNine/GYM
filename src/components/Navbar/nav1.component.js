import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authed } from '../../common/authed';
import { logout } from '../../firebase/setup';


const DropDown = () => {
    return (
        <ul
            style={{
                right: '20%',
                top: '5%',
            }}
            className='list pointer br2 shadow-3 pa2 absolute right-0 bg-white'>

            <li className='pa2 grow'>
                Profile
            </li>
            <li className='pa2 grow' onClick={() => logout()}>Sign Out</li>
        </ul>

    )
}


export default function Nav1() {
    const user = useSelector(state => state.user)
    const [clicked, setClicked] = useState(false)
    const handleWindowClick = (e) => {
        const avatar = e?.srcElement?.attributes?.alt?.textContent;
        if (avatar && avatar === 'avatar') {
            return;
        }
        else {
            setClicked(false)
        }
    }
    useEffect(() => {
        window.addEventListener('click', handleWindowClick);
        return () => {
            window.removeEventListener('click', handleWindowClick)
        }
    }, [])
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
                        <div className="tc center pointer" onClick={() => setClicked(!clicked)}>
                            <img
                                src="http://tachyons.io/img/logo.jpg"
                                className="br-100 h2 w2 dib" alt="avatar" />
                        </div>

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