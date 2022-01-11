import React from 'react';

export default function ClientComponent() {
    return (
        <div className='pa1 w-70'>
            <h2 >Clients</h2>
            <div className='flex mt2 justify-around bg-navy white pa3 align-center v-mid'>
                <div>Client Name</div>
                <div>Client Email</div>
                <div>Client Plan</div>
                <input type='checkbox' value='serviced' className='self-center' />
            </div>

        </div>
    )
}