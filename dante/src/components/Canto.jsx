import React from 'react'
import { useEffect, useState } from "react";

import Summary from './Canto/Summary';
import Supplementals from './Canto/Supplementals';
import Analysis from './Canto/Analysis';
import NavBar from './NavBar';
import Music from './Music';

// summary, supplements, analysis
const Canto = ({info_path}) => {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`/data/${info_path}.json`) // Ensure files are inside public/data/
          .then((res) => res.json())
          .then((json) => setData(json))
          .catch((err) => console.error("Error loading data:", err));

      }, [info_path]);

    return (
        <div className="canto">
            <NavBar />
            <h1>{data.title}</h1>
            <Music music_file={data.music} />
            <Summary summary_items={data.summary}></Summary>
            <Supplementals supplemental_items={data.supplementary}></Supplementals>
            <Analysis analysis_items={data.analysis}></Analysis>
            {data.sources && <h2>SOURCES</h2>}
            <div className="sources-container">
                {data.sources && data.sources.map((item, index) => (
                    <div key={index}>
                        <h4 >{item.text}</h4>
                    </div>
                ))}
            </div>
            {data.next_canto ? <a href={"/canto/"+data.next_canto}><h2 style={{margin: "1rem"}}>{"NEXT PAGE >"}</h2></a> : <br></br>}
        </div>
    )
}

export default Canto