import React, {Fragment} from "react";
import './style.css';


const GrayImg = (props) => {
 return (
  <img className={props.gray ? 'grayImg' : 'color-img'} src={props.img_url}></img>
 )
}

export default GrayImg;