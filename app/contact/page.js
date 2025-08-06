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
        <div className='container mx-auto px-4 mt-10'>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='contact_infoblock flex flex-col gap-y-3 w-full max-w-[500px]'>
                    <h3 className='title'>Свяжитесь с нами</h3>
                    <span className='mb-5'>Наши эксперты по элитной недвижимости готовы ответить на все ваши вопросы и помочь с выбором идеального объекта.</span>
                    <div className='flex gap-x-2'>
                        <Image src={mail} alt='mail ico' />
                        <span>info@manchini.ru</span>
                    </div>
                    <div className='flex gap-x-2'>
                        <Image src={home} alt='home ico' />
                        <span>Москва, ул. Тверская, 18. Бизнес-центр - Премиум</span>
                    </div>
                    <div className='flex gap-x-2'>
                        <Image src={phone} alt='phone ico' />
                        <span>+7 983 765 72 73</span>
                    </div>
                    <Image width={484} height={320} src={def} alt='def' className='rounded-lg' />
                </div>

                <CallbackForm />
            </div>
            <FAQ />
        </div>
    )
}
