-- CreateTable
CREATE TABLE "Realty" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "area" REAL NOT NULL,
    "rooms" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "latitude" REAL,
    "longitude" REAL,
    "dateAdded" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "RealtyInfrastructure" (
    "objectId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    PRIMARY KEY ("objectId", "type"),
    CONSTRAINT "RealtyInfrastructure_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "Realty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "objectId" INTEGER NOT NULL,
    "isMain" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Photo_objectId_fkey" FOREIGN KEY ("objectId") REFERENCES "Realty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
