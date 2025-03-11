import React from 'react'
import NavBar from './NavBar';
const Home = () => {

const navigateToCanto = () => {
    window.location.href = '/canto/inferno-1';
}

return (
    <div>
        <NavBar style={{position:"fixed", top:"0"}} />
        <div className="inferno center-container">
            <h1>THE DIVINE COMEDY</h1>
            <button className="white-hollow-button" onClick={navigateToCanto}>Start Here</button>
        </div>
    </div>
    )
}

export default Home