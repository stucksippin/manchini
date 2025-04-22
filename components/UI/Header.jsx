import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='header  mx-auto bg-amber-50 p-5 '>
            <nav className='flex justify-between container mx-auto'>
                <Link href='/'>MANCHINI</Link>
                <ul className='flex gap-x-4'>
                    <Link href='/catalog'>Каталог</Link>
                    <Link href='/contact'>Связаться с нами</Link>
                </ul>
            </nav>


        </div>
    )
}
