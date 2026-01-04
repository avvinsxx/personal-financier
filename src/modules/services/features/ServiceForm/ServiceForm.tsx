"use client";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Input } from "@/shared";

import { createServiceAction } from "./actions";
import styles from "./styles.module.scss";

type Inputs = {
  name: string;
  icon: string;
  url: string;
};

export function ServiceForm() {
  const { register, handleSubmit, setError, formState } = useForm<Inputs>();

  const _onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const result = await createServiceAction(formData);

    if (!result.success && result.message) {
      setError("icon", { type: "manual", message: result.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(_onSubmit)} className={styles.serviceForm}>
      <Input
        label="Name"
        type="text"
        autoFocus
        error={formState.errors.name?.message}
        {...register("name", {
          required: { value: true, message: "Обязательное поле" },
        })}
      />
      <Input
        label="Url"
        type="text"
        autoFocus
        error={formState.errors.url?.message}
        {...register("url", {
          required: { value: true, message: "Обязательное поле" },
        })}
      />
      <Input
        label="Icon"
        type="text"
        autoFocus
        error={formState.errors.icon?.message}
        {...register("icon", {
          required: { value: true, message: "Обязательное поле" },
        })}
      />
      <Button variant="filled" color="primary" size="md" type="submit">
        Создать
      </Button>
    </form>
  );
}
