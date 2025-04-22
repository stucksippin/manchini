import React from 'react'
import image from '@/public/assets/image/main_image.jpg'
import Image from 'next/image'

export default function PopularObjects() {
    return (
        <div className=''>
            <div className='section container mx-auto '>
                <div className='flex justify-between mb-[50px]'>
                    <h2 className='title'>Популярные объекты</h2>
                    <button className='button'>Explore more →</button>
                </div>

                <div className="container1" >
                    <div className="first"><Image src={image} alt='popa' /></div>
                    <div className="second"><Image src={image} alt='popa' /></div>
                </div>

                <div className="container2 mt-[50px]">
                    <div className="fourth"><Image src={image} alt='popa' /></div>
                    <div className="five"><Image src={image} alt='popa' /></div>
                    <div className="six"><Image src={image} alt='popa' /></div>
                </div>
            </div >
        </div>
    )
} 
