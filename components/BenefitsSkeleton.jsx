'use client'
import { motion } from 'framer-motion'
import { Shield, Key, Users, Award, Star, TrendingUp, MapPin } from 'lucide-react'

export default function BenefitsSkeleton() {
    // создаём массив заглушек по количеству карточек
    const benefitsSkeleton = Array(3).fill(0)
    const statsSkeleton = Array(4).fill(0)

    return (
        <div className='section bg-[#121a1f] text-white'>
            <div className='container mx-auto'>

                {/* Заголовок */}
                <div className='flex flex-col text-center p-10'>
                    <div className='h-6 w-40 mx-auto mb-2 bg-gray-700/50 animate-pulse rounded'></div>
                    <div className='h-10 w-80 mx-auto bg-gray-700/50 animate-pulse rounded'></div>
                </div>

                {/* Карточки преимуществ */}
                <div className='flex mx-auto justify-between gap-x-10'>
                    {benefitsSkeleton.map((_, index) => (
                        <div
                            key={index}
                            className='flex flex-col w-[367px] min-h-[550px] bg-gray-800/30 rounded-lg p-6 border border-gray-700/50 animate-pulse'
                        >
                            {/* Иконка */}
                            <div className='h-[200px] bg-gray-700/40 rounded-lg mb-6'></div>

                            {/* Заголовок */}
                            <div className='h-6 w-3/4 bg-gray-700/50 rounded mb-3 mx-auto'></div>

                            {/* Текст */}
                            <div className='flex-1 space-y-3'>
                                <div className='h-4 w-full bg-gray-700/30 rounded'></div>
                                <div className='h-4 w-full bg-gray-700/30 rounded'></div>
                                <div className='h-4 w-5/6 bg-gray-700/30 rounded'></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Разделитель */}
                <div className='my-10 h-0.5 w-full bg-gray-700/50 animate-pulse'></div>

                {/* Статистические карточки */}
                <div className='flex justify-between mt-10 text-center gap-x-10'>
                    {statsSkeleton.map((_, index) => (
                        <div
                            key={index}
                            className='flex flex-col justify-center w-[270px] h-[270px] bg-gray-800/30 rounded-lg p-5 border border-gray-700/50 animate-pulse'
                        >
                            {/* Иконка */}
                            <div className='h-12 w-12 bg-gray-700/50 rounded-full mx-auto mb-4'></div>

                            {/* Число */}
                            <div className='h-10 w-20 bg-gray-700/50 rounded mx-auto mb-3'></div>

                            {/* Текст */}
                            <div className='h-4 w-full bg-gray-700/30 rounded mb-2'></div>
                            <div className='h-4 w-5/6 bg-gray-700/30 rounded mx-auto'></div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
