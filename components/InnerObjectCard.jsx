'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MapPin, Home, Users, Building, Phone, MapIcon } from 'lucide-react';

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

    const getInfrastructureIcon = (type) => {
        switch (type) {
            case 'KINDERGARTEN':
                return '🏫';
            case 'MALL':
                return '🏬';
            case 'PARK':
                return '🌳';
            case 'SCHOOL':
                return '🎓';
            default:
                return '📍';
        }
    };

    return (
        <div className="py-16 bg-gradient-to-br from-[#1a2332] to-[#0f1419] text-white min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Основной контент */}
                <div className="flex flex-col lg:flex-row justify-between gap-12">

                    {/* Левая часть - информация */}
                    <div className="lg:max-w-[45%] space-y-8">

                        {/* Заголовок */}
                        <div className="flex items-start gap-4">

                            <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">{name}</h1>
                        </div>

                        {/* Карточка с основной информацией */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                            {[
                                [
                                    { icon: "📐", title: "Площадь", value: `${area} м²`, color: "blue" },
                                    { icon: <Users size={16} />, title: "Комнат", value: rooms, color: "purple" },
                                    { icon: <MapPin size={16} />, title: "Город", value: city, color: "green" }
                                ],
                                [
                                    { icon: "🏘️", title: "Район", value: district, color: "orange" },
                                    { icon: "🛣️", title: "Улица", value: street, color: "red" },
                                    { icon: <Building size={16} />, title: "Тип", value: realtyType[type] || type, color: "indigo" }
                                ]
                            ].map((column, colIndex) => (
                                <div key={colIndex} className="flex flex-col gap-4">
                                    {column.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-3 bg-gray-800/30 rounded-lg flex-1">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-${item.color}-500/20`}>
                                                <span className={`text-${item.color}-400 text-sm`}>{item.icon}</span>
                                            </div>
                                            <div>
                                                <span className='text-gray-400 text-sm'>{item.title}</span>
                                                <p className='text-white font-semibold'>{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>


                        {/* Инфраструктура */}
                        {infrastructures?.length > 0 && (
                            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-gray-700/30 p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-yellow-500/20 rounded-lg">
                                        <span className="text-yellow-400 text-lg">🏢</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">Инфраструктура</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {infrastructures.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                                            <span className="text-xl">{getInfrastructureIcon(item)}</span>
                                            <span className="text-gray-300">{infrastructureTranslations[item] || item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Правая часть - фотогалерея */}
                    <div className="lg:max-w-[50%] w-full space-y-6">
                        <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-gray-700/30 p-4">
                            <Swiper
                                modules={[Thumbs]}
                                thumbs={{ swiper: thumbsSwiper }}
                                slidesPerView={1}
                                className="mb-4 rounded-xl overflow-hidden"
                            >
                                {photos.map((photo) => (
                                    <SwiperSlide key={photo.id}>
                                        <img
                                            src={`/assets/image/objects/uploads/${photo.url}`}
                                            className="w-full h-96 object-cover"
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
                                className="thumbs-swiper"
                            >
                                {photos.map((photo) => (
                                    <SwiperSlide key={photo.id}>
                                        <img
                                            src={`/assets/image/objects/uploads/${photo.url}`}
                                            className="h-24 w-full object-cover cursor-pointer rounded-lg border-2 border-transparent hover:border-blue-400 transition-all duration-200"
                                            alt=""
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        {/* Кнопка заявки */}
                        <div className="flex justify-center w-full">
                            <Link href={'/contact'} className="w-full">
                                <button className="flex w-full items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105">
                                    <Phone size={20} />
                                    Оставить заявку
                                </button>
                            </Link>
                        </div>


                    </div>
                </div>

                {/* Разделитель */}
                <div className="my-16 border-t border-gray-700/30"></div>

                {/* Карта */}
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-gray-700/30 p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-red-500/20 rounded-lg">
                            <MapIcon size={20} className="text-red-400" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white">Расположение на карте</h2>
                    </div>

                    <div className="rounded-xl overflow-hidden">
                        {mounted && (
                            <MapComponent
                                key={`${latitude}-${longitude}-${name}`}
                                latitude={latitude}
                                longitude={longitude}
                                name={name}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}