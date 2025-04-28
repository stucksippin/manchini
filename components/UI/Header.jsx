import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='header  mx-auto   bg-[#f9f2e5] p-5 '>
            <nav className='flex justify-between container mx-auto'>
                <Link href='/'>MANCHINI</Link>
                <ul className='flex gap-x-10'>
                    <Link href='/catalog'>Каталог</Link>
                    <Link href='/contact'>Связаться с нами</Link>
                </ul>
            </nav>


        </div>
    )
}
