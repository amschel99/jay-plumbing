import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="imagef">
        <img className='jaylogof' src="/images/logo.png" alt="company logo" />
      </div>
      {/* <div className="company"><h1 className="coName">Jay Plumbing and Irrigation</h1></div> */}
      <div className="footer__tag">
        <ul>
          <li><a target="blank" href="https://api.whatsapp.com/send?phone=%2B254724465755&data=AWArS3Uwsu-6UcElf_-NUdhRDXucuJSFyyhjCBT9fNU-jMc2gsvgeBMCYExPDM1rnatQBlEBXOErojbKBuL4D1IWW65wg4mHxbklHrnj4cF2Lw68uUTKO_8iCydsJxY32WNc2ggc7skvRX8obAHX8opZjhEkwvK6X-qpt_figkbaaZEBQJ87ehV-jf_myhbgYogfkIy3OU7i7hs1-4SE9QyF6GnKNgdt71W-na6mO_lmNvPP2EG8HKIr5AW4guHqX2kduOBwIshBtCWdnjI&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1goKgNfnXYbGWC6P2eASOQkDcMpnou2VMfUosPoH5xpKTSuEluzUo8cYM" className="footer_img"><img className="footer_image" src="https://img.icons8.com/material-outlined/256/whatsapp--v1.png" alt="whatsapp profile" /></a></li>
          <li><a href="https://www.facebook.com/people/JAY-plumbers-KENYA/100064218036074/" target='blank' className="footer_img"><img className="footer_image" src="https://img.icons8.com/material-rounded/256/facebook-f.png" alt="facebook profile" /></a></li>
          <li><a href="mailto:jayplumbingandirrigation@gmail.com" target="_blank" className="footer_img"><img className="footer_image" src="https://img.icons8.com/ios-filled/256/gmail.png" alt="email profile" /></a></li>
          <li><a href="" target="_blank" className="footer_img"><img className="footer_image" src="https://img.icons8.com/ios-filled/256/google-maps-new.png" alt="maps location" /></a></li>
        </ul>
        <div className="moredetails">
          <p>For more information, call <a className='call' href="tel:0724465755">0724465755</a>.</p>
          <a className="footer__copy" href="#">copyright &copy;</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer