import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 overflow-x-auto p-6 flex gap-10 flex-nowrap' >
       {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>;
       })}
    </div>
  )
}

export default RightContent
