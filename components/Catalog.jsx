'use client';

import React, { useState } from 'react';
import ObjectCard from './ObjectCard';
import Filter from './Filter';

export default function Catalog({ objects }) {



    const [visibleCount, setVisibleCount] = useState(8);
    const itemsToShow = objects.slice(0, visibleCount);

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 16);
    };

    return (
        <div className="flex mt-[2%] mb-[2%] gap-x-10 mx-[5%] ">
            <Filter />
            <div className='mx-auto'>
                <div className='flex flex-wrap justify-start gap-x-[40px] gap-y-[40px]  mx-auto'>
                    {itemsToShow.length > 0 ? (
                        itemsToShow.map((object) => {
                            const mainPhoto = object.photos.length > 0
                                ? object.photos.find(p => p.isMain)?.url || object.photos[0]?.url
                                : null;
                            const imagePath = mainPhoto
                                ? `/assets/image/objects/uploads/${mainPhoto}`
                                : `/assets/image/realty-placeholder.webp`;


                            return (
                                <ObjectCard
                                    key={object.id}
                                    id={object.id}
                                    name={object.name}
                                    image={imagePath}
                                    city={object.city}
                                    price={object.price}
                                    area={object.area}
                                    rooms={object.rooms}
                                    type={object.type}
                                    district={object.district}
                                    street={object.street}
                                />
                            );
                        })
                    ) : (
                        <span className="text-center p-4 rounded-lg mb-10 text-gray-500 border">
                            Подходящих объектов по этим фильтрам не найдено
                        </span>
                    )}
                </div>


                <div>
                    {itemsToShow.length < objects.length && (
                        <div className="flex justify-center pagination-container text-center mt-4">
                            <button
                                onClick={loadMore}
                                className="button text-center"
                            >
                                Показать еще
                            </button>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
}
