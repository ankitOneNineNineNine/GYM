import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BoughtPlans from '../components/BoughtPlans/boughtPlans.component';
import { getUserData } from '../firebase/db';

export default function Profile() {
    const user = useSelector(state => state.user.user)
    const [plans, setPlans] = useState([])
    useEffect(() => {
        getUserData(user?.uid, 'plans').then(data => {
            if (data)
                setPlans(data)
        })
    }, [user?.uid])

    return (
        <div className='pa3 flex flex-wrap justify-around'>
            <div className='flex justify-center'>
                <img src='/trainer.jpg' className='br-pill'
                    style={{
                        width: '300px'
                    }}
                />
                <div className='pa5'>
                    <h2>Details</h2>
                    <p>{user?.name}</p>
                    <p>{user?.email}</p>
                </div>
            </div>

            <div className='w-80'>
                <h2 className='mh5 tc'>My Plans</h2>
                <div className='flex flex-wrap justify-around'>
                    {!plans?.length && 'No Plans Bought Yet!'}
                    {
                        plans?.map((p, i) => {
                            return (
                                <div key={i}>
                                    <BoughtPlans planB={p} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}