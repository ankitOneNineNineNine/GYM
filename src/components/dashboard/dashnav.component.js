import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Dashnav() {
    return (
        <article className="pa3 w-30">
            <h1 className="f4 bold center mw6">Nav</h1>
            <ul className="list pl0 ml0 center mw6 ba b--light-silver br2 pointer">
                <li className="ph3 pv3 dim bb b--light-silver">
                    <NavLink to='/dashboard/stats'>
                        Statistics
                    </NavLink>
                </li>
                <li className="ph3 pv3 dim bb b--light-silver">
                    <NavLink to='/dashboard/pending'>
                        Pending Clients
                    </NavLink>
                </li>
                <li className="ph3 pv3 dim bb b--light-silver">
                    <NavLink to='/dashboard/serviced'>
                        Serviced Clients
                    </NavLink>
                </li>

            </ul>
        </article>
    )
}