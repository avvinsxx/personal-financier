'use client';
import { startTransition, useActionState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import { Button, Input, validateUrl, VALIDATION_MESSAGES } from '@/shared';
import { ActionResponse, Service } from '@/data';

import { createServiceAction } from './actions';
import styles from './styles.module.scss';

type Inputs = {
  name: string;
  icon: string;
  url: string;
};

const initialState: ActionResponse<Service> = {
  success: null,
};

export function ServiceForm() {
  const { register, handleSubmit, formState } = useForm<Inputs>();
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
      <Input
        disabled={pending}
        label="Иконка"
        type="text"
        error={formState.errors.icon?.message}
        {...register('icon', {
          required: VALIDATION_MESSAGES.required,
        })}
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
}
