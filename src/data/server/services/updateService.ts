import { prismaClient } from '@/shared/db/prisma/client';

import { UpdateServiceDto } from './types';

export const updateService = async (service: UpdateServiceDto) => {
  return await prismaClient.service.update({
    data: service,
    where: { id: service.id },
  });
};
