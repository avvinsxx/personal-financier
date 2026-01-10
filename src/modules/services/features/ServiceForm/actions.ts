'use server';

import {
  ActionResponse,
  createService,
  CreateServiceDto,
  Service,
} from '@/data';

export async function createServiceAction(
  _: ActionResponse<Service>,
  service: CreateServiceDto,
): Promise<ActionResponse<Service>> {
  try {
    return { success: true, data: await createService(service) };
  } catch (ex) {
    console.error(ex);
    let message = 'Непредвиденная ошибка';
    if (ex instanceof Error) {
      message = ex.message;
    }
    return { success: false, message };
  }
}
