import React from 'react'
import { useParams } from 'react-router-dom';

const Coursedetail = () => {
    const params=useParams();
  return (
    <div>
      <h1>{params.courseID}Course detail page</h1>      
    </div>
  )
}

export default Coursedetail;
