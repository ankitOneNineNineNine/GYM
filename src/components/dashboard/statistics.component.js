import React from 'react';


export default function StatisticsComponent() {
    return (
        <div className='pa1 w-70'>
            <h2>Statistics</h2>
            <div className='flex flex-wrap justify-around'>
                <div className='w-50 shadow-3 pa2 ma1'>
                    <p className='f4 b'>Total Clients Serviced</p>
                    <p>1000</p>
                </div>
                <div className='w-50 shadow-3 pa2 ma1'>
                    <p className='f4 b'>Total Clients Pending</p>
                    <p>100</p>
                </div>

            </div>
        </div>
    )
}