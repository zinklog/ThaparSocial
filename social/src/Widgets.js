import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className='widgets' >
            <iframe 
                src='https://www.covid19india.org/'
                width='350'
                height='100%'
                style={{border: 'none', scrolling: 'none'}}
            >

            </iframe>
        </div>
    )
}

export default Widgets
