import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ClientComponent from '../components/dashboard/client.component';
import Dashnav from '../components/dashboard/dashnav.component';
import StatisticsComponent from '../components/dashboard/statistics.component';

export default function Dashboard() {
    let params = useParams();


    return (
        <div className='flex ph5 flex-wrap justify-around'>
            <Dashnav />

            {
                params.nav === 'pending' ?
                    <ClientComponent />
                    :
                    params.nav === 'serviced' ?
                        <ClientComponent />
                        :
                        <StatisticsComponent />
            }

        </div>
    )
}