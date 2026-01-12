import { prismaClient } from '@/shared/db/prisma/client';

import { Service } from './types';

export const getServices = async (): Promise<Service[]> => {
  return await prismaClient.service.findMany();
};
