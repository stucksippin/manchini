import prisma from './prisma'

export async function getPriceAreaLimits() {
    return prisma.realty.aggregate({
        _min: {
            price: true,
            area: true
        },
        _max: {
            price: true,
            area: true
        }
    })
}
