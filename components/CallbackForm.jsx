import React from 'react'

export default function CallbackForm() {
    return (
        <form className='flex flex-col gap-y-3'>
            <label className='font-light'>Ваше имя</label>
            <input className='callback-input border p-4 w-[400px] ' type="text" placeholder='Fedor Manchini' />
            <label className='font-light'>Электронная почта</label>
            <input className='callback-input border p-4 w-[400px] ' type="text" placeholder='wrqw@mail.ru' />
            <label className='font-light'>Номер телефона</label>
            <input className='callback-input border p-4 w-[400px] ' type="text" placeholder='+7 988 324 23 23' />
            <label className='font-light'>Дополнительно</label>
            <textarea className='callback-input border p-4 w-[400px] ' placeholder='Можете оставить доп. информацию' />
        </form>
    )
}
