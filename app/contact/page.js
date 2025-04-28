import CallbackForm from '@/components/CallbackForm'
import Image from 'next/image'
import React from 'react'
import home from '@/public/assets/image/icons/home.png'
import mail from '@/public/assets/image/icons/mail.png'
import phone from '@/public/assets/image/icons/phone.png'
import def from '@/public/assets/image/main_image.jpg'
import FAQ from '@/components/FAQ'

export default function ContactPage() {
    return (
        <div className='container  mx-auto'>
            <div className='flex justify-between '>
                <div className='contact_infoblock flex flex-col gap-y-3 w-[484px]'>
                    <h3 className='title'>Get in Touch</h3>
                    <span className='mb-5'>Ullamco ea minim nisi cillum est.Ad quis ipsum esse voluptate sint ullamco occaecat.Ullamco ea minim nisi cillum est.Ad quis ipsum esse voluptate sint ullamco occaecat.</span>
                    <div className='flex gap-x-2'>
                        <Image src={mail} alt='mail ico' />
                        <span>example@mail.ru</span>
                    </div>
                    <div className='flex gap-x-2'>
                        <Image src={home} alt='home ico' />
                        <div>
                            <span>2134 Mans St.</span>
                            <span>Rostov-on-Don</span>
                        </div>
                    </div>
                    <div className='flex gap-x-2'>
                        <Image src={phone} alt='phone ico' />
                        <span>+7 983 765 72 73</span>
                    </div>
                    <Image width={484} height={320} src={def} alt='def' />
                </div>

                <CallbackForm />

            </div>
            <FAQ />
        </div>
    )
}
