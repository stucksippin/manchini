
import React from 'react'

export default function ObjectCard({ id, image, name, price, city, area, rooms, type, district, street }) {

    const editPrice = String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');
    return (
        <div className="flex flex-col w-full bg-[#f9f2e5] rounded-lg p-2 h-full">
            <img
                className="rounded-sm w-full h-[180px] object-cover"
                src={image}
                alt="Фото объекта"
                onError={(e) => { e.currentTarget.src = '/image/realty-placeholder.webp'; }}
            />

            <div className='flex flex-col '>
                <span className='font-semibold'>{name}</span>
                <span className='font-semibold'>{area} кв.м²</span>
                <span className='text-right'>Город: {city}</span>
                <span className='text-right'>{editPrice} ₽</span>
            </div>

        </div>
    );
}
