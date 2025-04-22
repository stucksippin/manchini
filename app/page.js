import BenefitsBlock from '@/components/BenefitsBlock';
import ContactUs from '@/components/ContactUs';
import PopularObjects from '@/components/PopularObjects';
import main_page from '@/public/assets/image/main_image.jpg'
import Image from 'next/image';
export default function MainPage() {
  return (
    <div>

      <div className='bg-black relative'>
        <Image className='w-full opacity-[0.6]' src={main_page} alt='banner with house' />

        <span className='absolute text-6xl top-[50vh] left-[25vh] text-white'>Explore The Kombong's Home Construction Mastery</span>
        <button className='button absolute bottom-[15vh] right-[20vh] text-xl'>Исследовать 	→</button>

      </div>

      <BenefitsBlock />
      <PopularObjects />
      <ContactUs />
    </div>
  );
}
