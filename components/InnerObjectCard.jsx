'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./MapComponent'), { ssr: false });

export default function InnerObjectCard({
    photos,
    name,
    area,
    rooms,
    city,
    district,
    street,
    latitude,
    longitude,
    type,
    infrastructures
}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    const infrastructureTranslations = {
        KINDERGARTEN: 'Детский сад',
        MALL: 'Торговый центр',
        PARK: 'Парк',
        SCHOOL: 'Школа',
    };

    const realtyType = {
        NEW_BUILDING: 'Новострой',
        SECONDARY: 'Вторичка',
        HOUSE: 'Дом',
        APARTMENT: 'Квартира',
    };

    return (
        <div className="p-4 container mx-auto">
            <div className="flex justify-between gap-x-8 gap-y-8">
                {/* Инфо слева */}
                <div className="max-w-1/2 ">
                    <h1 className="text-[30px] font-semibold  mb-[5%]">{name}</h1>
                    <span className='text-[28px]'>О квартире:</span>
                    <div className='flex items-start gap-x-14 mt-[15px]'>
                        <div className='space-y-2'>
                            <div className='flex gap-x-4'>
                                <span className='text-slate-500'>Площадь:</span>
                                <span>{area} м²</span>
                            </div>
                            <div className='flex gap-x-4'>
                                <span className='text-slate-500'>Комнат:</span>
                                <span>{rooms}</span>
                            </div>
                            <div className='flex gap-x-4'>
                                <span className='text-slate-500'>Город:</span>
                                <span>{city}</span>
                            </div>
                            <div className='flex gap-x-4'>
                                <span className='text-slate-500'>Район:</span>
                                <span>{district}</span>
                            </div>
                            <div className='flex gap-x-4'>
                                <span className='text-slate-500'>Улица:</span>
                                <span>{street}</span>
                            </div>
                            <div className='flex gap-x-4'>
                                <span className='text-slate-500'>Тип:</span>
                                <span>{realtyType[type] || type}</span>
                            </div>
                        </div>
                        {infrastructures?.length > 0 && (
                            <div className='space-y-2'>
                                <h2 className="text-slate-400">Инфраструктура:</h2>
                                <ul className="list-disc list-inside">
                                    {infrastructures.map((item, i) => (
                                        <li key={i}>{infrastructureTranslations[item] || item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <button className='button mt-5'>
                        <Link href={'/contact'}>Оставить заявку</Link>
                    </button>
                </div>

                {/* Фото справа */}
                <div className="max-w-1/2 w-full ">
                    <Swiper
                        modules={[Thumbs]}
                        thumbs={{ swiper: thumbsSwiper }}
                        slidesPerView={1}
                        className="mb-4"
                    >
                        {photos.map((photo) => (
                            <SwiperSlide key={photo.id}>
                                <img
                                    src={`/assets/image/objects/uploads/${photo.url}`}
                                    className="w-full  object-cover"
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        modules={[Thumbs]}
                        onSwiper={setThumbsSwiper}
                        watchSlidesProgress
                        spaceBetween={10}
                        slidesPerView={3}
                    >
                        {photos.map((photo) => (
                            <SwiperSlide key={photo.id}>
                                <img
                                    src={`/assets/image/objects/uploads/${photo.url}`}
                                    className="h-32 object-cover cursor-pointer"
                                    alt=""
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <hr className='my-[5%]' />
            {/* Карта */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2">Расположение на карте:</h2>
                {mounted && (
                    <MapComponent
                        key={`${latitude}-${longitude}-${name}`} // <-- ключ, чтобы сбросить компонент при изменении
                        latitude={latitude}
                        longitude={longitude}
                        name={name}
                    />
                )}

            </div>
        </div>
    );
}
