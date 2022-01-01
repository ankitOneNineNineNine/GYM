import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Nav1 from './Navbar/nav1.component';
export default function Navbar() {
    const [classforNav, setClassforNav] = useState('');
    const handleScroll = (e) => {
        if (e.target.documentElement.scrollTop > 80) {
            setClassforNav('w-100 fixed top-0 tc justify-center left-0')
        }
        else {
            setClassforNav('')
        }
    }
    useEffect(() => {

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <nav className="pa2 pa3-ns">
            <Nav1 />
            <div style={{ zIndex: 1000 }} className={"tc pb3 pv4 bg-white " + classforNav}>
                <NavLink className="link dim gray f6 f5-ns dib mr3" to="/" title="Home">Home</NavLink>
                <NavLink className="link dim gray f6 f5-ns dib mr3" to="/bio" title="Bio">My Bio</NavLink>
                <NavLink className="link dim gray f6 f5-ns dib mr3" to="/coaching" title="About">Coaching</NavLink>
                <NavLink className="link dim gray f6 f5-ns dib mr3" to="/books" title="Books">Books</NavLink>
            </div>
        </nav>
    )
}