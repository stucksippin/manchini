const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const cities = ['Москва', 'Ростов', 'Питер'];
    const districts = ['Центральный район', 'Советский район', 'Кировский район', 'Железнодорожный район', 'Пригород'];
    const streets = ['ул. Ленина', 'ул. Гагарина', 'ул. Пушкина', 'ул. Толстого', 'ул. Садовая', 'ул. Мира', 'ул. Свободы', 'ул. Победы'];
    const types = ['NEW_BUILDING', 'SECONDARY', 'HOUSE'];

    const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const generateRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(6);

    const objectsData = Array.from({ length: 25 }, (_, index) => {
        const city = cities[index % cities.length];
        const type = types[index % types.length];
        const district = districts[Math.floor(Math.random() * districts.length)];
        const street = streets[Math.floor(Math.random() * streets.length)] + ` ${generateRandomNumber(1, 50)}`;
        const baseLatitude = city === 'Москва' ? 55.75 : city === 'Ростов' ? 47.23 : 59.93;
        const baseLongitude = city === 'Москва' ? 37.61 : city === 'Ростов' ? 39.72 : 30.33;

        return {
            name: `${type === 'HOUSE' ? 'Дом' : 'Квартира'} в ${district}`,
            price: generateRandomNumber(2000000, 15000000),
            area: generateRandomNumber(30, 250),
            rooms: generateRandomNumber(1, 6),
            type,
            district,
            street,
            latitude: parseFloat(generateRandomFloat(baseLatitude - 0.02, baseLatitude + 0.02)),
            longitude: parseFloat(generateRandomFloat(baseLongitude - 0.02, baseLongitude + 0.02)),
            city,
        };
    });

    console.log('🚀 Начинаем сидирование...');

    for (const objectData of objectsData) {
        console.log(`Создаю объект: ${objectData.name} в городе ${objectData.city}`);

        try {
            const createdObject = await prisma.realty.create({
                data: objectData,
            });

            console.log(`✅ Объект создан: ${createdObject.name}`);

            const photoData = [
                { url: 'realty-placeholder.webp', isMain: false },
                { url: 'realty-photo1.webp', isMain: true },
                { url: 'realty-photo2.webp', isMain: false },
            ];

            for (const photo of photoData) {
                await prisma.photo.create({
                    data: { ...photo, objectId: createdObject.id },
                });
                console.log(`📸 Фотография для объекта ${createdObject.name} добавлена.`);
            }
        } catch (error) {
            console.error('❌ Ошибка при создании объекта или фотографии:', error);
        }
    }

    console.log('🎉 Завершено сидирование.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
