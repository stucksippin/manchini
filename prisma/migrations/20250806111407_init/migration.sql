-- CreateEnum
CREATE TYPE "ObjectType" AS ENUM ('NEW_BUILDING', 'SECONDARY', 'HOUSE', 'APARTMENT');

-- CreateEnum
CREATE TYPE "InfrastructureType" AS ENUM ('SCHOOL', 'PARK', 'MALL', 'KINDERGARTEN');

-- CreateTable
CREATE TABLE "Realty" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "rooms" INTEGER NOT NULL,
    "type" "ObjectType" NOT NULL,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Realty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RealtyInfrastructure" (
    "objectId" INTEGER NOT NULL,
    "type" "InfrastructureType" NOT NULL,

    CONSTRAINT "RealtyInfrastructure_pkey" PRIMARY KEY ("objectId","type")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "objectId" INTEGER NOT NULL,
    "isMain" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RealtyInfrastructure" ADD CONSTRAINT "RealtyInfrastructure_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "Realty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "Realty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
