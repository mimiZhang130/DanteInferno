import React from 'react'

const Scene = ({image, text}) => {
  return (
    <div className="scene">
      <img src={image} alt="scene"></img>
      <p>{text}</p>
    </div>
  )
}

export default Scene