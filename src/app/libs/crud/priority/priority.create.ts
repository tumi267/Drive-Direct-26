import prisma from "@/app/libs/prisma";

interface CreatePriorityRequest {
  dealerId: string;
  vehicleId: string;
  paymentReference: string;
  days: number;
}

export async function createPriority({
  dealerId,
  vehicleId,
  paymentReference,
  days,
}: CreatePriorityRequest) {
  if (days <= 0) {
    throw new Error("Priority days must be greater than zero.");
  }

  const vehicle = await prisma.vehicle.findUnique({
    where: {
      id: vehicleId,
    },
    select: {
      id: true,
      dealerId: true,
      isPriority: true,
      priorityUntil: true,
    },
  });

  if (!vehicle) {
    throw new Error("Vehicle not found.");
  }

  if (vehicle.dealerId !== dealerId) {
    throw new Error(
      "This vehicle does not belong to the selected dealer."
    );
  }

  const existing = await prisma.priority.findUnique({
    where: {
      paymentReference,
    },
  });

  if (existing) {
    throw new Error("Payment has already been processed.");
  }

  const startsAt = new Date();

  /**
   * If the vehicle is already priority
   * extend from the current expiry.
   */
  const baseDate =
    vehicle.isPriority &&
    vehicle.priorityUntil &&
    vehicle.priorityUntil > startsAt
      ? new Date(vehicle.priorityUntil)
      : startsAt;

  const expiresAt = new Date(baseDate);

  expiresAt.setDate(expiresAt.getDate() + days);

  return await prisma.$transaction(async (tx) => {
    const priority = await tx.priority.create({
      data: {
        dealerId,
        vehicleId,
        paymentReference,
        days,
        startsAt: baseDate,
        expiresAt,
      },
    });

    await tx.vehicle.update({
      where: {
        id: vehicleId,
      },
      data: {
        isPriority: true,
        priorityUntil: expiresAt,
      },
    });

    return priority;
  });
}