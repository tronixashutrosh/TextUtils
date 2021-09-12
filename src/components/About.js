import React from 'react'

export default function About(props) {
    return (
        <>
         <div className={`text-${props.mode==='light'?'dark': 'light'} my-2`}>
            <p>TextUtil is a text utility app, a simple tool for automatically analyzing texts.There are different types of text analysis techniques, like </p>
                <ul>
                     <li>converting to upper and lower case</li>
                     <li>counting number of and words</li>
                     <li>and also giving you an idea of how much time does it take you to read this whole text that you have written.</li>
                </ul>
         </div>
        </>
    )
}
