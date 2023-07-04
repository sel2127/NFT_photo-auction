// import React from 'react'
// import { Photo } from '@mui/icons-material'
// import { useState } from 'react'
// import { Link} from 'react-router-dom'
// import '../styles/Contact.css'
// import '../styles/Upload.css'
// import axios from 'axios'

// function Upload() {
//     // const [image, setImage] = useState('')

//     // function handleImage(e) {
//     //     console.log(e.target.files)
//     //     setImage(e.target.files[0])
//     // }

//     // const [date, setDate] = useState();
//     // console.log("Date", date)

//     // const [image, setImage] = useState({
//     //     file: [],
//     // })

//     // const handleInputChange = (event) =>{
//     //     setImage({
//     //         ...image,
//     //         file:event.target.files[0],
//     //     })
//     // }
//     // const submit = async () => {
//     //     const formdata = new FormData()
//     //     formdata.append('avatar', image.file);

//     //     axios.post("http://localhost:8080/imageupload", formdata,{
//     //         headers: {"Content-Type": "multipart/form-data"}
//     //     })
//     // }

//   return (
//     <div>
//         <div className='title'>
//             <h1>Upload your NFT art here</h1>
//         </div>
//         <div className='contact'>
//             <div className='left'>
//                 <Photo id='photoIcon' />
//                 <input id='chooseFile' type='file' name='file'/>
//                 <button className='photoButton'>Submit</button>
//             </div>
//             <div className='right'>
//                 <form id='contact-form' method='POST'>
//                     <label htmlFor='name'>Photo Name</label>
//                     <input name='name' placeholder='Enter full name' type='text'/>                    
//                     <label htmlFor='description'>Description</label>
//                     <textarea rows="6" placeholder="Enter your photo description" name="description"></textarea>
//                     <label htmlFor='photographer'>Photographer</label>
//                     <input name='photographer' placeholder='Enter photographer name' type='text'/>
//                     <label htmlFor='price'>Floor Price</label>
//                     <input name='price' placeholder='Enter floor price' type='number'/>
//                     <label htmlFor='duration'>Auction Duration</label>
//                     <input name='duration' placeholder='Enter auction duration'/>
//                     <Link to="/successUpload">
//                         <button type='submit'>Submit</button>
//                     </Link>
//                 </form>
//             </div>
//         </div>      
//     </div>
//   )
// }

// export default Upload
