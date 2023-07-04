import React from 'react'
import { Instagram } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { YouTube } from '@mui/icons-material'
import '../styles/Footer.css'

function footer() {
  return (
    <div className='footer'>
      <div className='media'>
        <Instagram />
        <Facebook />
        <Twitter />
        <YouTube />
      </div>
      <p> &copy; 2023 pixelnftart</p>
    </div>
  )
}

export default footer
