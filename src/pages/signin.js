import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUser } from '../state/reducers';

export default function Signin() {
    const [credentials, setCredentials] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        let [name, value] = e.target;
        setCredentials(prev => {
            return {
                ...prev,
                name: value,
            }
        })
    }


    const login = (e) => {
        e.preventDefault();
        dispatch(setUser(credentials))
    }


    return (
        <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email-address" onChange={handleChange} />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange={handleChange} />
                    </div>

                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={login} />
                </div>
                <div className="lh-copy mt3">
                    <NavLink to="/signup" className="f6 link dim black db">Sign up</NavLink>
                    <NavLink to="/forgot-password" className="f6 link dim black db">Forgot your password?</NavLink>
                </div>
            </form>
        </main>

    )
}