import { type Service } from "@/shared/generated/prisma/client";

export { type Service } from "@/shared/generated/prisma/client";
export type CreateServiceDto = Pick<Service, 'name' | 'url' | 'icon'>
