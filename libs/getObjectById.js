import prisma from './prisma';

export async function getObjectsById(id) {
    try {
        const object = await prisma.realty.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                photos: true,
                infrastructures: true,
            }
        });
        return object;
    } catch (error) {
        console.error('Ошибка при получении объекта внтури карты:', error);
        return [];
    }
}
