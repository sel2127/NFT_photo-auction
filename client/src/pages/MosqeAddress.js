import React, {useEffect} from 'react'
import '../styles/Address.css'
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function MosqeAddress() {
    useEffect(() => {
        const iframeData = document.getElementById("iframe")
        const lat = 29.609353094262943
        const lon = 52.54860954603761
        iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    });
  return (
      <div>
        <Link to="/mosque"><ArrowBack /></Link>
        <div>
          <h2>Nasir Al-Mulk Mosque</h2>
        </div>
        <div><iframe id='iframe' height="500px" width="100%"></iframe></div>
      </div>
  )
}

export default MosqeAddress