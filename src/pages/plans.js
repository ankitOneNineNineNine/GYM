import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { authed } from '../common/authed';
import { showError, showSucess } from '../common/toast';

export default function Plans() {
    const user = useSelector(state => state.user)
    const [selectedPlan, setSelectedPlan] = useState(null)



    const handleChange = (e) => {
        setSelectedPlan(e.target.value);
    }

    const letsTrain = (e) => {
        e.preventDefault();
        console.log(user.user.email, selectedPlan)
        if(!selectedPlan){
            showError('Please Select the Plan!')
            return;
        }
        showSucess('You will get an email in Short!');
    }
    return (
        <section className="mw7 center ph4">
            <h2 className="athelas ph3 ph0-l">Plans</h2>
            <article className="pv4 bt bb b--black-10 ph3 ph0-l">
                <div className="flex flex-column flex-row-ns">
                    <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                        <h1 className="f3 athelas mt0 lh-title">Phone Consultation </h1>
                        <p className="f5 f4-l lh-copy athelas">
                            In this plan, I will meet you through Google Hangouts. So we shall talk for an hour.
                            I will then consult you based on your physique and the details that you provide me.
                            The consultation charge is very less i.e. Npr. 2,000 per hour.
                        </p>
                    </div>
                    <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                        <img src="http://mrmrs.github.io/photos/cpu.jpg" className="db" alt="Photo of a dimly lit room with a computer interface terminal." />
                    </div>
                </div>
                <p className="f6 lh-copy gray mv0"> <span className="ttu">Npr. 2,000 per hour</span></p>

            </article>
            <article className="pv4 bb b--black-10 ph3 ph0-l">
                <div className="flex flex-column flex-row-ns">
                    <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                        <h1 className="f3 athelas mt0 lh-title">Personalized Plans</h1>
                        <p className="f5 f4-l lh-copy athelas">
                            In this plan, I will develop the wholesome Personalized plan for you from training regime to diet plans
                            based on your schedule, preference and availability. I have uploaded numerous videos of "How To" in Youtube
                            so you can visit that if you have problems in doing certain exercise. I will give you resources about how to weigh
                            foods and all the instructions on how to accomplish what I have given you.
                            The charge is Npr. 10,000 per plan.
                            I will create a plan for one month in this plan, and every week, we shall meet through Google Hangouts and see the progress
                            and make changes if have to.
                        </p>
                    </div>
                    <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                        <img src="http://mrmrs.github.io/photos/whale.jpg" className="db" alt="Photo of a whale's tale coming crashing out of the water." />
                    </div>
                </div>
                <p className="f6 lh-copy gray mv0"> <span className="ttu">Npr. 10,000</span></p>

            </article>

            <h2>Please Fill the form below if you want to hire me as your Personal Trainer!</h2>
            <div className="pa4-l">
                <form className="bg-black pa3 center ba white b--black-10">
                    <fieldset className="cf bn tc w-80 pa0 center">
                        <legend className="f5 f4-ns mb3 white-80">Select your Plan</legend>
                        <div className="cf pa3">
                            {/* <label className="clip mt3" htmlFor="email-address">Email Address</label>
                            <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100" placeholder="Your Email Address" type="text" name="email" value={user?.email} id="email" /> */}

                            <label className="clip pa2" htmlFor="plan">Choose a Plan</label>
                            <select className="f6 pa2 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100" onChange={handleChange}>
                                <option selected disabled>Select Plan</option>
                                <option>Personalized Plans</option>
                                <option>Phone Consultation(30 mins)</option>
                                <option>Phone Consultation(1 hr)</option>
                            </select>


                        </div>
                        {
                            authed(user) ?
                                <input className="ml0 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-white green pointer w-100 w-25-m w-20-l" type="submit" value="Add to Cart" onClick={letsTrain}></input>
                                :
                                <p>Please Sign In first!</p>
                        }
                    </fieldset>
                </form>
            </div>
        </section>
    )
}