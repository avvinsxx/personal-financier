import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Skeleton } from '../Skeleton';
import styles from './stories.module.scss';

const meta = {
  title: 'Example/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    className: styles.skeleton,
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...meta.args,
  },
};
