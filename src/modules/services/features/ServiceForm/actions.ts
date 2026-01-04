"use server";
import { redirect } from "next/navigation";

import { createService, CreateServiceDto } from "@/data";

export async function createServiceAction(service: CreateServiceDto) {
  try {
    await createService(service);
  } catch (ex) {
    console.error(ex);
    let message = "Непредвиденная ошибка";
    if (ex instanceof Error) {
      message = ex.message;
    }
    return { success: false, message };
  }
  redirect("/dashboard/services");
}
