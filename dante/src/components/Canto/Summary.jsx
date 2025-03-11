import React from 'react'
import Scene from './Scene'
const Summary = ({summary_items = []}) => {
  return (
    <div>
      <h2>SUMMARY</h2>
      {console.log(Array.isArray(summary_items))}
      <div className="scene-container">
        {summary_items.map((item, index) => (
          <Scene key={index} image={item.image} text={item.text}></Scene>
        ))}
      </div>
    </div>
  )
}

export default Summary