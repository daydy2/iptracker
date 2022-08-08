import React from 'react';
import { useState } from 'react';
import '../../src/styling/main.css'

const LandingPage = () => {
    const [ip, setIp] = useState('');

    const handleIp = (event) => {
        setIp(event.target.value)
    }


  return (
    <div>
        <main className="mainpage">
            <section className="section1">
                <h1 className="section1__h1-header">IP Address Tracker</h1>
                <form action="/"method='post' className="section__form" onSubmit={(e) => {e.preventDefault()}}>
                    <input 
                    type="text"
                    name= 'ipadd'
                    id='ipadd'
                    value={ip}
                    onChange={handleIp} 
                    />
                    <button type="submit"><i class="fa-solid fa-angle-right"></i></button>
                </form>
            </section>
        </main>
    </div>
  )
}

export default LandingPage