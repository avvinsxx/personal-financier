'use client';
import { startTransition, useActionState, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import {
  Button,
  FileInput,
  Input,
  validateUrl,
  VALIDATION_MESSAGES,
} from '@/shared';
import { ActionResponse } from '@/data';
import { Service } from '@/data/server';

import { createServiceAction } from './actions';
import styles from './styles.module.scss';

type Inputs = {
  name: string;
  icon: File;
  url: string;
};

const initialState: ActionResponse<Service> = {
  success: null,
};

export const ServiceForm = () => {
  const { register, handleSubmit, formState, control } = useForm<Inputs>();
  const router = useRouter();
  const [state, action, pending] = useActionState(
    createServiceAction,
    initialState,
  );

  const _onSubmit: SubmitHandler<Inputs> = async (formData) => {
    startTransition(() => action(formData));
  };

  useEffect(() => {
    if (state.success) {
      toast.success('Сервис успешно создан');
      router.push('/dashboard/services');
    }
    if (!state.success && state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form onSubmit={handleSubmit(_onSubmit)} className={styles.serviceForm}>
      <Input
        disabled={pending}
        label="Название"
        type="text"
        error={formState.errors.name?.message}
        {...register('name', {
          required: VALIDATION_MESSAGES.required,
        })}
      />
      <Input
        disabled={pending}
        label="Url"
        type="text"
        error={formState.errors.url?.message}
        {...register('url', {
          required: VALIDATION_MESSAGES.required,
          validate: validateUrl,
        })}
      />
      <Controller
        control={control}
        name="icon"
        rules={{
          required: VALIDATION_MESSAGES.required,
        }}
        render={({ field: { onChange }, fieldState }) => {
          return (
            <FileInput
              label="Иконка"
              onChange={(e) => onChange(e[0])}
              error={fieldState.error?.message}
            />
          );
        }}
      />

      <Button
        disabled={pending}
        isLoading={pending}
        variant="filled"
        color="primary"
        size="md"
        type="submit"
      >
        Создать
      </Button>
    </form>
  );
};
