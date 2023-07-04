import React from 'react'
import aboutImage from '../assets/about.jpeg'
import { Developer } from '../helpers/Developers'
import ImageItem from '../components/ImageItem'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${aboutImage})` }}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>Welcome to our non-fungible token website! We are a team of passionate individuals who believe in the transformative power
             of blockchain technology and its ability to revolutionize the way we create, share, and exchange value. Our mission is 
             to provide a user-friendly platform for artists, creators, and collectors to buy, sell, and trade unique and valuable digital 
             assets using non-fungible tokens. We believe that non-fungible tokens have the potential to unlock new opportunities for creators 
             to monetize their work and for collectors to own and trade unique digital assets. Our team is dedicated to providing a secure, 
             transparent, and efficient marketplace for non-fungible tokens, and we are committed to supporting the growth and adoption of this 
             exciting new technology. Thank you for joining us on this journey!</p>
                    
      </div>
      <div className='image'>
            <div className='imageList'>
                {Developer.map((imageItem, key) => {
                    return (
                        <ImageItem 
                            key={key}
                            image={imageItem.image} 
                            name={imageItem.name}
                            />
                            );
                })}
            </div>
        </div>
    </div>
  )
}

export default About
