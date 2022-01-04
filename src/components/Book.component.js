import React from 'react';

export default function Book({ title, desc, image }) {
    return (
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 mw5 center">
            <img src={image} class="db w-100 br2 br--top" alt="Photo of Book" />
            <div class="pa2 ph3-ns pb3-ns">
                <div class="dt w-100 mt1">
                    <div class="dtc">
                        <h1 class="f5 f4-ns mv0">{title}</h1>
                    </div>
                    <div class="dtc tr">
                        <h2 class="f5 mv0">Npr. 3,000</h2>
                    </div>
                </div>
                <p class="f6 lh-copy measure mt2 mid-gray">
                    
                </p>
            </div>
        </article>
    )
}