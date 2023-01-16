import React, {Fragment, useState, useEffect} from "react";
import GrayImg from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/description-with-link";
import { Link } from "react-router-dom";

const Planet = (props) => {

  let title;
    if(props.titleWithUnderline){
      
      title = <h4><u>{props.name}</u></h4>
    } else {
      title = <h4>{props.name}</h4>
    }
    
    return (
      <div> 
        <Link to={`/planet/${props.id}`}>{title}</Link>
        <DescriptionWithLink description={props.description} link={props.link}/>
        <GrayImg img_url={props.img_url} gray={props.gray}/>
        <hr/>
      </div>
    )

}

export default Planet;
