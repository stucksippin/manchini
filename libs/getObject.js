import prisma from "./prisma";
export default async function getObjects() {
    try {
        const objects = await prisma.realty.findMany({
            include: {
                photos: true
            }
        });

        return objects;
    } catch (error) {
        console.error("Ошибка при получении объектов:", error);
        return [];
    }
}

