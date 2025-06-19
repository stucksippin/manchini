import React from 'react'

export default function CallbackForm() {
    return (
        <form className='flex flex-col gap-y-3 my-auto w-full max-w-[400px] p-4'>
            <label className='font-light'>Ваше имя</label>
            <input className='callback-input border p-4 w-full' type="text" placeholder='Fedor Manchini' />
            <label className='font-light'>Электронная почта</label>
            <input className='callback-input border p-4 w-full' type="text" placeholder='wrqw@mail.ru' />
            <label className='font-light'>Номер телефона</label>
            <input className='callback-input border p-4 w-full' type="text" placeholder='+7 988 324 23 23' />
            <label className='font-light'>Дополнительно</label>
            <textarea className='callback-input border p-4 w-full' placeholder='Можете оставить доп. информацию' />
            <button className='button mt-4'>Отправить заявку</button>
        </form>
    )
}
