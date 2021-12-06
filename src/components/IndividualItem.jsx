import React from 'react';
import '../styles/components/IndividualItem.css';
import { AiOutlineEye } from "react-icons/ai";
import {AiOutlineUsergroupAdd} from "react-icons/ai";
 

const IndividualItem = (props) => {
    
    const  {props: {name, lastName, email}} = props
    const image = {
        src: "https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
        alt: "img",
    }
    return (
        <div className="Individual-item">
            <h2>{`${name} ${lastName}`}</h2>
            <img src={image.src} alt={image.alt} />
            <p>{email}</p>
            <div>
                <AiOutlineEye size='1.5em'/>
                <AiOutlineUsergroupAdd size='1.5em'/>
            </div>
        </div>
    )
}

export default IndividualItem