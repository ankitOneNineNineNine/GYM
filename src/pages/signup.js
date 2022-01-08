import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { POST } from '../adapters/http.adapter';
import {useDispatch} from 'react-redux'
import { showSucess } from '../common/toast';
import { setUser } from '../state/actions';
import { registerWithEmailAndPassword, signInWithGoogle } from '../firebase/setup';

export default function Signup() {
    const [credentials, setCredentials] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        let { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value })
    }


    const register = async (e) => {
        e.preventDefault();
        try {
            const reg = await registerWithEmailAndPassword(credentials.name, credentials.email, credentials.password)
            if (reg) {
                showSucess('Please Sign in Now!');
                navigate('/signin');
            }
        }
        catch (e) {
            console.log('e', e)
        }

    }


    return (
        <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" onChange={handleChange} />
                    </div>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email" onChange={handleChange} />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange={handleChange} />
                    </div>

                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up" onClick={register} />
                </div>
                <div className="lh-copy mt3">
                    <span>Use Google Instead</span><img width='30px' className='mh3 pointer v-mid br-pill' src='/google.jfif' onClick={() => dispatch(setUser({
                        ...credentials,
                        loginWithEmail: false,
                    }))} />
                    <NavLink to='/signin' className="f6 link dim black db">Sign In</NavLink>
                </div>
            </form>
        </main>

    )
} 