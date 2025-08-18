export const dynamic = 'force-dynamic';

import Catalog from '@/components/Catalog';
import Filter from '@/components/Filter';
import { getObjects } from '@/libs/getObject';

export default async function CatalogPage({ searchParams }) {
    const params = await searchParams;

    const city = params?.city || '';
    const type = params?.type || '';
    const rooms = params?.rooms || '';
    const priceMin = params?.priceMin || '';
    const priceMax = params?.priceMax || '';

    const objects = await getObjects({ city, type, rooms, priceMin, priceMax });



    return (
        <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 mt-6 mb-10">

            <div className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0">
                <Filter searchParams={{ city, type, rooms, priceMin, priceMax }} />
            </div>
            <div className="flex-1 min-w-0">
                <Catalog objects={objects} />
            </div>
        </div>
    );
}
