import React from 'react';
import '../styles/components/IndividualItem.css';
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
 

const IndividualVideo = (props) => {
    
    const  {props: {image, title, text, id}} = props
    return (
        <div className="Individual-item">
            <h2>{title}</h2>
            <img src={image.src} alt={image.alt} />
            <p>{text}</p>
            <div>
                <Link to={`/video/${id}`}>
                    <AiOutlineEye size='1.5em'/>
                </Link>
                <AiOutlineHeart size='1.5em'/>
            </div>
        </div>
    )
}

export default IndividualVideo