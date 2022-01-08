import React from 'react';

export default function Book({ title, desc, image }) {
    return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 mw5 center">
            <img src={image} className="db w-100 br2 br--top" alt="Photo of Book" />
            <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                    <div className="dtc">
                        <h1 className="f5 f4-ns mv0">{title}</h1>
                    </div>
                    <div className="dtc tr">
                        <h2 className="f5 mv0">Npr. 3,000</h2>
                    </div>
                </div>
                <p className="f6 lh-copy measure mt2 mid-gray">

                </p>
            </div>
        </article>
    )
}