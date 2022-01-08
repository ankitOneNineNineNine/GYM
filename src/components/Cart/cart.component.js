import React from 'react';


export default function Cart(){
    return (
        <div className='shadow-2 pa2 fixed bottom-2 right-0 bg-white' 
            style = {{
                width: '300px',
            }}
        >

             {/* <Item />    */}
                
            <div className='pa2 flex mv1 justify-between shadow-2' >
                <span>Personalized Plans</span>
                <div>
                <span>Npr. 10,000</span>
                <i className='fa fa-trash red mh2 pointer' />
                </div>

            </div>
            <div className='pa2 flex mv1 justify-between shadow-2' >
                <span>Personalized Plans</span>
                <div>
                <span>Npr. 10,000</span>
                <i className='fa fa-trash red mh2 pointer' />
                </div>

            </div>
            <div className='pa2 flex mv1 bg-navy white justify-between shadow-2' >
                <span>Total</span>
                <div>
                <span>Npr. 20,000</span>
                </div>

            </div>
            <div className='tc mv1'>
                <button className='f6 link pointer dim ph3 center pv2 mb2 dib white bg-navy'>Buy</button>
            </div>
        </div>
    )
}