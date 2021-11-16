import React from 'react';
import '../styles/components/IndividualItem.css';
import { AiOutlineEye } from "react-icons/ai";
import {AiOutlineUsergroupAdd} from "react-icons/ai";
 

const IndividualItem = (props) => {
    
    const  {props: {image, title, text}} = props
    return (
        <div className="Individual-item">
            <h2>{title}</h2>
            <img src={image.src} alt={image.alt} />
            <p>{text}</p>
            <div>
                <AiOutlineEye size='1.5em'/>
                <AiOutlineUsergroupAdd size='1.5em'/>
            </div>
        </div>
    )
}

export default IndividualItem