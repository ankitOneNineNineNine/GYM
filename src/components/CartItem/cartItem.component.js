import React from 'react';

export default function Item({plan, price}) {
    return (
        <div className='pa2 flex mv1 justify-between shadow-2' >
            <span>{plan}</span>
            <div>
                <span>{price}</span>
                <i className='fa fa-trash red mh2 pointer' />
            </div>
        </div>
    )
}