import { collection, doc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { showSucess } from '../../common/toast';
import { addPlanToUser } from '../../firebase/db';
import { db } from '../../firebase/setup';

import Item from '../CartItem/cartItem.component';


export default function Cart() {
    const user = useSelector(state => state.user.user);
    const cart = useSelector(state => state.cart.item)
    // const cart = [
    //     {
    //         plan: 'Personalized Plan',
    //         price: 10000,
    //         expiry: 720
    //     },
    // ]
    console.log(cart)
    const buy = async () => {
        await addPlanToUser(user.uid, cart[0]);
        showSucess('Your Receipt will come in your email shortly!')
    }
    return (
        <div className='shadow-2 fixed pa2 bg-white'
            style={{
                width: '300px',
                top: '63px',
                right: '7%'
            }}
        >

            {/* <Item />    */}

            {cart?.map((plan, i) => {
                return (
                    <Item key={i} plan={plan.plan} price={plan.price} />
                )
            })}
            <div className='pa2 flex mv1 bg-navy white justify-between shadow-2' >
                <span>Total</span>
                <div>
                    <span>Npr. 20,000</span>
                </div>

            </div>
            <div className='tc mv1'>
                <button className='f6 link pointer dim ph3 center pv2 mb2 dib white bg-navy' onClick={buy}>Buy</button>
            </div>
        </div>
    )
}