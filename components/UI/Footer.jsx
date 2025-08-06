import { MailOutlined } from '@ant-design/icons'
import React from 'react'

export default function Footer() {
    return (
        <div className='footer py-[70px] bg-[#b7a38a]  '>
            <div className='container mx-auto'>
                <div className='flex justify-between gap-x-10'>
                    <ul className='max-w-[200px]'>
                        <li className='footer_block-title'>Manchini</li>
                        <li>Элитная недвижимость — безупречный выбор</li>
                    </ul>
                    <ul className='footer_block'>
                        <li className='footer_block-title'>Контакты</li>
                        <li>Москва, ул. Тверская, 18</li>
                        <li>Бизнес-центр "Премиум"</li>
                        <li>info@manchini.ru</li>
                    </ul>
                    <ul className='footer_block'>
                        <li className='footer_block-title'>Телефон</li>
                        <li>+7 (495) 123-45-67</li>
                        <li className='font-semibold text-[18px]'>Часы работы 🕒 </li>
                        <li>Пн-Пт: 9:00 – 21:00</li>
                    </ul>
                    <ul className='footer_block flex flex-col'>
                        <li className='footer_block-title'>Новости</li>
                        <li>Подпишись на нашу рассылку чтобы получать свежие новости, обновления, советы и специальные предложения.</li>
                        <div className="relative">
                            <input
                                className="bg-[#f9f2e5] mt-5 pl-10 pr-4 py-2 w-full rounded"
                                placeholder="Введите ваш e-mail"
                                type="email"
                            />
                            <MailOutlined className="absolute left-3 top-7 text-gray-500" />
                            <button className="mt-2 bg-[#f9f2e5] text-black px-4 py-2 rounded">
                                Подписаться
                            </button>
                        </div>
                    </ul>

                </div>

                <hr className='my-10' />

                <div className='flex justify-between'>
                    <span>Manchini group</span>
                    <span>Designed by danivelin</span>
                </div>
            </div>

        </div>
    )
}
