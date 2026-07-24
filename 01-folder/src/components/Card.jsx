import React from 'react'
import {Bookmark}from 'lucide-react'
const Card = (props) => {
  return (
    <div>
      <div class="card">
    
    <div class="card-top">
        <div class="logo">
          <img src={props.brandLogo}></img>
        </div>
        <div class="bookmark"><Bookmark /></div>
    </div>

    <div class="card-body">
        <div class="company-name">{props.companyName}</div>
        <div class="date-posted">{props.datePosted}</div>

        <div class="job-title">{props.post}</div>

        <div class="tags">
            <div class="tag">{props.tag1}</div>
            <div class="tag">{props.tag2}</div>
        </div>

        <div class="salary">{props.pay}</div>
        <div class="location">{props.location}</div>
    </div>

</div>
    </div>
  )
}

export default Card
