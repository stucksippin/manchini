import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Square, Home, Eye, Heart, ChevronRight, Loader2 } from 'lucide-react';

export default function ObjectCard({
    id,
    image,
    name,
    price,
    city,
    area,
    rooms,
    type,
    district,
    street
}) {
    const [isLiked, setIsLiked] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    const editPrice = String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');

    const typeLabels = {
        'NEW_BUILDING': 'Новостройка',
        'SECONDARY': 'Вторичка',
        'APARTMENT': 'Апартаменты',
        'HOUSE': 'Дом'
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const imageVariants = {
        loading: { opacity: 0.7 },
        loaded: {
            opacity: 1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            className="group relative bg-gradient-to-br from-[#1a2332] to-[#0f1419] rounded-2xl overflow-hidden shadow-xl border border-gray-700/30 cursor-pointer h-full flex flex-col"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            {/* Изображение с анимацией загрузки */}
            <div className="relative h-48 overflow-hidden">
                <AnimatePresence>
                    {imageLoading && !imageError && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gray-800/50 flex items-center justify-center z-10"
                        >
                            <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={imageError ? '/assets/image/realty-placeholder.webp' : image}
                    alt={name || 'Объект недвижимости'}
                    variants={imageVariants}
                    initial="loading"
                    animate={imageLoading ? "loading" : "loaded"}
                    onLoad={() => setImageLoading(false)}
                    onError={() => {
                        setImageError(true);
                        setImageLoading(false);
                    }}
                />

                {/* Градиентный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Тип объекта */}
                {type && (
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                            {typeLabels[type] || type}
                        </span>
                    </div>
                )}

            </div>

            {/* Контент карточки */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 line-clamp-2">
                        {name || 'Объект недвижимости'}
                    </h3>

                    <div className="space-y-2 mb-4">
                        <div className="flex items-center text-gray-300 text-sm">
                            <MapPin size={14} className="mr-2 text-blue-400 flex-shrink-0" />
                            <span className="truncate">
                                {city}{district && `, ${district}`}
                            </span>
                        </div>

                        {street && (
                            <div className="text-gray-400 text-xs ml-6 truncate">
                                {street}
                            </div>
                        )}

                        <div className="flex items-center gap-4 text-gray-300 text-sm">
                            {area && (
                                <div className="flex items-center">
                                    <Square size={14} className="mr-1 text-green-400 flex-shrink-0" />
                                    <span>{area} м²</span>
                                </div>
                            )}

                            {rooms && (
                                <div className="flex items-center">
                                    <Home size={14} className="mr-1 text-purple-400 flex-shrink-0" />
                                    <span>{rooms} комн.</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Цена и кнопка */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white">
                            {editPrice} ₽
                        </span>
                        {area && (
                            <span className="text-xs text-gray-400">
                                {Math.round(price / area).toLocaleString()} ₽/м²
                            </span>
                        )}
                    </div>

                    <motion.div
                        className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-200"
                        whileHover={{ x: 5 }}
                    >
                        <span className="mr-1">Подробнее</span>
                        <ChevronRight size={16} />
                    </motion.div>
                </div>
            </div>

            {/* Эффект свечения при наведении */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl" />
            </div>
        </motion.div>
    );
}