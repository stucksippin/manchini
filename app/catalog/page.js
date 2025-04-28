import Catalog from '@/components/Catalog'
import getObjects from '@/libs/getObject'
import React from 'react'

export default async function CatalogPage() {
    const objects = await getObjects()
    return (
        <div>
            <Catalog objects={objects} />
        </div>
    )
}
