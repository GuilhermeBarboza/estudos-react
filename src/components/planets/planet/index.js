import React, {Fragment} from "react";
import GrayImg from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/description-with-link";

const Planet = (props) => {
  let title;
  if(props.titleWithUnderline){
    title = <h4><u>{props.name}</u></h4>
  } else {
    title = <h4>{props.name}</h4>
  }
  
  return (
    //passando como função, ela será executada depois do click
    <div /*onClick={() => props.clickOnPlanet(props.name)}*/> 
      {title}
      <DescriptionWithLink description={props.description} link={props.link}/>
      <GrayImg img_url={props.img_url} gray={props.gray}/>
    </div>
  )
}

export default Planet;