import React from 'react'
import { Photo } from '@mui/icons-material'
import { useState } from 'react'
import { Link} from 'react-router-dom'
// import './styles/Contact.css'
// import './styles/Upload.css'
import axios from 'axios'

function ImageUpload() {
    const [file, setFile] = useState();
    
    const handleImage = (e) => {
        setFile(e.target.files[0])
    }
    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image', file);
        axios.post('http://localhost:8081/upload', formdata)
        .then(res => {
            if (res.data.Status === "Success") {
                console.log("Succeded");
            }
            else {
                console.log("Failed");
            }
        })
        .catch(err => console.log(err));
    }

    // const handleInfoUpload = () => {
    //     const formdata = new FormData();
    //     formdata.append('image', file);
    //     axios.post('http://localhost:8081/infoUpload', formdata)
    //     .then(res => {
    //         if (res.data.Status === "Success") {
    //             console.log("Succeded");
    //         }
    //         else {
    //             console.log("Failed");
    //         }
    //     })
    //     .catch(err => console.log(err));
    // }

  return (
    <div>
        <div className='title'>
            <h1>Upload your NFT art here</h1>
        </div>
        <div className='contact'>
            <form action='/submit' id='contact-form' method='POST'>
            {/* <div className='left'> */}
                <Photo id='photoIcon' />
                <input id='chooseFile' type='file' name='image'/>
                {/* <button className='photoButton' onClick={handleUpload}>Upload</button> */}
            {/* </div>
            <div className='right'> */}
                {/* <form id='contact-form' method='POST'> */}
                    <label htmlFor='name'>Photo Name</label>
                    <input name='name' placeholder='Enter full name' type='text'/>                    
                    <label htmlFor='description'>Description</label>
                    <input name='description' placeholder='Enter description' type='text'/>                    
                    {/* <textarea rows="6" placeholder="Enter your photo description" name="description"></textarea> */}
                    <label htmlFor='photographer'>Photographer</label>
                    <input name='photographer' placeholder='Enter photographer name' type='text'/>
                    <label htmlFor='price'>Floor Price</label>
                    <input name='price' placeholder='Enter floor price' type='number'/>
                    <label htmlFor='duration'>Auction Duration</label>
                    <input name='duration' type='date' placeholder='Enter auction duration'/>
                    {/* <Link to="/successUpload"> */}
                        <button type='submit' onClick={handleUpload}>Submit</button>
                    {/* </Link> */}
                {/* </form> */}
            {/* </div> */}
            </form>
        </div>      
    </div>
  )
}

export default ImageUpload
