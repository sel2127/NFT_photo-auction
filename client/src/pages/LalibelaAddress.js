import React, {useEffect} from 'react'
import { ArrowBack } from '@mui/icons-material';
import '../styles/Address.css'
import { Link } from 'react-router-dom';

function LalibelaAddress() {
    useEffect(() => {
        const iframeData = document.getElementById("iframe")
        const lat = 12.033218551865335
        const lon = 39.04372543469025
        iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    });
  return (
      <div>
        <Link to="/lalibela"><ArrowBack /></Link>
        <div>
          <h2>Lalibela</h2>
        </div>
        <div><iframe id='iframe' height="500px" width="100%"></iframe></div>
      </div>
  )
}

export default LalibelaAddress

