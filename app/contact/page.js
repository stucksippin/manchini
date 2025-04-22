import CallbackForm from '@/components/CallbackForm'
import Image from 'next/image'
import React from 'react'

export default function ContactPage() {
    return (
        <div className=''>
            <div className='container mx-auto flex justify-between'>
                <div className='flex flex-col'>
                    <h3 className='title'>Get in Touch</h3>
                    <span>Ullamco ea minim nisi cillum est.Ad quis ipsum esse voluptate sint ullamco occaecat.</span>
                    <div>
                        <Image />
                        <span>example@mail.ru</span>
                    </div>
                    <div>
                        <Image />
                        <div>
                            <span>2134 Mans St.</span>
                            <span>Rostov-on-Don</span>
                        </div>
                    </div>
                    <div>
                        <Image />
                        <span>+7 983 765 72 73</span>
                    </div>
                </div>

                <CallbackForm />
            </div>
        </div>
    )
}
