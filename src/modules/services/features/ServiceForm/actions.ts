'use server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { ActionResponse } from '@/data';
import { createService, Service, updateService } from '@/data/server';
import { auth, saveFile } from '@/shared/server';

type FormData = {
  name: string;
  url: string;
  icon: File;
};

export async function createServiceAction(
  _: ActionResponse<Service>,
  formData: FormData,
): Promise<ActionResponse<Service>> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/sign-in');
  }

  try {
    let service = await createService({
      name: formData.name,
      url: formData.url,
      icon: null,
    });
    const iconPath = await saveFile(service.id, formData.icon);

    service = await updateService({ ...service, icon: iconPath });
    return { success: true, data: service };
  } catch (ex) {
    console.error(ex);
    let message = 'Непредвиденная ошибка';
    if (ex instanceof Error) {
      message = ex.message;
    }
    return { success: false, message };
  }
}
