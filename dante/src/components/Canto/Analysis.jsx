import React from 'react'

const Analysis = ({analysis_items=[]}) => {
  return (
    <div>
      <h2>ANALYSIS</h2>
        <div className="analysis-container">
        {analysis_items.map((item, index) => (
            index % 2 === 0 ? (
                <div className="left-analysis-container" key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ) : (
                <div className="right-analysis-container" key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            )
        ))}
        </div>
    </div>
  )
}

export default Analysis