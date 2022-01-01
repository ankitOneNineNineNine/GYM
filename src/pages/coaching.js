import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Coaching() {
    return (
        <>
            <section className="cf flex justify-center w-100 pa2-ns ph4 ">
                <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
                    <div className="aspect-ratio aspect-ratio--1x1">
                        <img style={{ backgroundImage: "url(http://mrmrs.github.io/images/0006.jpg)" }}
                            className="db bg-center cover aspect-ratio--object" />
                    </div>
                    <a href="#0" className="ph2 ph0-ns pb3 link db">
                        <h3 className="f5 f4-ns mb0 black-90">Consultation</h3>
                        <h3 className="f6 f5 fw4 mt2 black-60">Npr 2,000 per hour</h3>
                    </a>
                </article>
                <article className="fl w-100 w-50-m  w-25-ns pa2-ns">
                    <div className="aspect-ratio aspect-ratio--1x1">
                        <img style={{ backgroundImage: "url(http://mrmrs.github.io/images/0006.jpg)" }}
                            className="db bg-center cover aspect-ratio--object" />
                    </div>
                    <a href="#0" className="ph2 ph0-ns pb3 link db">
                        <h3 className="f5 f4-ns mb0 black-90">Personalized Plan</h3>
                        <h3 className="f6 f5 fw4 mt2 black-60">Npr 10,000</h3>
                    </a>
                </article>
                <NavLink to="/coaching/plans" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
                    <span className="pr1">Learn More</span>
                    <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{ fill: "currentcolor" }}>
                        <title>Learn More</title>
                        <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
                    </svg>
                </NavLink>
            </section>

            <article>
                <h2 className="tc athelas ph3 ph0-l">Some Transformations</h2>
                <NavLink to="" className="fl w-50 w-25-l link overflow-hidden">
                    <div role="img" aria-label="Primer movie" className="hide-child grow aspect-ratio--4x6 " style={{ background: " url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg) no-repeat center center", backgroundSize: "cover", }}>
                        <div class="white dtc v-mid w-100 h-100 child bg-black-40 pa5">
                            <h2>Jeorge Washington</h2>
                            <p>Transformed from Weeight 20kg to 70kg</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="" className="fl w-50 w-25-l link overflow-hidden">
                    <div role="img" aria-label="Primer movie" className="hide-child grow aspect-ratio--4x6 " style={{ background: " url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg) no-repeat center center", backgroundSize: "cover", }}>
                        <div class="white dtc v-mid w-100 h-100 child bg-black-40 pa5">
                            <h2>Jeorge Washington</h2>
                            <p>Transformed from Weeight 20kg to 70kg</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="" className="fl w-50 w-25-l link overflow-hidden">
                    <div role="img" aria-label="Primer movie" className="hide-child grow aspect-ratio--4x6 " style={{ background: " url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg) no-repeat center center", backgroundSize: "cover", }}>
                        <div class="white dtc v-mid w-100 h-100 child bg-black-40 pa5">
                            <h2>Jeorge Washington</h2>
                            <p>Transformed from Weeight 20kg to 70kg</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="" className="fl w-50 w-25-l link overflow-hidden">
                    <div role="img" aria-label="Primer movie" className="hide-child grow aspect-ratio--4x6 " style={{ background: " url(https://s3-us-west-1.amazonaws.com/tachyonsio/img/primer.jpg) no-repeat center center", backgroundSize: "cover", }}>
                        <div class="white dtc v-mid w-100 h-100 child bg-black-40 pa5">
                            <h2>Jeorge Washington</h2>
                            <p>Transformed from Weeight 20kg to 70kg</p>
                        </div>
                    </div>
                </NavLink>
            </article>
         


        </>
    )
}