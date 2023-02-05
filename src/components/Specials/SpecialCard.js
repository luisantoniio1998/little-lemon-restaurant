import React from 'react'
import lemon from '../assets/lemon.jpg'

function SpecialCard() {
  return (
    <div className='card'>
        <img src={lemon} />
        <div className='card-info'>
            <div className='card-title'>
                <span>Lemon</span>
                <span>aa</span>
            </div>
        </div>

    </div>
  )
}

export default SpecialCard