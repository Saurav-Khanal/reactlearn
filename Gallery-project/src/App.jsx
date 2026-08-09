import React, { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import axios from "axios";
import { User } from "lucide-react";
const App =  () => {
  const [UserData, setUserData] = useState('');
  const getData=async ()=>{
    const response=await axios('https://picsum.photos/v2/list?page=4&limit=20');
    setUserData(response.data);
  }

  useEffect(function(){
    getData()
  },[])

  let printUserData=<h3 className="text-gray-400 text-xl">No user avaiable</h3>
    if(UserData.length>0){
      printUserData=UserData.map(function(data,idx){
        return<div key={idx}>
        <a href={data.url} target="_blank">
          <div className="h-40 w-44 overflow-hidden bg-white rounded-xl ">
          <img className="h-full w-full object-cover" src={data.download_url}/>
        </div>
        <h2 className="font-bold text-lg">{data.author}</h2>
        </a>
        </div>
      })
    }
  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
    
      <div className="flex flex-wrap gap-4">
    {printUserData}
      </div>
    </div>
  );
};

export default App;
