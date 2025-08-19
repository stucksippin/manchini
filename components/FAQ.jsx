'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, CheckCircle, MessageCircle } from 'lucide-react'

export default function FAQ() {
    const [activeItems, setActiveItems] = useState(['1']);

    const items = [
        {
            key: '1',
            label: 'Как подобрать элитную недвижимость через Manchini?',
            children: 'Наши эксперты предлагают индивидуальный подбор объектов по вашим критериям: от апартаментов в центре Москвы до зарубежной недвижимости. Мы работаем с закрытыми базами и предоставляем эксклюзивные варианты.',
            icon: <HelpCircle size={20} />
        },
        {
            key: '2',
            label: 'Какие гарантии безопасности сделки вы предоставляете?',
            children: 'Все сделки сопровождаются нашими юристами. Мы проводим полную проверку юридической чистоты объекта, помогаем с оформлением документов и сопровождаем сделку до регистрации права собственности.',
            icon: <CheckCircle size={20} />
        },
        {
            key: '3',
            label: 'Есть ли у вас услуга trade-in для недвижимости?',
            children: 'Да, мы предлагаем программу обмена вашей текущей недвижимости на более престижный вариант с выгодными условиями и минимальными временными затратами с вашей стороны.',
            icon: <MessageCircle size={20} />
        },
        {
            key: '4',
            label: 'Как оценить стоимость моей элитной недвижимости?',
            children: 'Наши специалисты проводят комплексный анализ рынка, учитывая уникальные особенности объекта, его локацию, инфраструктуру и текущий спрос. Вы получите точный отчёт с обоснованием цены.',
            icon: <HelpCircle size={20} />
        },
        {
            key: '5',
            label: 'Работаете ли вы с зарубежной недвижимостью?',
            children: 'Да, мы сотрудничаем с проверенными партнёрами в 20+ странах. Поможем подобрать объект, оформить сделку и решить все юридические вопросы при покупке недвижимости за границей.',
            icon: <MessageCircle size={20} />
        },
    ];

    const toggleItem = (key) => {
        setActiveItems(prev =>
            prev.includes(key)
                ? prev.filter(item => item !== key)
                : [...prev, key]
        );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className='section flex flex-col items-center mb-5 mt-10'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Заголовок */}
            <motion.div
                className="text-center mb-12"
                variants={headerVariants}
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                        <HelpCircle size={24} className="text-blue-400" />
                    </div>
                    <h2 className='text-4xl font-bold text-white'>FAQ</h2>
                </div>
                <p className='text-xl text-gray-300 max-w-2xl'>
                    Всё, что нужно знать о наших услугах и решениях
                </p>
            </motion.div>

            {/* FAQ Items */}
            <motion.div
                className="w-full max-w-4xl space-y-4"
                variants={containerVariants}
            >
                {items.map((item) => {
                    const isActive = activeItems.includes(item.key);

                    return (
                        <motion.div
                            key={item.key}
                            className="group"
                            variants={itemVariants}
                            layout
                        >
                            <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] rounded-2xl border border-gray-700/30 overflow-hidden shadow-xl">
                                {/* Header */}
                                <motion.button
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                                    onClick={() => toggleItem(item.key)}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg transition-all duration-300 ${isActive
                                            ? 'bg-blue-500/30 text-blue-300'
                                            : 'bg-gray-700/50 text-gray-400 group-hover:bg-blue-500/20 group-hover:text-blue-400'
                                            }`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                                            {item.label}
                                        </h3>
                                    </div>

                                    <motion.div
                                        className={`p-2 rounded-lg transition-all duration-300 ${isActive
                                            ? 'bg-blue-500/20 text-blue-400'
                                            : 'bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50'
                                            }`}
                                        animate={{ rotate: isActive ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown size={20} />
                                    </motion.div>
                                </motion.button>

                                {/* Content */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                transition: {
                                                    height: { duration: 0.3, ease: "easeOut" },
                                                    opacity: { duration: 0.2, delay: 0.1 }
                                                }
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                transition: {
                                                    height: { duration: 0.3, ease: "easeIn" },
                                                    opacity: { duration: 0.2 }
                                                }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6">
                                                <div className="border-t border-gray-700/30 pt-4">
                                                    <motion.p
                                                        className="text-gray-300 leading-relaxed"
                                                        initial={{ y: 10, opacity: 0 }}
                                                        animate={{
                                                            y: 0,
                                                            opacity: 1,
                                                            transition: { delay: 0.2 }
                                                        }}
                                                    >
                                                        {item.children}
                                                    </motion.p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Дополнительная информация */}
            <motion.div
                className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl max-w-2xl text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <h3 className="text-blue-300 font-semibold mb-2 flex items-center justify-center gap-2">
                    <MessageCircle size={20} />
                    Не нашли ответ на свой вопрос?
                </h3>
                <p className="text-gray-400 mb-4">
                    Свяжитесь с нашими экспертами, и мы предоставим персональную консультацию
                </p>
                <motion.a
                    href="#callback-form"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-sm transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Задать вопрос
                </motion.a>
            </motion.div>
        </motion.div>
    );
}