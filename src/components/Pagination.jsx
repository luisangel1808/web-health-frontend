import React from 'react'

const Pagination = () => {
    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <MdOutlineFirstPage enableBackground="white" color="gray" size="2.5em" onClick={()=>handleOffset(0)}/>
            <MdOutlineChevronLeft color="gray" size="2.5em" onClick={()=>handleOffset(offset-1)}/>
            {numbers.map(number=>{
                // TODO revisar if(number< offset -1 || number>offset +1)
                    return <div className={number-1 === offset? "number selected": "number"} key={number} onClick={()=>handleOffset(number-1)}> {number} </div>
            })}
            <MdOutlineChevronRight color="gray" size="2.5em" onClick={()=>{handleOffset(offset+1)}}/>
            <MdOutlineLastPage color="gray" size="2.5em" onClick={()=>handleOffset(pages -1)}/>
        </IconContext.Provider>
    )
}

export default Pagination
