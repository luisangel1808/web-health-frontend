import React from 'react'

const ItemList = (props) => {
    const  {props: {image, name, score}} = props
    return (
        <li>
            <img src={image.src} alt={image.alt} />
            <span>{name}</span>
            <span>{score}</span>
        </li>
    )
}

export default ItemList
