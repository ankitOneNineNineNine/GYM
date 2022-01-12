import React from 'react';

const IndividualClient = ({ user, plans }) => {
    return (
        <>
            {
                plans.map((plan, i) => {
                    return (
                        <div key={i} className='flex flex-wrap mt2 justify-around bg-navy white pa3 align-center v-mid'>
                            {/* <div className='w-10'>{user}</div> */}
                            <div className='w-60'>{plan.plan}</div>
                            <div className='w-20'>{plan.price}</div>
                            <input type='checkbox' value='serviced' className='w-10 self-center' />
                        </div>
                    )
                })
            }
        </>
    )
}

export default function ClientComponent({ users }) {

    return (
        <div className='pa1 w-70'>
            <h2 >Clients</h2>
            {
                !Object.keys(users).length && 'No user'
            }
            {
                Object.keys(users).map(user => {
                    return (
                        <IndividualClient user={user} plans={users[user]} />
                    )
                })
            }

        </div>
    )
}