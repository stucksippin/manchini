export const dynamic = 'force-dynamic';

import Catalog from '@/components/Catalog';
import Filter from '@/components/Filter';
import { getObjects } from '@/libs/getObject';

export default async function CatalogPage({ searchParams }) {
    // «Материализуем» async‑поля
    const city = await searchParams.city || '';
    const type = await searchParams.type || '';
    const rooms = await searchParams.rooms || '';
    const priceMin = await searchParams.priceMin || '';
    const priceMax = await searchParams.priceMax || '';

    // Передаём в getObjects чистые строки
    const objects = await getObjects({ city, type, rooms, priceMin, priceMax });

    return (
        <div className="flex flex-col lg:flex-row mt-6 mb-10 gap-6 px-4 md:px-8">
            <div className='filter__container w-full lg:w-[25%]'>  <Filter searchParams={{ city, type, rooms, priceMin, priceMax }} /></div>

            <Catalog objects={objects} />
        </div>
    );
}
