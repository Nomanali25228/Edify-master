import React from 'react'
import './Header.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import img1 from "../../assest/image/1.png"
import img2 from "../../assest/image/2.png"
import img3 from "../../assest/image/3.png"
import img4 from "../../assest/image/4.png"
import img5 from "../../assest/image/5.png"
import img6 from "../../assest/image/6.png"
export default function Header() {
    return (
        <>
            <div className='main1 '>
                <div className='mainn1'>

                    <div>
                        <div className='lineings'></div>
                        <p className='arrow'><IoIosArrowBack /><IoIosArrowForward /></p>
                        <div className='lineings'></div>
                    </div>
                    <div className='skilldiv'>
                        <p className='skill'>Master Your Skills.</p>
                        <p className='skill1'>Embark on your professional
                            journey with industry-leading experts by enrolling in our distinguished IT programs.
                        </p>
                    </div>
                </div>
                <div className='inputdivv'>
                    <input type="text" placeholder='Course' className='courseinput' />
                    <button className='searchbutton'>Search</button>
                </div>
            </div>
            <div className='flexing'>

                <div className='boxForpart'>
                    <p className='ptagesss'>Partnerships</p>
                </div>

                <div class="logos">
                    <div class="logos-slide">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <img src={img4} />
                        <img src={img5} />
                        <img src={img6} />
                    </div>

                    <div class="logos-slide">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <img src={img4} />
                        <img src={img5} />
                        <img src={img6} />
                    </div>
                </div>
            </div>

        </>
    )
}
