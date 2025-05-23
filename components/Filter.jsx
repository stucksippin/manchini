'use client'

import { useState, useEffect } from 'react'
import { Checkbox, InputNumber, Select, Slider } from 'antd'
import { useRouter } from 'next/navigation'

const citiesOptions = [
    { value: 'Ростов', label: 'Ростов-на-Дону' },
    { value: 'Москва', label: 'Москва' },
    { value: 'Питер', label: 'Санкт-Петербург' },
];

export default function Filter({ searchParams }) {
    const router = useRouter()
    const [priceMin, setPriceMin] = useState(0)
    const [priceMax, setPriceMax] = useState(10000000)

    const [rooms, setRooms] = useState(searchParams.rooms || '')
    const [type, setType] = useState(searchParams.type || '')
    const [city, setCity] = useState(searchParams.city || '')

    useEffect(() => {
        if (searchParams.priceMin) setPriceMin(Number(searchParams.priceMin));
        if (searchParams.priceMax) setPriceMax(Number(searchParams.priceMax));
    }, [searchParams])

    function applyFilters() {
        const params = new URLSearchParams()

        if (priceMin) params.set('priceMin', String(priceMin))
        if (priceMax) params.set('priceMax', String(priceMax))

        if (rooms) params.set('rooms', rooms)
        if (type) params.set('type', type)
        if (city) params.set('city', city)

        router.push(`?${params.toString()}`, { scroll: false })
    }

    function resetFilters() {
        setPriceMin(0)
        setPriceMax(10000000)
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
                    min={0}
                    max={10000000}
                    value={[priceMin, priceMax]}
                    onChange={([min, max]) => {
                        setPriceMin(min)
                        setPriceMax(max)
                    }}
                />
                <div className="flex items-center my-2">
                    <span className='mr-2'>от</span>
                    <InputNumber
                        formatter={(value) =>
                            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                        }
                        parser={(value) =>
                            value.replace(/\./g, '') // удаляем точки обратно
                        }
                        min={0}
                        max={priceMax}
                        value={priceMin}
                        onChange={(value) => setPriceMin(value)}
                    />
                    <span className='mr-2 ml-2'>до</span>
                    <InputNumber
                        formatter={(value) =>
                            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                        }
                        parser={(value) =>
                            value.replace(/\./g, '') // удаляем точки обратно
                        }
                        min={priceMin}
                        max={10000000}
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
