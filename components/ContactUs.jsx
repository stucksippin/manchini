import Image from 'next/image'
import React from 'react'
import image from '@/public/assets/image/main_image.jpg'
export default function ContactUs() {
    return (
        <div className='section bg-[#f9f2e5]'>
            <div className='container flex justify-between mx-auto'>
                <div className='contact_info flex flex-col justify-between'>
                    <h3 className='title mb-3'>Contact The Kombong and Let's Build Together</h3>
                    <span className='mb-3'>Lorem cupidatat laborum occaecat et commodo excepteur. Enim nulla sit qui nulla in ad sit est aliqua dolor adipisicing cupidatat. Quis ipsum in Lorem ullamco ut quis. Aliquip mollit ex ex cillum mollit eiusmod. Tempor laborum consequat cupidatat ipsum quis. Enim aliquip deserunt quis officia occaecat. Nisi Lorem id officia do qui velit Lorem do.</span>
                    <span className='mb-3'>Quis ipsum in Lorem ullamco ut quis. Aliquip mollit ex ex cillum mollit eiusmod. Tempor laborum consequat cupidatat ipsum quis. Enim aliquip deserunt quis officia occaecat. Nisi Lorem id officia do qui velit Lorem do.</span>
                    <button className='button w-fit text-left cursor-pointer'>Contact Us →</button>
                </div>
                <div className='contact_image my-auto'>
                    <Image src={image} alt='contact us' />
                </div>

            </div>
        </div>
    )
}
