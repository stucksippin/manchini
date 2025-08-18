'use client'

import { useState, useEffect } from 'react'
import { Checkbox, InputNumber, Select, Slider } from 'antd'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, Home, MapPin, Bed, Search, RotateCcw, Check } from 'lucide-react'

const citiesOptions = [
    { value: 'Ростов', label: 'Ростов-на-Дону' },
    { value: 'Москва', label: 'Москва' },
    { value: 'Питер', label: 'Санкт-Петербург' },
];

export default function Filter({ searchParams }) {
    const router = useRouter()
    const [priceMin, setPriceMin] = useState(0)
    const [priceMax, setPriceMax] = useState(10000000)
    const [isApplying, setIsApplying] = useState(false)
    const [isResetting, setIsResetting] = useState(false)

    const [rooms, setRooms] = useState(searchParams.rooms || '')
    const [type, setType] = useState(searchParams.type || '')
    const [city, setCity] = useState(searchParams.city || '')

    useEffect(() => {
        if (searchParams.priceMin) setPriceMin(Number(searchParams.priceMin));
        if (searchParams.priceMax) setPriceMax(Number(searchParams.priceMax));
    }, [searchParams])

    async function applyFilters() {
        setIsApplying(true)

        const params = new URLSearchParams()
        if (priceMin) params.set('priceMin', String(priceMin))
        if (priceMax) params.set('priceMax', String(priceMax))
        if (rooms) params.set('rooms', rooms)
        if (type) params.set('type', type)
        if (city) params.set('city', city)

        // Имитация небольшой задержки для плавности
        await new Promise(resolve => setTimeout(resolve, 500))
        router.push(`?${params.toString()}`, { scroll: false })
        setIsApplying(false)
    }

    async function resetFilters() {
        setIsResetting(true)

        setPriceMin(0)
        setPriceMax(10000000)
        setRooms('')
        setType('')
        setCity('')

        await new Promise(resolve => setTimeout(resolve, 300))
        router.push("/catalog")
        setIsResetting(false)
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    }

    const blockVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4
            }
        }
    }

    const buttonVariants = {
        idle: { scale: 1 },
        hover: {
            scale: 1.02,
            boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
        },
        tap: { scale: 0.98 }
    }

    return (
        <>
            <style jsx global>{`
                .ant-slider .ant-slider-rail {
                    background: #374151 !important;
                    height: 6px !important;
                }
                
                .ant-slider .ant-slider-track {
                    background: linear-gradient(90deg, #3B82F6, #10B981) !important;
                    height: 6px !important;
                }
                
                .ant-slider .ant-slider-handle {
                    border: 2px solid #3B82F6 !important;
                    width: 18px !important;
                    height: 18px !important;
                    background: white !important;
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3) !important;
                }
                
                .ant-slider .ant-slider-handle:hover {
                    border-color: #2563EB !important;
                    transform: scale(1.1) !important;
                    transition: all 0.2s ease !important;
                }

                .ant-checkbox-wrapper {
                    color: #E5E7EB !important;
                    margin-bottom: 8px !important;
                    padding: 8px 12px !important;
                    border-radius: 8px !important;
                    transition: all 0.2s ease !important;
                }

                .ant-checkbox-wrapper:hover {
                    background: rgba(59, 130, 246, 0.1) !important;
                    transform: translateX(4px) !important;
                }

                .ant-checkbox-checked .ant-checkbox-inner {
                    background: #3B82F6 !important;
                    border-color: #3B82F6 !important;
                }

                .ant-input-number {
                    background: #1F2937 !important;
                    border: 1px solid #374151 !important;
                    border-radius: 8px !important;
                    color: white !important;
                }

                .ant-input-number:hover,
                .ant-input-number:focus {
                    border-color: #3B82F6 !important;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1) !important;
                }

                .ant-input-number-input {
                    color: white !important;
                }

                .ant-select .ant-select-selector {
                    background: #1F2937 !important;
                    border: 1px solid #374151 !important;
                    border-radius: 8px !important;
                    color: white !important;
                }

                .ant-select:hover .ant-select-selector {
                    border-color: #3B82F6 !important;
                }

                .ant-select-focused .ant-select-selector {
                    border-color: #3B82F6 !important;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1) !important;
                }

                .ant-select-selection-placeholder {
                    color: #9CA3AF !important;
                }

                .ant-select-dropdown {
                    background: #1F2937 !important;
                    border: 1px solid #374151 !important;
                }

                .ant-select-item {
                    color: white !important;
                }

                .ant-select-item:hover {
                    background: rgba(59, 130, 246, 0.1) !important;
                }
            `}</style>

            <motion.div
                className=' filter w-full max-w-[380px] min-w-[300px] max-h-[1100px] bg-gradient-to-br from-[#1a2332] to-[#0f1419] text-white rounded-2xl shadow-2xl border border-gray-700/30 overflow-hidden flex-shrink-0'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                <motion.div
                    className="bg-gradient-to-r from-blue-600/20 to-green-600/20 p-6 border-b border-gray-700/50"
                    variants={blockVariants}
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                            <Search size={20} className="text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">Фильтры поиска</h3>
                    </div>
                </motion.div>

                <div className="p-6 space-y-6">

                    <motion.div
                        className='filter_block bg-gray-800/30 p-4 rounded-xl border border-gray-700/30'
                        variants={blockVariants}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <DollarSign size={18} className="text-green-400" />
                            <span className='font-semibold text-lg'>Цена</span>
                        </div>

                        <div className="px-2 mb-6">
                            <Slider
                                className='w-full'
                                range={{ draggableTrack: true }}
                                min={0}
                                max={10000000}
                                value={[priceMin, priceMax]}
                                onChange={([min, max]) => {
                                    setPriceMin(min)
                                    setPriceMax(max)
                                }}
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                                <span className='text-gray-400 text-sm'>от</span>
                                <InputNumber
                                    size="small"
                                    formatter={(value) =>
                                        `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                                    }
                                    parser={(value) =>
                                        value.replace(/\./g, '')
                                    }
                                    min={0}
                                    max={priceMax}
                                    value={priceMin}
                                    onChange={(value) => setPriceMin(value)}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='text-gray-400 text-sm'>до</span>
                                <InputNumber
                                    size="small"
                                    formatter={(value) =>
                                        `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                                    }
                                    parser={(value) =>
                                        value.replace(/\./g, '')
                                    }
                                    min={priceMin}
                                    max={10000000}
                                    value={priceMax}
                                    onChange={(value) => setPriceMax(value)}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Блок комнат */}
                    <motion.div
                        className='filter_block bg-gray-800/30 p-4 rounded-xl border border-gray-700/30'
                        variants={blockVariants}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Bed size={18} className="text-purple-400" />
                            <span className='font-semibold text-lg'>Количество комнат</span>
                        </div>

                        <Checkbox.Group
                            className="flex flex-col space-y-1"
                            value={rooms ? rooms.split(',') : []}
                            onChange={(values) => setRooms(values.join(','))}
                        >
                            <Checkbox value="1">1 комната</Checkbox>
                            <Checkbox value="2">2 комнаты</Checkbox>
                            <Checkbox value="3">3 комнаты</Checkbox>
                            <Checkbox value="4">4 комнаты</Checkbox>
                            <Checkbox value="5">5 комнат и больше</Checkbox>
                        </Checkbox.Group>
                    </motion.div>

                    {/* Блок типа жилья */}
                    <motion.div
                        className='filter_block bg-gray-800/30 p-4 rounded-xl border border-gray-700/30'
                        variants={blockVariants}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Home size={18} className="text-orange-400" />
                            <span className='font-semibold text-lg'>Тип жилья</span>
                        </div>

                        <Checkbox.Group
                            className="flex flex-col space-y-1"
                            value={type ? type.split(',') : []}
                            onChange={(values) => setType(values.join(','))}
                        >
                            <Checkbox value="NEW_BUILDING">Новостройка</Checkbox>
                            <Checkbox value="SECONDARY">Вторичка</Checkbox>
                            <Checkbox value="APARTMENT">Аппартаменты</Checkbox>
                            <Checkbox value="HOUSE">Дом</Checkbox>
                        </Checkbox.Group>
                    </motion.div>

                    {/* Блок города */}
                    <motion.div
                        className='filter_block bg-gray-800/30 p-4 rounded-xl border border-gray-700/30'
                        variants={blockVariants}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <MapPin size={18} className="text-red-400" />
                            <span className='font-semibold text-lg'>Город</span>
                        </div>

                        <Select
                            className="w-full"
                            size="large"
                            showSearch
                            value={city}
                            placeholder="Выберите город"
                            options={citiesOptions}
                            onChange={setCity}
                        />
                    </motion.div>

                    {/* Кнопки действий */}
                    <motion.div
                        className="flex gap-4 mt-6"
                        variants={blockVariants}
                    >
                        <motion.button
                            className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                            variants={buttonVariants}
                            initial="idle"
                            whileHover="hover"
                            whileTap="tap"
                            onClick={applyFilters}
                            disabled={isApplying}
                        >
                            <AnimatePresence mode="wait">
                                {isApplying ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    />
                                ) : (
                                    <motion.div
                                        key="icon"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Check size={16} />
                                        Применить
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <motion.button
                            className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                            variants={buttonVariants}
                            initial="idle"
                            whileHover="hover"
                            whileTap="tap"
                            onClick={resetFilters}
                            disabled={isResetting}
                        >
                            <AnimatePresence mode="wait">
                                {isResetting ? (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0, rotate: 0 }}
                                        animate={{ opacity: 1, rotate: 360 }}
                                        exit={{ opacity: 0, rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <RotateCcw size={16} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="icon"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        className="flex items-center gap-2"
                                    >
                                        <RotateCcw size={16} />
                                        Сбросить
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}