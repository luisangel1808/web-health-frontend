import React from 'react'
import ItemList from './ItemList'
import '../styles/components/List.css'

const List = ({data}) => {
const image={
    src:"https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg",
    alt:"img"
}
data=[{image:image,name:"Luis Angel Florez", score:24},
{image:image,name:"Luis Angel Florez", score:24},
{image:image,name:"Luis Angel Florez", score:24},
{image:image,name:"Luis Angel Florez", score:24}]
    return (
        <div className="List">
            <div className="List-header">Title</div>
            <ul>
                <div className="a2">
                {data.map((item,i)=>{

                    return <ItemList props={item} key={i}/>
                })}
                </div>
            </ul>
        </div>
    )
}

export default List
