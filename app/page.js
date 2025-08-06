import BenefitsBlock from '@/components/BenefitsBlock';
import ContactUs from '@/components/ContactUs';
import PopularObjects from '@/components/PopularObjects';
import main_page from '@/public/assets/image/main_image.jpg'
import Image from 'next/image';
export default function MainPage() {
  return (
    <div>

      <div className='bg-black relative h-full w-full object-cover object-left '>
        <Image className='opacity-[0.6]' src={main_page} alt='banner with house' />
        <span className='absolute text-5xl top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2  z-10 text-white font-semibold'> Элитная недвижимость — безупречный выбор</span>
        <button className='button absolute bottom-[10vw] right-[10vw]'>Исследовать 	→</button>
      </div>

      <BenefitsBlock />
      <PopularObjects />
      <ContactUs />
    </div>
  );
}
