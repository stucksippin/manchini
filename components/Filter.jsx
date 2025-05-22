'use client'

import { useState, useEffect } from 'react'
import { Checkbox, InputNumber, Select, Slider } from 'antd'
import { useRouter } from 'next/navigation'

const citiesOptions = [
    { value: 'Ростов', label: 'Ростов-на-Дону' },
    { value: 'Москва', label: 'Москва' },
    { value: 'Питер', label: 'Санкт-Петербург' },
];

export default function Filter({ searchParams, limits }) {
    const router = useRouter()
    const [priceMin, setPriceMin] = useState(limits._min.price || 0)
    const [priceMax, setPriceMax] = useState(limits._max.price || 10000000)
    const [areaMin, setAreaMin] = useState(limits._min.area || 0)
    const [areaMax, setAreaMax] = useState(limits._max.area || 1000)
    const [rooms, setRooms] = useState(searchParams.rooms || '')
    const [type, setType] = useState(searchParams.type || '')
    const [city, setCity] = useState(searchParams.city || '')

    useEffect(() => {
        if (searchParams.priceMin) setPriceMin(Number(searchParams.priceMin));
        if (searchParams.priceMax) setPriceMax(Number(searchParams.priceMax));
        if (searchParams.areaMin) setAreaMin(Number(searchParams.areaMin));
        if (searchParams.areaMax) setAreaMax(Number(searchParams.areaMax));
    }, [searchParams])

    function applyFilters() {
        const params = new URLSearchParams()

        if (priceMin) params.set('priceMin', String(priceMin))
        if (priceMax) params.set('priceMax', String(priceMax))
        if (areaMin) params.set('areaMin', String(areaMin))
        if (areaMax) params.set('areaMax', String(areaMax))
        if (rooms) params.set('rooms', rooms)
        if (type) params.set('type', type)
        if (city) params.set('city', city)

        router.push(`?${params.toString()}`, { scroll: false })
    }

    function resetFilters() {
        setPriceMin(limits._min.price || 0)
        setPriceMax(limits._max.price || 10000000)
        setAreaMin(limits._min.area || 0)
        setAreaMax(limits._max.area || 1000)
        setRooms('')
        setType('')
        setCity('')

        router.push("/catalog")
    }

    return (
        <div className='filter w-full max-w-[350px] max-h-[690px] mx-auto bg-[#f9f2e5] p-5 rounded-lg'>
            <div className='filter_block'>
                <span className='font-semibold'>Цена</span>
                <Slider
                    className='w-[300px]'
                    range={{ draggableTrack: true }}
                    min={limits._min.price}
                    max={limits._max.price}
                    value={[priceMin, priceMax]}
                    onChange={([min, max]) => {
                        setPriceMin(min)
                        setPriceMax(max)
                    }}
                />
                <div className="flex items-center my-2">
                    <span className='mr-2'>от</span>
                    <InputNumber
                        formatter={(value) => `${value}`.replace(',', '.')}
                        parser={(value) => parseFloat(value.replace(',', '.'))}
                        min={limits._min.price}
                        max={priceMax}
                        value={priceMin}
                        onChange={(value) => setPriceMin(value)}
                    />
                    <span className='mr-2 ml-2'>до</span>
                    <InputNumber
                        formatter={(value) => `${value}`.replace(',', '.')}
                        parser={(value) => parseFloat(value.replace(',', '.'))}
                        min={priceMin}
                        max={limits._max.price}
                        value={priceMax}
                        onChange={(value) => setPriceMax(value)}
                    />
                </div>
            </div>


            <div className='filter_block'>
                <span className='font-semibold'>Количество комнат</span>
                <Checkbox.Group
                    className="flex flex-col my-2"
                    value={rooms ? rooms.split(',') : []}
                    onChange={(values) => setRooms(values.join(','))}
                >
                    <Checkbox value="1">1 комната</Checkbox>
                    <Checkbox value="2">2 комнаты</Checkbox>
                    <Checkbox value="3">3 комнаты</Checkbox>
                    <Checkbox value="4">4 комнаты</Checkbox>
                    <Checkbox value="5">5 комнат и больше</Checkbox>
                </Checkbox.Group>
            </div>


            <div className='filter_block'>
                <span className='font-semibold'>Тип жилья</span>
                <Checkbox.Group
                    className="flex flex-col my-2"
                    value={type ? type.split(',') : []}
                    onChange={(values) => setType(values.join(','))}
                >
                    <Checkbox value="NEW_BUILDING">Новостройка</Checkbox>
                    <Checkbox value="SECONDARY">Вторичка</Checkbox>
                    <Checkbox value="APARTMENT">Аппартаменты</Checkbox>
                    <Checkbox value="HOUSE">Дом</Checkbox>
                </Checkbox.Group>
            </div>


            <div className='filter_block'>
                <span className='font-semibold'>Город</span>
                <Select
                    className="w-full my-2"
                    showSearch
                    value={city}
                    placeholder="Выберите город"
                    options={citiesOptions}
                    onChange={setCity}
                />
            </div>

            <div className="flex gap-4 mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={applyFilters}>
                    Применить
                </button>
                <button className="px-4 py-2 bg-gray-300 rounded" onClick={resetFilters}>
                    Сбросить
                </button>
            </div>
        </div>
    )
}
