import { collection, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { normalize } from '../../common/normalize';
import { showSucess } from '../../common/toast';
import { addPlanToUser, updateCart } from '../../firebase/db';
import { db } from '../../firebase/setup';
import { setCart } from '../../state/actions';

import Item from '../CartItem/cartItem.component';


export default function Cart() {
    const user = useSelector(state => state.user.user);
    const cart = useSelector(state => state.cart.item)
    const dispatch = useDispatch();
    const [selectedPlans, setSelectedPlans] = useState([])
    const deleteFromCart = async (item) => {
        let p = cart.filter(c => c.plan !== item.plan && c.price !== item.price);
        await updateCart(user.uid, item, 'delete');
        dispatch(setCart({ unset: true, payload: p }))

    }

    const handleSelectPlan = (e) => {
        const plan = e.target.getAttribute('plan');
        const price = e.target.getAttribute('price');
        let expiry = 0;
        if (plan === 'Phone Consultation(30 mins)') {
            expiry = 0.5
        }
        else if (plan === 'Phone Consultation(1 hr)') {
            expiry = 1
        }
        if (e.target.checked) {
            setSelectedPlans([...selectedPlans, { plan, price, expiry }])
        }
        else {
            let p = selectedPlans.filter(s => s.plan !== plan && s.price !== price);
            setSelectedPlans(p)
        }
    }

    const buy = async () => {
        selectedPlans.forEach(async plan => {
            await addPlanToUser(user.uid, plan);
            deleteFromCart(plan)
        })
        showSucess('Your Receipt will come in your email shortly!')
    }
    return (
        <div className='shadow-2 fixed pa2 bg-white'
            style={{
                width: '380px',
                top: '63px',
                right: '7%'
            }}
        >

            {/* <Item />    */}

            {cart?.map((plan, i) => {
                return (
                    <div key={i}>
                        <Item plan={plan.plan} price={plan.price} deleteFromCart={deleteFromCart} handleSelectPlan={handleSelectPlan} />
                    </div>
                )
            })}
            <div className='pa2 flex mv1 bg-navy white justify-between shadow-2' >
                <span>Total</span>
                <div>
                    <span>Npr. {normalize(cart.reduce((acc, c) => c.price + acc, 0))}</span>
                </div>

            </div>
            <div className='tc mv1'>
                <button className='f6 link pointer dim ph3 center pv2 mb2 dib white bg-navy' onClick={buy}>Buy</button>
            </div>
        </div>
    )
}