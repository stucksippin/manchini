import prisma from './prisma';

export async function getObjects(filters) {
    const { city, type, rooms, priceMin, priceMax } = filters;

    try {
        const objects = await prisma.realty.findMany({
            where: {
                AND: [
                    city ? { city } : {},
                    type ? { type: { in: type.split(',') } } : {},
                    rooms ? { rooms: { in: rooms.split(',').map(Number) } } : {},
                    priceMin ? { price: { gte: Number(priceMin) } } : {},
                    priceMax ? { price: { lte: Number(priceMax) } } : {},
                ],
            },
            include: { photos: true },
        });
        return objects;
    } catch (error) {
        console.error('Ошибка при получении объектов:', error);
        return [];
    }
}
