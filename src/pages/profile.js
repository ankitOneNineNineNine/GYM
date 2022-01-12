import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import BoughtPlans from '../components/BoughtPlans/boughtPlans.component';
import { getUserData } from '../firebase/db';

export default function Profile() {
    const user = useSelector(state => state.user.user);
    const photoRef = useRef(null);
    const [plans, setPlans] = useState([]);
    const [chosenImage, setChosenImage] = useState(null);
    useEffect(() => {
        getUserData(user?.uid, 'plans').then(data => {
            if (data)
                setPlans(data)
        })
    }, [user?.uid])

    const clickUpload = () => {
        photoRef.current.click();
    }

    const photoSet = (e) => {
        setChosenImage(window.URL.createObjectURL(e.target.files[0]));
    }

    const photoUpload = (e) => {
        e.preventDefault();
        console.log(chosenImage)
    }

    return (
        <div className='pa3 flex flex-wrap justify-around'>
            <input className='dn' type='file' onChange={photoSet} ref={photoRef} accept='image/*' />
            <div className='flex justify-center'>
                <div className='cover bg-center br-pill hide-child pointer'
                    style={{
                        backgroundImage: chosenImage ? `url(${chosenImage})` : "url('/trainer.jpg')",
                        overflow: 'hidden'
                    }}
                >
                    {
                        chosenImage ?
                            <>
                                <span className='white dtc w-50 h-50 br-pill child bg-black-40 pa5'>
                                    <div onClick={photoUpload}>
                                        <i className='ma2 fa fa-check green' />Submit
                                    </div>
                                    <div onClick={() => setChosenImage(null)}>
                                        <i className='ma2 fa fa-times red' />Cancel
                                    </div>
                                </span>
                            </>
                            :
                            <span className='white dtc w-50 h-50 br-pill child bg-black-40 pa5' onClick={clickUpload}><i className='ma2 fa fa-camera' />Upload </span>
                    }
                </div>
                <div className='pa3'>
                    <h2>Details</h2>
                    <p>{user?.name}</p>
                    <p>{user?.email}</p>
                </div>
            </div>

            <div className='w-80'>
                <h2 className='mh5 tc'>My Plans</h2>
                <div className='flex flex-wrap justify-around'>
                    {!plans?.length && 'No Plans Bought Yet!'}
                    {
                        plans?.map((p, i) => {
                            return (
                                <div key={i}>
                                    <BoughtPlans planB={p} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div >
    )
}