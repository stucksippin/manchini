'use client';

import React, { useState } from 'react';
import ObjectCard from './ObjectCard';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, RotateCcw, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function Catalog({ objects }) {
    const [visibleCount, setVisibleCount] = useState(8);
    const [isLoading, setIsLoading] = useState(false);
    const itemsToShow = objects.slice(0, visibleCount);
    const router = useRouter()
    const loadMore = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 300));
        setVisibleCount(prevCount => prevCount + 16);
        setIsLoading(false);
    };

    // Анимация для контейнера карточек
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    // Анимация для кнопки "Показать еще"
    const buttonVariants = {
        idle: {
            scale: 1,
            boxShadow: "0 4px 20px rgba(59, 130, 246, 0.2)"
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 8px 30px rgba(59, 130, 246, 0.4)",
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    return (
        <div className="catalog__container w-[80%]">
            <div className='mx-auto'>
                {itemsToShow.length > 0 ? (
                    <>
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mx-auto"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {itemsToShow.map((object) => {
                                const mainPhoto = object.photos.length > 0
                                    ? object.photos.find(p => p.isMain)?.url || object.photos[0]?.url
                                    : null;
                                const imagePath = mainPhoto
                                    ? `/assets/image/objects/uploads/${mainPhoto}`
                                    : `/assets/image/realty-placeholder.webp`;

                                return (
                                    <Link key={object.id} href={`/catalog/${object.id}`}>
                                        <ObjectCard
                                            id={object.id}
                                            name={object.name}
                                            image={imagePath}
                                            city={object.city}
                                            price={object.price}
                                            area={object.area}
                                            rooms={object.rooms}
                                            type={object.type}
                                            district={object.district}
                                            street={object.street}
                                        />
                                    </Link>
                                );
                            })}
                        </motion.div>

                        {/* Кнопка "Показать еще" */}
                        <AnimatePresence>
                            {visibleCount < objects.length && (
                                <motion.div
                                    className="flex justify-center pagination-container text-center mt-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.button
                                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-3 disabled:opacity-70 min-w-[200px] justify-center"
                                        variants={buttonVariants}
                                        initial="idle"
                                        whileHover="hover"
                                        whileTap="tap"
                                        onClick={loadMore}
                                        disabled={isLoading}
                                    >
                                        <AnimatePresence mode="wait">
                                            {isLoading ? (
                                                <motion.div
                                                    key="loading"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.5 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    <span>Загружаем...</span>
                                                </motion.div>
                                            ) : (
                                                <motion.span
                                                    key="text"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.5 }}
                                                >
                                                    Показать еще ({objects.length - visibleCount})
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                ) : (

                    <motion.div
                        className="flex flex-col items-center justify-center py-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="p-8 bg-gradient-to-br from-[#1a2332] to-[#0f1419] rounded-2xl border border-gray-700/30 max-w-md mx-auto shadow-xl">
                            {/* Иконка */}
                            <motion.div
                                className="w-20 h-20 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                            >
                                <Search size={40} className="text-gray-400" />
                            </motion.div>


                            <motion.h3
                                className="text-2xl font-bold text-white mb-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Объекты не найдены
                            </motion.h3>
                            <motion.p
                                className="text-gray-400 mb-6 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                По заданным критериям поиска не найдено подходящих объектов недвижимости.
                                Попробуйте изменить параметры фильтрации.
                            </motion.p>


                            <motion.div
                                className="flex flex-col sm:flex-row gap-3 justify-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.button
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => router.push('/catalog')}
                                >
                                    <RotateCcw size={16} />
                                    Сбросить фильтры
                                </motion.button>


                            </motion.div>
                        </div>



                    </motion.div>
                )}
            </div>
        </div>
    );
}