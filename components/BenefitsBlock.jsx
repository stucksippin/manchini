import React from 'react'
import Image from 'next/image'
import image1 from '@/public/assets/benefits/1.jpg'
import image2 from '@/public/assets/benefits/2.jpg'
import image3 from '@/public/assets/benefits/3.jpg'

export default function BenefitsBlock() {
    const dataBenefits = [
        {
            id: 1,
            image: image1,
            title: 'Экспертиза и надежность',
            discription: 'Наша команда — это опытные риелторы и юристы, которые помогут вам безопасно и выгодно купить или продать недвижимость. Мы берем на себя все сложности сделки, чтобы вы получили идеальный результат без лишних хлопот.',
        },
        {
            id: 2,
            image: image2,
            title: 'Доступ к закрытым лотам',
            discription: 'Работая с Manchini, вы получаете доступ к лучшим объектам, которых нет в открытой продаже. Мы сотрудничаем с застройщиками и частными владельцами, предлагая вам уникальные варианты элитной недвижимости.',
        },
        {
            id: 3,
            image: image3,
            title: 'Персональный подход',
            discription: 'Мы не просто подбираем квартиры и дома — мы учитываем ваш образ жизни, вкусы и планы. Наша цель — найти для вас не просто жилье, а место, где будет комфортно именно вам.',
        },
    ]
    const dataRating = [
        {
            id: 1,
            number: '10+',
            title: 'Лет на рынке элитной недвижимости. Мы работаем с 2013 года и знаем все тонкости сделок с премиальными объектами. '
        },
        {
            id: 2,
            number: '4.8/5',
            title: 'Средняя оценка наших клиентов. Нас рекомендуют за профессионализм, честность и внимание к деталям. '
        },
        {
            id: 3,
            number: '20+',
            title: 'Объектов продано в этом году. Помогаем клиентам находить идеальную недвижимость без переплат и рисков.'
        },
        {
            id: 4,
            number: '1.3k',
            title: 'Довольных клиентов по всему миру. Наши покупатели и продавцы — это состоятельные люди, которые ценят надежность.'
        },
    ]
    return (
        <div className='section bg-[#f9f2e5]'>
            <div className='container mx-auto'>
                <div className='flex flex-col text-center p-10'>
                    <span>⌂ Преимущества сервиса</span>
                    <h2 className='title'>Открой для себя преимущества</h2>
                </div>

                {/* 1 */}
                <div className='flex mx-auto justify-between gap-x-10'>
                    {dataBenefits.map((benefit) => (
                        <div
                            className='flex flex-col w-[367px] min-h-[550px]' // Добавлена минимальная высота
                            key={benefit.id}
                        >
                            <div className='h-[376px] overflow-hidden'> {/* Фиксированная высота для изображения */}
                                <Image
                                    width={367}
                                    height={376}
                                    src={benefit.image}
                                    alt='benefits'
                                    className='w-full h-full object-cover' // Чтобы изображение заполняло контейнер
                                />
                            </div>
                            <h2 className='mt-3 text-xl'>{benefit.title}</h2>
                            <p className='mt-3 flex-grow'>{benefit.discription}</p> {/* flex-grow для растягивания */}

                        </div>
                    ))}
                </div>

                <hr className='my-10' />

                {/* 2 */}
                <div className='flex justify-between mt-10 text-center gap-x-10'>
                    {
                        dataRating.map((item) => (
                            <div key={item.id} className='flex flex-col justify-center w-[270px] h-[270px] bg-[#b7a38a] p-5'>
                                <span className='text-5xl mb-4  '>{item.number}</span>
                                <span>{item.title}</span>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}