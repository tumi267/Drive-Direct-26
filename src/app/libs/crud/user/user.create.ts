import prisma from "../../prisma";
import { UserOnboardFormData } from "../../signup/types";

// Return the user object (or null) so the API route can check it
export async function checkifuser(userId: string) {
  return await prisma.user.findUnique({
    where: {
      clerkid: userId,
    },
  });
}

// Return the newly created user object
export async function createUser({ firstName, lastName, clerkid }: UserOnboardFormData) {
  return await prisma.user.create({
    data: {
      clerkid,
      firstName,
      lastName,
    },
  });
}
