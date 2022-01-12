import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import ClientComponent from '../components/dashboard/client.component';
import Dashnav from '../components/dashboard/dashnav.component';
import StatisticsComponent from '../components/dashboard/statistics.component';
import { getAllData } from '../firebase/db';

export default function Dashboard() {
    let params = useParams();
    const [data, setData] = useState({})
    useEffect(() => {
        (async () => {
            let result = await getAllData();
            setData(result)
        })()
    }, [])

    let users = Object.keys(data);
    let pending = {};
    let serviced = {};
    users.forEach((user) => {
        let plans = data[user].plans;
        plans.forEach(plan => {
            if (plan.expired !== 'expired') {
                if (pending[user]) {
                    pending[user].push(plan)
                }
                else {
                    pending[user] = [plan]
                }
            }
            else {
                if (serviced[user]) {
                    serviced[user].push(plan)
                }
                else {
                    serviced[user] = [plan]
                }
            }

        })
    })


    return (
        <div className='flex ph5 flex-wrap justify-around'>
            <Dashnav />

            {
                params.nav === 'pending' ?
                    
                    <ClientComponent users={pending} />
                    :
                    params.nav === 'serviced' ?
                        <ClientComponent users={serviced} />
                        :
                        <StatisticsComponent />
            }

        </div>
    )
}