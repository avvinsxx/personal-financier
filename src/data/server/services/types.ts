import { type Service } from '@/shared/generated/prisma/client';

export { type Service } from '@/shared/generated/prisma/client';
export type CreateServiceDto = Pick<Service, 'name' | 'url' | 'icon'>;
export type UpdateServiceDto = Partial<Service> & Required<Pick<Service, 'id'>>;
