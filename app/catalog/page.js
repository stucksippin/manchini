export const dynamic = 'force-dynamic';

import Catalog from '@/components/Catalog';
import Filter from '@/components/Filter';
import { getObjects } from '@/libs/getObject';
import { getPriceAreaLimits } from '@/libs/getPriceAreaLimits';


export default async function CatalogPage({ searchParams }) {
    console.log(searchParams);

    const objects = await getObjects(await searchParams);
    const limits = await getPriceAreaLimits()
    return (
        <div className="flex mt-[2%] mb-[2%] gap-x-10 mx-[5%]">
            <Filter searchParams={searchParams} limits={limits} />
            <Catalog objects={objects} />
        </div>
    );
}
