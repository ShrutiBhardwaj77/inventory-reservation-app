import { prisma } from "@/lib/prisma";
import {
  NextRequest,
  NextResponse,
} from "next/server";

export async function POST(
  req: NextRequest
) {
  const body = await req.json();

  const {
    productId,
    warehouseId,
    quantity,
  } = body;

  try {
    const result =
      await prisma.$transaction(
        async (tx) => {
          const inventory =
            await tx.inventory.findFirst({
              where: {
                productId,
                warehouseId,
              },
            });

          if (!inventory) {
            return NextResponse.json(
              {
                error:
                  "Inventory not found",
              },
              { status: 404 }
            );
          }

          const available =
            inventory.totalStock -
            inventory.reservedStock;

          if (available < quantity) {
            return NextResponse.json(
              {
                error:
                  "Not enough stock",
              },
              { status: 409 }
            );
          }

          await tx.inventory.update({
            where: {
              id: inventory.id,
            },
            data: {
              reservedStock: {
                increment: quantity,
              },
            },
          });

          const reservation =
            await tx.reservation.create({
              data: {
                productId,
                warehouseId,
                quantity,
                status: "pending",
                expiresAt: new Date(
                  Date.now() +
                    10 * 60 * 1000
                ),
              },
            });

          return NextResponse.json(
            reservation
          );
        }
      );

    return result;
  }catch (error) {
  console.log(error);

  return NextResponse.json(
    {
      error: String(error),
    },
    { status: 500 }
  );
} 
}