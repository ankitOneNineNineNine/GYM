import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { POST } from '../adapters/http.adapter';

export default function Signup() {
    const [credentials, setCredentials] = useState({});

    const handleChange = (e) => {
        let [name, value] = e.target;
        setCredentials(prev => {
            return {
                ...prev,
                name: value,
            }
        })
    }


    const register = async (e) => {
        e.preventDefault();
        try {
            let data = await POST('/signup', credentials, false, false)
            console.log(data)
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
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email" onChange={handleChange} />
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
                    <NavLink to='/signin' className="f6 link dim black db">Sign In</NavLink>
                </div>
            </form>
        </main>

    )
} 