
import React from 'react'

export default function ObjectCard({ id, image, name, price, city, area, rooms, type, district, street }) {

    console.log(image);
    const editPrice = String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');
    return (
        <div className="flex flex-col w-[300px] h-[320px]   bg-[#f9f2e5] rounded-lg p-2">
            <img
                className='rounded-lg'
                src={image}
                width={300}
                height={300}
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
