import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { ServiceForm } from '@/modules/services';
import { Typography } from '@/shared';
import { auth } from '@/shared/server';

import styles from './styles.module.scss';

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/sign-in');
  }

  return (
    <div className={styles.page}>
      <Typography variant="h2">Создать сервис</Typography>
      <ServiceForm />
    </div>
  );
}
