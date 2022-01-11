import React from 'react';
import { normalize } from '../../common/normalize';

export default function Item({ plan, price, deleteFromCart, handleSelectPlan }) {
    return (
        <div className='pa2 flex mv1 justify-between shadow-2' >
            <input
                plan={plan}
                price={price}
                className='self-center' type='checkbox' onChange={handleSelectPlan} />
            <span>{plan}</span>
            <div>
                <span>Npr. {normalize(price)}</span>
                <i className='fa fa-trash red mh2 pointer' onClick={(e) => {
                    e.preventDefault();
                    deleteFromCart({ plan, price })
                }} />
            </div>
        </div>
    )
}