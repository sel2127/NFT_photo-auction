import React from 'react'
import { Photo } from '@mui/icons-material'
import { useState } from 'react'
import axios from 'axios'


function ImageUpload() {
    const [imageFile, setImageFile] = useState()
    const [imageData, setImageData] = useState({
        photoname:"",
        description:"",
        photographer:"",
        floorprice:"",
        auctiondate:'',
        imagePath:""

    })
   

    const inputChange = (e)=>{
        const {name, value} = e.target
        setImageData((prev)=>{
            return {...prev, [name]:value}
        })
    }
    const handleImageFile = (e)=>{
        // to filter the extension of the file and check if it is supported //
        const fileName = e.target.files[0].name
        const indexOfDot = fileName.lastIndexOf(".")
        const extension = fileName.substring(indexOfDot)
        const acceptedExtensions = ['.png', '.jpg', '.jpeg']

        if(!acceptedExtensions.includes(extension)){
            alert("Unsupperted Extension")
            return 
        }

       setImageFile(e.target.files[0])

    }
    const  handleSubmit = async(event) =>{
        event.preventDefault();
        if(!imageData.photoname || !imageData.description|| !imageData.photographer|| !imageData.floorprice|| !imageData.auctiondate ){
            alert("Fill all The necessary filds!")
            return
        }
        const imageFilePath = new FormData()
        imageFilePath.append('imageFilePath',imageFile)

        await axios.post('http://localhost:5000/uploadImage',imageFilePath )
            .then((res)=>{
              axios.post('http://localhost:5000/upload',{...imageData, imagePath:res.data.filePath})
            })
            .catch((error)=>{
                console.log(error);
            })
    }
 console.log(imageData);
 console.log(imageFile);
  return (
    <div>
        <div className='title'>
            <h1>Upload your NFT art here</h1>
        </div>
        <div className='contact'>
            <form onSubmit={handleSubmit} id='contact-form'>
          
                <Photo id='photoIcon' />
                <input id='chooseFile' type='file' name='image' onChange={handleImageFile}/>
                
                    <label htmlFor='name'>Photo Name</label>
                    <input name='photoname' placeholder='Enter full name' type='text' value={imageData.photoname} onChange={inputChange}/>                    
                    <label htmlFor='description'>Description</label>
                    <input name='description' placeholder='Enter description' type='text' value={imageData.description} onChange={inputChange}/>               
                    <label htmlFor='photographer'>Photographer</label>
                    <input name='photographer' placeholder='Enter photographer name' type='text' value={imageData.photographer} onChange={inputChange}/>
                    <label htmlFor='price'>Floor Price</label>
                    <input name='floorprice' placeholder='Enter floor price' type='number' value={imageData.floorprice} onChange={inputChange}/>
                    <label htmlFor='duration'>Auction Duration</label>
                    <input name='auctiondate' type='date' placeholder='Enter auction duration' value={imageData.auctiondate} onChange={inputChange}/>
                   
                        <button type='submit'>Submit</button>
                   
            </form>
        </div>      
    </div>
  );
}

export default ImageUpload
