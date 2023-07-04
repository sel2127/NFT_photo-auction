import React, { useState, useEffect } from 'react'
import { ImageList } from '../helpers/ImageList'
import ImageItem from '../components/ImageItem'
import '../styles/Image.css';
import axios from 'axios';

function Explore() {

  // const [image, setImage] = useState([]);

  // const fetchData = async() => {
  //   const {data} = await axios.get("http://localhost:8081/fetch")
  //   console.log(data.results);
  //   setImage(data);
  // }
  // useEffect(() => {
  //   fetchData();
  // }, [])
  
  const [allImageFiles, setAllImageFiles] = useState([])
  const getAllImage = async()=>{
    
    await axios.get("http://localhost:5000/fetchImageFiles")
    .then((res)=>{
      setAllImageFiles(res.data.result)
     })
    .catch((error)=>console.log(error))
  }

  
  useEffect(()=>{
    getAllImage()
  },[])
if(!allImageFiles){
  return <h1>Loading...</h1>
}
  return (
    <div className='image'>
      <h1 className='imageTitle'>Arts</h1>
      <div className='imageList'>
        {
        allImageFiles.map((imageItem, key) => {           
        return (
            <ImageItem 
                key={key}
                image={imageItem.image} 
                name={imageItem.photoname} 
                index={imageItem.id}
                // price={imageItem.price} 
                // description={imageItem.description}
                />
          );
      })}
      </div>    
        <button> Reload </button>
      </div>
      
  );
}

export default Explore
