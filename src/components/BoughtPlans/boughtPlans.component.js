import React from 'react';
import { normalize } from '../../common/normalize';

export default function BoughtPlans({planB}) {
  
    const { plan, price, bought, expiry } = planB;
    return (
        <div className='shadow-3 pa3 pointer ma2'>
            <p className='f3 b'>{plan}</p>
            <p className='tr gray'>Npr. {normalize(price)}</p>
            <p className='f4'>Purchased Date: {bought}</p>
            <p className='f4'>Expiry Date: {Date.now(expiry) - Date.now() < 0 ? 'Expired' : expiry}</p>
        </div>
    )
}