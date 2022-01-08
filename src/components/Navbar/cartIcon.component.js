import React from 'react';


export default function CartIcon({ clicked, setClicked }) {

    return (
        <div style={{
            zIndex: 100
        }}

            onClick={() => { setClicked(!clicked) }}
            className='shadow-3 pointer bg-navy br-pill pa1 white fixed bottom-2 right-1' >
            <i className='fa fa-2x fa-shopping-cart' alt='cart' />
            <span className='absolute br-pill shadow-3 pa1 w-15 h-15 top-0 right-0 bg-white navy' alt = 'cart'>2</span>
        </div >
    )
}