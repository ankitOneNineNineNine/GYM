import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authed } from '../../common/authed';

export default function Nav1() {
    const user = useSelector(state => state.user)
    return (
        <div className='flex justify-around ma3'>
            <div>
                <NavLink to='/'>
                    <span className='v-mid'>My Logo</span>
                </NavLink>
            </div>
            <div className='mh3'>
                {
                    authed(user) ?
                        <div class="tc center pointer">
                            <img
                                src="http://tachyons.io/img/logo.jpg"
                                class="br-100 h2 w2 dib" alt="avatar" />
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