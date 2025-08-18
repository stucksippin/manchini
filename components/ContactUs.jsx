import Image from 'next/image'
import React from 'react'
import image from '@/public/assets/contact_us.jpg'
export default function ContactUs() {
    return (
        <div className='section bg-[#121A1F] text-white'>
            <div className='container flex justify-between mx-auto'>
                <div className='contact_info flex flex-col justify-between'>
                    <h3 className='text-[36px] mb-3'>Manchini – Создадим ваше будущее вместе. Свяжитесь с нами</h3>
                    <span className='mb-3'>Наша команда профессионалов поможет вам найти идеальную недвижимость или выгодно продать свой объект. Мы работаем с элитными лотами, коммерческой недвижимостью и зарубежными проектами, предлагая индивидуальный подход и полное сопровождение сделки.</span>
                    <span className='mb-3'>Доверьтесь нашему опыту – и мы подберем для вас именно то, что соответствует вашим ожиданиям и статусу.</span>
                    <button className='button w-fit text-left cursor-pointer !bg-white !text-[#121A1F] '>Свяжитесь с нами →</button>
                </div>
                <div className='contact_image my-auto'>
                    <Image className='' src={image} alt='contact us' />
                </div>

            </div>
        </div>
    )
}
