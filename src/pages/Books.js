import React from 'react';


export default function Books() {
    return (
        <div className='flex'>
            <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <img src="/Book 1.jpg" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
                    <div class="pa2 ph3-ns pb3-ns">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                                <h1 class="f5 f4-ns mv0">The Secrets of Weight Gain And Weight Loss (Iss.1)</h1>
                            </div>
                            <div class="dtc tr">
                                <h2 class="f5 mv0">Npr. 3,000</h2>
                            </div>
                        </div>
                        <p class="f6 lh-copy measure mt2 mid-gray">
                            This Book is all about the secrets behind weight gain and loss, some of the mistakes people make while doing so , 
                            and the easy yet sustainable way of doing so.
                        </p>
                    </div>
            </article>

        </div>
    )
}