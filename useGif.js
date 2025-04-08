import React from 'react'
import tag from '../components/Tag';
import { useState,useEffect } from 'react';
import axios from 'axios';

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
const Randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const Tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


const useGif = (tag) => {
    
    const[gif, setgif] = useState("");
    const[loading,setloading]=useState('false');
    
  
    async function fetchdata(tag){
      setloading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const {data} = await axios.get(tag?Tagurl:Randomurl);
      const  imagesource = data.data.images.downsized_large.url;
      setgif(imagesource);
      setloading(false);
    }
  
  
   useEffect (()=>{
    fetchdata();
   },[])

   return {gif,loading,fetchdata};
  
   
}

export default useGif

