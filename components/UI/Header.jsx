import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='header bg-[#121a1f] p-5 text-[#A6AFB5]'>
            <nav className='flex justify-between container mx-auto'>
                <Link className="relative font-medium text-[#A6AFB5] 
             hover:text-transparent hover:bg-clip-text 
             hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400
             bg-[length:200%_100%] bg-left hover:bg-right
             transition-all duration-500 ease-in-out" href='/'>MANCHINI</Link>
                <ul className='flex gap-x-10'>
                    <Link
                        href='/catalog'
                        className="relative font-medium text-[#A6AFB5] 
             hover:text-transparent hover:bg-clip-text 
             hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400
             bg-[length:200%_100%] bg-left hover:bg-right
             transition-all duration-500 ease-in-out"
                    >
                        Каталог
                    </Link>

                    <Link
                        href='/contact'
                        className="relative font-medium text-[#A6AFB5] 
             hover:text-transparent hover:bg-clip-text 
             hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400
             bg-[length:200%_100%] bg-left hover:bg-right
             transition-all duration-500 ease-in-out"
                    >
                        Связаться с нами
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
