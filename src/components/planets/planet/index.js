import React, {Fragment, useState, useEffect} from "react";
import GrayImg from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/description-with-link";
import Form from "./form";

async function getSatellites(id){
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = (props) => {

  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props.id).then(data => {
      setSatellites(data['satellites'])
    })
  }, [])

  const addSatellite = (newSatellite) => {
    setSatellites([...satellites, newSatellite]);
  }

  let title;
    if(props.titleWithUnderline){
      title = <h4><u>{props.name}</u></h4>
    } else {
      title = <h4>{props.name}</h4>
    }
    
    return (
      <div> 
        {title}
        <DescriptionWithLink description={props.description} link={props.link}/>
        <GrayImg img_url={props.img_url} gray={props.gray}/>
        <h4>Satélites</h4>
        <hr/>
        <Form addSatellite={addSatellite}/>
        <hr/>
        <ul>
          {satellites.map((satellite, index) =>
          <li key={index}>{satellite.name}</li>)}
        </ul>
      <hr/>
      </div>
    )

}

export default Planet;
