import React from 'react';


export default function Home() {
    return (
        <article className="athelas">
            <div className="vh-100 dt w-100 tc bg-dark-gray white cover"
                style={{ background: "url('/Book 1.jpg') no-repeat center" }}>
                <div className="dtc v-mid">
                    <header className="white-70">
                        <h2 className="f6 fw1 ttu bg-black tracked mb2 lh-title">Issue One</h2>
                        <h3 className="f6 fw1 lh-title"></h3>
                    </header>
                    <h1 className="f1 f-headline-l fw1 i white-60">The Secrets of Weight Gain And Weight Loss</h1>
                    <blockquote className="ph0 mh0 measure f4 lh-copy center">
                        <p className="fw1 white-70">
                            It's simple!
                        </p>
                        <cite className="f6 ttu tracked fs-normal">Ankit Pradhan</cite>
                        <div className="ph3 mb4">
                            <a className="f6 link dim br1 ba bw2 ph3 pv2 mb2 dib white" href="#0">Buy Now</a>
                        </div>
                    </blockquote>
                </div>
            </div>

        </article>
    )
}