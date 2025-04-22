import React from 'react'
import Image from 'next/image'
import picbennefit from '@/public/assets/image/main_image.jpg'

export default function BenefitsBlock() {
    const dataBenefits = [
        {
            id: 1,
            image: picbennefit,  // Removed the object wrapper
            title: 'Мы крутые ',
            discription: 'Do dolor pariatur occaecat adipisicing labore est ipsum. Esse fugiat culpa laborum fugiat cupidatat nostrud sit magna commodo. Commodo labore officia laborum velit ',
        },
        {
            id: 2,
            image: picbennefit,  // Removed the object wrapper
            title: 'Мы крутые ',
            discription: 'Do dolor pariatur occaecat adipisicing labore est ipsum. Esse fugiat culpa laborum fugiat cupidatat nostrud sit magna commodo. Commodo labore officia laborum velit ',
        },
        {
            id: 3,
            image: picbennefit,  // Removed the object wrapper
            title: 'Мы крутые ',
            discription: 'Do dolor pariatur occaecat adipisicing labore est ipsum. Esse fugiat culpa laborum fugiat cupidatat nostrud sit magna commodo. Commodo labore officia laborum velit ',
        },
    ]
    const dataRating = [
        {
            id: 1,
            number: '10+',
            title: 'Mollit veniam excepteur id eu labore labore occaecat ipsum anim. Elit aliqua voluptate laborum est '
        },
        {
            id: 2,
            number: '4.8/5',
            title: 'Mollit veniam excepteur id eu labore labore occaecat ipsum anim. Elit aliqua voluptate laborum est '
        },
        {
            id: 3,
            number: '20+',
            title: 'Mollit veniam excepteur id eu labore labore occaecat ipsum anim. Elit aliqua voluptate laborum est '
        },
        {
            id: 4,
            number: '1.3k',
            title: 'Mollit veniam excepteur id eu labore labore occaecat ipsum anim. Elit aliqua voluptate laborum est '
        },
    ]
    return (
        <div className='section bg-[#f9f2e5]'>
            <div className='container mx-auto'>
                <div className='flex flex-col text-center p-10'>
                    <span>⌂ Преимущества сервиса</span>
                    <h2 className='title'>Discover The Benefits</h2>
                    <span className='subtitle'>Dolore anim exercitation magna cillum ea ex aute ea officia ea.</span>
                </div>

                {/* 1 */}
                <div className='flex mx-auto justify-between'>
                    {dataBenefits.map((benefit) => (
                        <div className='flex flex-col w-[367px]' key={benefit.id}>
                            <Image
                                width={367}
                                height={376}
                                src={benefit.image}
                                alt='benefits'
                            />
                            <h2 className='mt-3 text-xl'>{benefit.title}</h2>
                            <span className='mt-3'>{benefit.discription}</span>
                            <button className='text-left mt-3'>Learn More →</button>
                        </div>
                    ))}
                </div>

                <hr className='my-10' />

                {/* 2 */}
                <div className='flex justify-between mt-10 text-center '>
                    {
                        dataRating.map((item) => (
                            <div key={item.id} className='flex flex-col justify-center w-[270px] h-[270px] bg-[#d0b9a7] p-5'>
                                <span className='text-5xl mb-4 '>{item.number}</span>
                                <span>{item.title}</span>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}