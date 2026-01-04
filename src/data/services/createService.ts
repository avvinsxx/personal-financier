import { prismaClient } from "@/shared/db/prisma/client";

import { CreateServiceDto } from "./types";

export const createService = async (service: CreateServiceDto) => {
  return await prismaClient.service.create({data: service});
};
