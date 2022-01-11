import { Timestamp } from 'firebase/firestore';
import React from 'react';
import { normalize } from '../../common/normalize';
export default function BoughtPlans({ planB }) {
    const { plan, price, bought, expiry } = planB;
    const t = new Timestamp(bought.seconds, bought.nanoseconds);
    const t2 = new Timestamp(expiry.seconds, expiry.nanoseconds);
    return (
        <div className='shadow-3 pa3 pointer ma2'>
            <p className='f3 b'>{plan}</p>
            <p className='tr gray'>Npr. {normalize(price)}</p>
            <p className='f4'>Purchased Date: {`${t.toDate()}`}</p>
            <p className='f4'>Expiry Date: {t2 - t > 0 ? `${t2.toDate()}` : 'Expired'}</p>
        </div>
    )
}