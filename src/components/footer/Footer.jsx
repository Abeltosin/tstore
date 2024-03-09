import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid overflow-hidden' style={{background: 'rgba(0, 150, 255, 0.5)', minHeight: 400}}>
      <div className="row d-flex justify-content-center" style={{padding: 30}}>
        <div className="col-sm-6 col-md-6 col-lg-3 w-sm-50">
            <h3>OTA-MART</h3>
            <p>Discover the unparalleled shopping experience awaiting you at Ota-Mart. With our vast array of handpicked products, exceptional customer service, and unbeatable prices, we're committed to redefining your online shopping journey. Join our community today and embark on a seamless voyage of convenience, quality, and savings.</p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 w-sm-50">
            <h3 className='ps-6'>About Us</h3>
            <ul className='list-group list-group-flush' style={{listStyle: 'none',}}>
                <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>Integrity</li>
                <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>Trust Worthy</li>
                <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>Quality</li>
                <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>Affordability</li>
                <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>Unique</li>
                <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>FAQ</li>
                <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>Terms & Conditions</li>
            </ul>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 w-sm-50">
            <h3 className='ps-2'>Customer Care</h3>
            <ul className='list-group list-group-flush' style={{listStyle: 'none',}}>
            <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>ota@help.hotline.com</li>
                <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>07036897888</li>
                <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>help@gmail.0ta</li>
            </ul>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 w-sm-50">
            <h3 className='ps-2'>Contact Us</h3>
            <ul className='list-group list-group-flush' style={{listStyle: 'none',}}>
            <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>07, Victory Estate, Isolo, LAgos, Nigeria</li>
                <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>Pgone: 07036897888</li>
                <li className='list-group-item border-0' style={{background: 'rgba(0, 150, 255, 0.001)'}}>Email:help@gmail.0ta</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
