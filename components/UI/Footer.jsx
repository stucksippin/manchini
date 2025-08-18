import { MailFilled } from '@ant-design/icons'
import React from 'react'

export default function Footer() {
    return (
        <div className="footer py-16 bg-[#171F24] text-white border-t-2 border-black">
            <div className="container mx-auto px-4">
                {/* верхняя часть */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    <ul className="max-w-[250px] space-y-2">
                        <li className="footer_block-title font-semibold text-lg">Manchini</li>
                        <li>Элитная недвижимость — безупречный выбор</li>
                    </ul>

                    <ul className="footer_block space-y-2">
                        <li className="footer_block-title font-semibold text-lg">Контакты</li>
                        <li>Москва, ул. Тверская, 18</li>
                        <li>Бизнес-центр "Премиум"</li>
                        <li>info@manchini.ru</li>
                    </ul>

                    <ul className="footer_block space-y-2">
                        <li className="footer_block-title font-semibold text-lg">Телефон</li>
                        <li>+7 (495) 123-45-67</li>
                        <li className="font-semibold text-[18px] mt-2">Часы работы 🕒</li>
                        <li>Пн-Пт: 9:00 – 21:00</li>
                    </ul>

                    <ul className="footer_block flex flex-col space-y-2">
                        <li className="footer_block-title font-semibold text-lg">Новости</li>
                        <li>
                            Подпишись на нашу рассылку, чтобы получать свежие новости, обновления, советы и специальные предложения.
                        </li>
                        <div className="relative w-full">
                            <input
                                className="bg-white text-black mt-3 pl-10 pr-4 py-2 w-full rounded focus:outline-none"
                                placeholder="Введите ваш e-mail"
                                type="email"
                            />

                            <button className="mt-3 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                                Подписаться
                            </button>
                        </div>
                    </ul>
                </div>

                <hr className="my-10 border-gray-600" />

                {/* нижняя часть */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
                    <span>© Manchini group</span>
                    <span>Designed by danivelin</span>
                </div>
            </div>
        </div>
    )
}
