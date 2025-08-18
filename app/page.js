'use client'
import BenefitsBlock from '@/components/BenefitsBlock';
import ContactUs from '@/components/ContactUs';
import PopularObjects from '@/components/PopularObjects';
import main_page from '@/public/assets/image/main_image.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css"
export default function MainPage() {
  return (
    <div >

      <div className='  relative h-full w-full object-cover object-left'>
        <LazyLoadImage effect='blur' className='opacity-[0.6] bg-gray-300 ' src={main_page.src} alt='banner with house' />

        <div className="absolute top-1/2 left-0 w-full flex justify-center z-10">
          <div className="bg-gray-100/1 backdrop-blur-lg px-6 py-4 rounded-lg">
            <span className="text-5xl text-white font-semibold">
              Элитная недвижимость — безупречный выбор
            </span>
          </div>
        </div>

        <button className='button absolute bottom-[10vw] right-[10vw]'>Исследовать 	→</button>
      </div>

      <BenefitsBlock />
      <PopularObjects />
      <ContactUs />
    </div>
  );
}
