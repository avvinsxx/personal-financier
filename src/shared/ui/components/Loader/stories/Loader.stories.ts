import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Loader } from '../Loader';

const meta = {
  title: 'Example/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
