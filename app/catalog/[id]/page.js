import InnerObjectCard from '@/components/InnerObjectCard'
import { getObjectsById } from '@/libs/getObjectById'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function InnerObject({ params }) {
    const { id } = await params
    const realty = await getObjectsById(id)


    if (!realty) {
        notFound()
    }
    return (
        <div>
            <InnerObjectCard
                id={realty.id}
                photos={realty.photos}
                name={realty.name}
                area={realty.area}
                rooms={realty.rooms}
                city={realty.city}
                district={realty.district}
                street={realty.street}
                latitude={realty.latitude}
                longitude={realty.longitude}
                type={realty.type}
                infrastructures={realty.infrastructures?.map(i => i.type)}
            />
        </div>
    )
}
