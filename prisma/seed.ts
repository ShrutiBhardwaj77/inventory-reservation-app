
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const warehouse1 = await prisma.warehouse.create({
    data: {
      name: "Delhi Warehouse",
    },
  });

  const warehouse2 = await prisma.warehouse.create({
    data: {
      name: "Mumbai Warehouse",
    },
  });

  const product = await prisma.product.create({
    data: {
      name: "iPhone 15",
    },
  });

  await prisma.inventory.createMany({
    data: [
      {
        productId: product.id,
        warehouseId: warehouse1.id,
        totalStock: 10,
      },
      {
        productId: product.id,
        warehouseId: warehouse2.id,
        totalStock: 5,
      },
    ],
  });

  console.log("Seeded successfully");
}

main();