import React from 'react'
import logo from '../assets/logo-square.png'

function Footer() {
  return (

    <div className='footer-bg'>
      <div className='container'>
        <footer>
          <div className='footer-grid'>
            <div className='footer-col'>
              <img src={logo} />
            </div>
            <div className='footer-col'>
              <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#home'>About</a></li>
                <li><a href='#home'>Menu</a></li>
                <li><a href='#home'>Reservations</a></li>
                <li><a href='#home'>Order Online</a></li>
                <li><a href='#home'>Login</a></li>
              </ul>
            </div>
            <div className='footer-col'>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#home'>About</a></li>
                <li><a href='#home'>Menu</a></li>
              </ul>
            </div>
            <div className='footer-col'>
            <ul>
                <li>Adress</li>
                <li><a href='#home'>Instagram</a></li>
                <li>+351 222 222 222</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer