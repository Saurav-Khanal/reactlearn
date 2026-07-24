import React from 'react'
import Card from './components/Card';

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
    companyName: "Apple",
    datePosted: "1 day ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netflix/netflix-original.svg",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    companyName: "LinkedIn",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
    companyName: "X (Twitter)",
    datePosted: "2 days ago",
    post: "UI Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/uber/uber-original.svg",
    companyName: "Uber",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    companyName: "Slack",
    datePosted: "5 days ago",
    post: "React Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$56/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg",
    companyName: "Spotify",
    datePosted: "2 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$44/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    companyName: "Oracle",
    datePosted: "4 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
    companyName: "Salesforce",
    datePosted: "1 day ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg",
    companyName: "Adobe",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$57/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intel/intel-original.svg",
    companyName: "Intel",
    datePosted: "6 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$46/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    companyName: "GitHub",
    datePosted: "2 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$54/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    companyName: "Docker",
    datePosted: "1 week ago",
    post: "DevOps Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg",
    companyName: "JetBrains",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$53/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg",
    companyName: "Red Hat",
    datePosted: "3 days ago",
    post: "Linux Engineer",
    tag1: "Hybrid",
    tag2: "Senior Level",
    pay: "$62/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
    companyName: "Shopify",
    datePosted: "1 day ago",
    post: "Frontend Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Remote"
  }
];
  return (
    <div>
      <div class="parent">
      {jobOpenings.map(function(ele,ind){
       return <Card brandLogo={ele.brandLogo} companyName={ele.companyName} datePosted={ele.datePosted} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location} />

      })}
    </div>
    </div>
  )
}

export default App
