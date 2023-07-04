import React from 'react'
import '../styles/SuccessUpload.css'
import { Link} from 'react-router-dom'


function SuccessUpload() {
  return (
    <div className='successUpload'>
      <h2>You have successfully uploaded your image</h2>
      <Link to="/">
        <button>Go back Home</button>
    </Link>     
      
    </div>
  )
}

export default SuccessUpload;
