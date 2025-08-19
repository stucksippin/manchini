'use client'
import BenefitsBlock from '@/components/BenefitsBlock';
import ContactUs from '@/components/ContactUs';
import PopularObjects from '@/components/PopularObjects';
import main_page from '@/public/assets/image/main_image.jpg'
import Image from 'next/image';
export default function MainPage() {
  return (
    <div >

      <div className="relative w-full h-screen">
        <Image
          src={main_page}
          alt="banner with house"
          className="object-cover object-center"
          fill
          priority
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-6 py-4 bg-gray-900/30 backdrop-blur-md rounded-lg text-center">
          <span className="text-3xl md:text-5xl text-white font-semibold">
            Элитная недвижимость — безупречный выбор
          </span>
        </div>

        <button className="absolute bottom-20 right-20 transition button">
          Исследовать →
        </button>
      </div>

      <BenefitsBlock />
      <PopularObjects />
      <ContactUs />
    </div>
  );
}
