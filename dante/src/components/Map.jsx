import React from 'react'
import NavBar from './NavBar'

const Map = ({cantos=[]}) => {
  return (
    <div>
        <NavBar />
        <h1 className="map-header">MAP</h1>
        <div className="map-container">
            {cantos.map((canto, index) => (
                <a href={"/canto/" + canto.book + "-" + canto.number}><button key={index}>{canto.book.toUpperCase() + " - " + canto.number}</button></a>
            ))}
        </div>
    </div>
  )
}

export default Map