import React from 'react'
import helpImage from '../assets/help.png'
import '../styles/Help.css'

function Help() {
  return (
    <div>
        <div className='upLeft'>
            <h3>How to sell my NFT?</h3>
            <ul>
                <li>as soon as you enter our site hit the upload button at the top right corner.</li>
                <li>after hitting enter, you should upload your image from your device and fill all the necessary information needed</li>
                <li>finally, submit your form and your image is uploaded</li>
            </ul>
        </div>
        <div className='middle' style={{ backgroundImage:`url(${helpImage})` }}></div>
        <div className='bottomRight'>
            <h3>How to make offer for an NFT?</h3>
            <ul>
                <li>as soon as you enter our site, there are a wide range of images that you can choose and buy.</li>
                <li> Click the image you want to buy and click the make offer button </li>
                <li>then choose which way you want to make your payment with (crypto or credit card)</li>
                <li>Finally, click complete purchase and your transaction is completed.</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Help
