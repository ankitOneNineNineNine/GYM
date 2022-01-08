import { collection, doc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addPlanToUser } from '../../firebase/addPlans';
import { db } from '../../firebase/setup';

import Item from '../CartItem/cartItem.component';


export default function Cart(){
    const user = useSelector(state=>state.user.user);
    
    const cart = [
        {
            plan: 'Personalized Plan', 
            price: 10000,
            expiry: 720
        },
    ]
    const buy = () =>{
        addPlanToUser(user.uid, cart[0])
    }
    return (
        <div className='shadow-2 pa2 fixed bottom-2 right-0 bg-white' 
            style = {{
                width: '300px',
            }}
        >

             {/* <Item />    */}
                
          <Item plan = 'Personalized Plans' price = '10,000' />
          <Item plan = 'Phone Consultation(30 mins)' price = '1000' />
 
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