import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

import './Footer.css'
export default function Footer() {
    return (
        <div className='footermain'>
            <div>
                <div className='inputextdiv'>
                    <p className='subscribetext'>Subscribe to our Newsletter</p>
                    <div className='inputdiv'>
                        <input type="text" placeholder='Enter Your Email' className='inputt' />
                        <button className='inputbutton'>Subscribe</button>
                        {/* <hr style={{width:"2px", color:"#2563EB", borderRadius:"10px"}}/> */}
                    </div>
                </div>
            </div>



            <div className='foter'>
                <div className='teto'>
                    <p className='letskeep'>Let's keep in touch!</p>
                    <p className='findus'>Find us on any of these platforms, we respond within 1-2 business days.</p>
                    <div className='cion'>
                        <FaFacebook style={{ height: "30px", width: "30px", margin: "0px 10px" }} />
                        <AiFillTwitterCircle style={{ height: "30px", width: "30px", margin: "0px 10px" }} />
                        <SiTiktok style={{ height: "30px", width: "30px", margin: "0px 10px" }} />
                        <FaLinkedin style={{ height: "30px", width: "30px", margin: "0px 10px" }} />
                        <FaSquareInstagram style={{ height: "30px", width: "30px", margin: "0px 10px" }} />
                    </div>
                </div>

                <div >
                    <p style={{fontSize:"25px", fontWeight:"600"}}>USEFUL LINKS</p>
                    <p className='footerptag'>About Us</p>
                    <p className='footerptag'>Verification</p>
                    <p className='footerptag'>Privacy Policy</p>
                    <p className='footerptag'>Become An Ambassador</p>
                </div>


                <div>
                    <p style={{fontSize:"25px", fontWeight:"600"}}>USEFUL LINKS</p>
                    <p className='footerptag'>SEO</p>
                    <p className='footerptag'>Amazon</p>
                    <p className='footerptag'>Spoken English</p>
                    <p className='footerptag'>Digital Marketing</p>
                    <p className='footerptag'>Web Development</p>
                    <p className='footerptag'>Android Development</p>
                </div>
            </div>
        </div>
    )
}
