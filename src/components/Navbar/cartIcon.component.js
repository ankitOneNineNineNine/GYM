import React from 'react';


export default function CartIcon({ clicked, setClicked, length }) {

    return (
        <div style={{
            zIndex: 100
        }}
            onClick={() => { setClicked(!clicked) }}
            className='dib mh2 pv1 ph2 shadow-1 br-100 pointer relative' >
            <i className='fa v-mid center fa-shopping-cart' alt='cart' />
            <span className='absolute top-0 right-0 shadow-2 br-pill bg-white' alt='cart'>{length}</span>
        </div >
    )
}