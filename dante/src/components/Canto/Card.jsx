import React from 'react'

const Card = ({image, text}) => {
    return (
        <div className="card">
            <img src={image} alt="card"></img>
            <span style={{marginLeft: "1rem", fontSize: "1.5rem"}}>{text.name}</span>
            <p>{text.desc}</p>
        </div>
    )
}

export default Card