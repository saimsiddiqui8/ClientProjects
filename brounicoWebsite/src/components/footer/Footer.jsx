import React from 'react'
import "./style.css"

const Footer = () => {
  return (
    <>
    <div id='footer' className='py-5'>
        <section className='container w-75 text-end' id='footerWidth'>
        <p className='footerPara'>Brunico Communications Ltd. Site copyright © 1986-2023</p>
        <p className='footerPara'>title, tagline and logo of Brunico and all of its brands are trademarks of, and the events are produced Inc.</p>
        <p className='fw-bold footerPara' id="footerLink">Privacy Policy  |  Accessibility  |  Acknowledgements</p>
    </section>
    </div>
    
    </>
  )
}

export default Footer