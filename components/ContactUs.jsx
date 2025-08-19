import Image from 'next/image'
import React from 'react'
import { MessageCircle, Phone, Mail } from 'lucide-react'
import image from '@/public/assets/contact_us.jpg'
import Link from 'next/link'

export default function ContactUs() {
    return (
        <div className='section py-16 bg-gradient-to-br from-[#1a2332] to-[#0f1419] text-white'>
            <div className='container mx-auto px-4 max-w-7xl'>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>


                    <div className='contact_info flex flex-col justify-between lg:max-w-[55%] space-y-6'>


                        <div className="flex items-start gap-4 mb-6">
                            <h3 className='text-3xl lg:text-4xl font-bold leading-tight text-white'>
                                Manchini – Создадим ваше будущее вместе. Свяжитесь с нами
                            </h3>
                        </div>


                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p className='text-lg'>
                                Наша команда профессионалов поможет вам найти идеальную недвижимость или выгодно продать свой объект. Мы работаем с элитными лотами, коммерческой недвижимостью и зарубежными проектами, предлагая индивидуальный подход и полное сопровождение сделки.
                            </p>
                            <p className='text-lg'>
                                Доверьтесь нашему опыту – и мы подберем для вас именно то, что соответствует вашим ожиданиям и статусу.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl border border-gray-700/30">
                                <div className="p-2 bg-green-500/20 rounded-lg">
                                    <Phone size={20} className="text-green-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Телефон</p>
                                    <p className="text-white font-semibold text-sm">+7 (495) 123-45-67</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl border border-gray-700/30">
                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                    <Mail size={20} className="text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-white font-semibold text-sm">info@manchini.ru</p>
                                </div>
                            </div>
                        </div>


                        <Link href={'/contact'} className='inline-flex justify-center items-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105'>
                            <MessageCircle size={20} />
                            Свяжитесь с нами
                            <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                    </div>

                    <div className='contact_image lg:max-w-[40%] w-full'>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                            <Image
                                className='w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500'
                                src={image}
                                alt='contact us'
                            />

                            <div className="absolute top-4 right-4 p-2 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-white/10">
                                <MessageCircle size={20} className="text-blue-300" />
                            </div>

                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}