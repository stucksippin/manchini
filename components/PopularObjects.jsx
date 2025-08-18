import React from 'react'
import image2 from '@/public/assets/popularObjects/2.jpg'
import image3 from '@/public/assets/popularObjects/3.jpg'
import image4 from '@/public/assets/popularObjects/4.jpg'
import image5 from '@/public/assets/popularObjects/5.jpg'
import image6 from '@/public/assets/popularObjects/6.jpg'

import Image from 'next/image'

export default function PopularObjects() {
    return (
        <div className=''>
            <div className='section container mx-auto  '>
                <div className='flex justify-between mb-[50px] items-center'>
                    <h2 className='title'>Популярные объекты</h2>
                    <button className='button'>Исследовать→</button>
                </div>

                <div className="container1" >
                    <div className="first"><Image src={image6} alt='popa' /></div>
                    <div className="second"><Image src={image2} alt='popa' /></div>
                </div>

                <div className="container2 mt-[50px]">
                    <div className="fourth"><Image src={image3} alt='popa' /></div>
                    <div className="five"><Image src={image4} alt='popa' /></div>
                    <div className="six"><Image src={image5} alt='popa' /></div>
                </div>
            </div >
        </div>
    )
} 
