import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FileInput } from '../FileInput';

const meta = {
  title: 'Example/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OneFile: Story = {
  args: {
    label: 'Иконка',
    error: 'Обязательное поле',
  },
};

export const MultipleFiles: Story = {
  args: {
    label: 'Фотографии',
    multiple: true,
    maxFiles: 3
  },
};