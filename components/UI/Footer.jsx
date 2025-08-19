import { MailFilled } from '@ant-design/icons'
import React from 'react'

export default function Footer() {
    return (
        <div className="py-16 bg-gradient-to-br from-[#1a2332] to-[#0f1419] text-white border-t border-gray-700/30">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* верхняя часть */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Блок с логотипом и описанием */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                                <MailFilled className="text-blue-400 text-xl" />
                            </div>
                            <h3 className="font-bold text-2xl text-white">Manchini</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed max-w-[250px]">
                            Элитная недвижимость — безупречный выбор
                        </p>
                    </div>

                    {/* Блок контактов */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-gray-700/50 rounded-lg">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-lg text-white">Контакты</h4>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-300">Москва, ул. Тверская, 18</p>
                            <p className="text-gray-300">Бизнес-центр "Премиум"</p>
                            <p className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                                info@manchini.ru
                            </p>
                        </div>
                    </div>

                    {/* Блок телефона и часов работы */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-gray-700/50 rounded-lg">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-lg text-white">Телефон</h4>
                        </div>
                        <div className="space-y-2">
                            <p className="text-blue-400 font-semibold text-lg hover:text-blue-300 transition-colors cursor-pointer">
                                +7 (495) 123-45-67
                            </p>
                            <div className="mt-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12,6 12,12 16,14"></polyline>
                                    </svg>
                                    <span className="font-semibold text-white">Часы работы</span>
                                </div>
                                <p className="text-gray-300">Пн-Пт: 9:00 – 21:00</p>
                            </div>
                        </div>
                    </div>

                    {/* Блок подписки на новости */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-gray-700/50 rounded-lg">
                                <MailFilled className="text-gray-400 text-lg" />
                            </div>
                            <h4 className="font-semibold text-lg text-white">Новости</h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Подпишись на нашу рассылку, чтобы получать свежие новости, обновления, советы и специальные предложения.
                        </p>
                        <div className="space-y-3">
                            <div className="relative">
                                <input
                                    className="bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 px-4 py-3 w-full rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-200"
                                    placeholder="Введите ваш e-mail"
                                    type="email"
                                />
                            </div>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg">
                                Подписаться
                            </button>
                        </div>
                    </div>
                </div>

                {/* Разделитель */}
                <div className="my-10 border-t border-gray-700/30"></div>

                {/* нижняя часть */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
                    <div className="flex items-center gap-2">
                        <div className="p-1 bg-blue-500/20 rounded">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                        <span className="text-gray-300">© Manchini group</span>
                    </div>
                    <span className="text-gray-400">Designed by danivelin</span>
                </div>
            </div>
        </div>
    )
}