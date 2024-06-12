import React from 'react'
import './MyWork.css'

function MyWork() {
    return (
        <div className='work-box position-relative w-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='img_wrpr'>
                <img className='w-100' src='https://img.freepik.com/premium-vector/halloween-banner-glowinthedark-candles-old-house_180401-297.jpg' alt='' />
            </div>
            <div className='position-relative w-100 d-flex flex-column p-3'>
                <a href='https://img.freepik.com/premium-vector/halloween-banner-glowinthedark-candles-old-house_180401-297.jpg' className='work-name'>Jos Alukkas</a>
            </div>
        </div>
    )
}

export default MyWork
