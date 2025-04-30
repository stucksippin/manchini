import prisma from './prisma';

export async function getObjects(searchParams) {
    try {
        const objects = await prisma.realty.findMany({
            where: {
                AND: [
                    searchParams.city ? { city: searchParams.city } : {},
                    searchParams.type ? { type: searchParams.type } : {},
                    searchParams.rooms ? { rooms: Number(searchParams.rooms) } : {},
                    searchParams.priceMax ? { price: { lte: Number(searchParams.priceMax) } } : {},
                    searchParams.areaMax ? { area: { lte: Number(searchParams.areaMax) } } : {},
                ]
            },
            include: {
                photos: true,
            },
        });
        return objects;
    } catch (error) {
        console.error('Ошибка при получении объектов:', error);
        return [];
    }
}
