import prisma from './prisma';

export async function getObjects(searchParams) {
    try {
        const objects = await prisma.realty.findMany({
            where: {
                AND: [
                    searchParams.city ? { city: searchParams.city } : {},
                    searchParams.type
                        ? {
                            type: {
                                in: searchParams.type.split(','),
                            },
                        }
                        : {},
                    searchParams.rooms
                        ? {
                            rooms: {
                                in: searchParams.rooms.split(',').map(Number),
                            },
                        }
                        : {},
                    searchParams.priceMax ? { price: { lte: Number(searchParams.priceMax) } } : {},
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
