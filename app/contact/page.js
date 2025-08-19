'use client'
import CallbackForm from '@/components/CallbackForm'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Clock, Award, Users, Building } from 'lucide-react'
import home from '@/public/assets/image/icons/home.png'
import mail from '@/public/assets/image/icons/mail.png'
import phone from '@/public/assets/image/icons/phone.png'
import def from '@/public/assets/image/main_image.jpg'
import FAQ from '@/components/FAQ'

export default function ContactPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: "Email",
            value: "info@manchini.ru",
            description: "Ответим в течение часа",
            color: "text-blue-400",
            bgColor: "bg-blue-500/20",
            href: "mailto:info@manchini.ru"
        },
        {
            icon: <MapPin size={24} />,
            title: "Адрес офиса",
            value: "Москва, ул. Тверская, 18",
            description: "Бизнес-центр Премиум",
            color: "text-green-400",
            bgColor: "bg-green-500/20",
            href: "https://maps.google.com"
        },
        {
            icon: <Phone size={24} />,
            title: "Телефон",
            value: "+7 983 765 72 73",
            description: "Звонки принимаем 24/7",
            color: "text-purple-400",
            bgColor: "bg-purple-500/20",
            href: "tel:+79837657273"
        }
    ]

    const stats = [
        { icon: <Building size={32} />, value: "500+", label: "Объектов в портфеле" },
        { icon: <Users size={32} />, value: "1000+", label: "Довольных клиентов" },
        { icon: <Award size={32} />, value: "15", label: "Лет на рынке" },
        { icon: <Clock size={32} />, value: "24/7", label: "Поддержка клиентов" }
    ]

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
            {/* Hero секция */}
            <motion.div
                className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-purple-900/20 py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-[url('/assets/image/main_image.jpg')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl font-bold text-white mb-6"
                            variants={itemVariants}
                        >
                            Свяжитесь с <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">нами</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-300 leading-relaxed"
                            variants={itemVariants}
                        >
                            Наши эксперты по элитной недвижимости готовы ответить на все ваши вопросы
                            и помочь с выбором идеального объекта
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            <div className='container mx-auto px-4 py-16'>
                {/* Основной контент */}
                <motion.div
                    className='grid lg:grid-cols-2 gap-12 items-start mb-20'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Левая часть - информация */}
                    <motion.div
                        className='space-y-8'
                        variants={itemVariants}
                    >
                        {/* Контактная информация */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white mb-8">Наши контакты</h2>

                            {contactInfo.map((contact, index) => (
                                <motion.a
                                    key={index}
                                    href={contact.href}
                                    className="block group"
                                    variants={cardVariants}
                                    whileHover="hover"
                                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                                >
                                    <div className="p-6 bg-gradient-to-br from-[#1a2332] to-[#0f1419] rounded-2xl border border-gray-700/30 transition-all duration-300 group-hover:border-gray-600/50">
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 ${contact.bgColor} rounded-xl ${contact.color}`}>
                                                {contact.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-white mb-1">
                                                    {contact.title}
                                                </h3>
                                                <p className="text-white font-medium mb-1">
                                                    {contact.value}
                                                </p>
                                                <p className="text-gray-400 text-sm">
                                                    {contact.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Статистика */}
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            variants={itemVariants}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/30 text-center"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-blue-400 mb-3 flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Изображение */}
                        <motion.div
                            className="relative overflow-hidden rounded-2xl"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                width={484}
                                height={320}
                                src={def}
                                alt='Офис компании'
                                className='w-full h-80 object-cover'
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-white font-semibold text-lg mb-1">Наш офис</h3>
                                <p className="text-gray-300 text-sm">Современное пространство в центре Москвы</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Правая часть - форма */}
                    <motion.div
                        className="lg:sticky lg:top-8"
                        variants={itemVariants}
                    >
                        <div className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl border border-gray-700/30 p-8 shadow-2xl">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-black mb-2">Оставьте заявку</h3>
                                <p className="text-gray-800">Мы свяжемся с вами в течение 15 минут</p>
                            </div>
                            <CallbackForm />
                        </div>

                        {/* Дополнительная информация */}
                        <motion.div
                            className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h4 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                                <Clock size={20} />
                                Время работы
                            </h4>
                            <div className="space-y-2 text-gray-300 text-sm">
                                <div className="flex justify-between">
                                    <span>Понедельник - Пятница:</span>
                                    <span className="text-white">9:00 - 21:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Суббота - Воскресенье:</span>
                                    <span className="text-white">10:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Экстренная связь:</span>
                                    <span className="text-green-400">24/7</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* FAQ секция */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <FAQ />
                </motion.div>
            </div>
        </div>
    )
}