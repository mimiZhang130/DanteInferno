import React from 'react'
import Card from './Card';

const Supplementals = ({supplemental_items=[]}) => {
  return (
    <div>
      <h2>SUPPLEMENTALS</h2>
      <div className="card-container">
        {supplemental_items.map((item, index) => (
          <Card key={index} image={item.image} text={item.text}></Card>
        ))}
      </div>
    </div>  
  )
}

export default Supplementals