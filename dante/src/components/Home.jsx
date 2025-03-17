import React from 'react'
import NavBar from './NavBar';
const Home = () => {

const navigateToBackground = () => {
    window.location.href = '/dante';
}

return (
    <div>
        <NavBar style={{position:"fixed", top:"0"}} />
        <div className="inferno center-container">
            <h1>THE DIVINE COMEDY</h1>
            <button className="white-hollow-button" onClick={navigateToBackground}>Start Here</button>
        </div>
    </div>
    )
}

export default Home