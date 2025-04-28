import React from 'react'

export default function Footer() {
    return (
        <div className='footer py-[70px] bg-[#d0b9a7]'>
            <div className='container mx-auto'>
                <div className='flex justify-between gap-x-10'>
                    <ul className='max-w-[400px]'>
                        <li className='footer_block-title'>Manchini</li>
                        <li>Duis ad proident deserunt aliqua.uis ad proident deserunt aliqua.</li>
                    </ul>
                    <ul className='footer_block'>
                        <li className='footer_block-title'>Contact Info</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                    </ul>
                    <ul className='footer_block'>
                        <li className='footer_block-title'>LALa</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                    </ul>
                    <ul className='footer_block'>
                        <li className='footer_block-title'>NewsLetter</li>
                        <li>Duis ad proident deserunt aliqua.uis ad proident deserunt aliqua.</li>
                        <input type="text" />
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
