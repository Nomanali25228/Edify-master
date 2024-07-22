import React from 'react'
import { LiaGiftSolid } from "react-icons/lia";
import './Browser.css'
import Cards from './cards/Cards';
import development from "../../assest/image/Development.png"
import datascience from "../../assest/image/Data Science.png"
import amazon from "../../assest/image/Amazon.png"
import artdesigner from "../../assest/image/Art & Design.png"
import Marketing from "../../assest/image/Digital Marketing.png"
import Freelancing from "../../assest/image/Freelancing.png"
export default function  Browser(props) {
    return (
        <>
            <div className='main1 '>
                <div className='mainn1'>

                    <div>
                        <p className='lineoran'></p>
                        <p className='giftarrow'><LiaGiftSolid /></p>
                        <p className='lineoran'></p>

                    </div>
                    <div className='papulardiv'>
                        <p className='browser'>Browse Your Future</p>
                        <p ><span className='popular'>Popular</span> <br />
                            <span className='courselearn'>Courses to Learn</span>
                        </p>
                    </div>
                </div>

                <div class="logoss">
                <div class="logos-slide">
                <div className='cardmaindiv'>
                <Cards props image={Marketing} name={"Digital Marketing"} course={"5 Course"}/>
                <Cards props image={amazon} name={"Amazon"} course={"1 Course"}/>
                <Cards props image={Freelancing} name={"Freelancing"} course={"3 Course"}/>
                <Cards props image={development} name={"Development"} course={"8 Course"}/>
                <Cards props image={datascience} name={"Data Science"} course={"1 Course"}/>
                <Cards props image={artdesigner} name={"Art & Designer"} course={"4 Course"}/>
                </div>
                </div>

                <div class="logos-slide">
                <div className='cardmaindiv'>
                <Cards props image={Marketing} name={"Digital Marketing"} course={"5 Course"}/>
                <Cards props image={amazon} name={"Amazon"} course={"1 Course"}/>
                <Cards props image={Freelancing} name={"Freelancing"} course={"3 Course"}/>
                <Cards props image={development} name={"Development"} course={"8 Course"}/>
                <Cards props image={datascience} name={"Data Science"} course={"1 Course"}/>
                <Cards props image={artdesigner} name={"Art & Designer"} course={"4 Course"}/>
                </div>
                </div>
            </div>
                
            </div>
        </>
    )
}
