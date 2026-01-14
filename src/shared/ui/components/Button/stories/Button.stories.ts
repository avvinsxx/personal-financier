import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from '../Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    asLink: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryFilled: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'md',
    children: 'Отправить',
  },
};

export const SecondaryFilled: Story = {
  args: {
    variant: 'filled',
    color: 'secondary',
    size: 'md',
    children: 'Создать',
  },
};

export const SmallSecondaryOutlined: Story = {
  args: {
    variant: 'outlined',
    color: 'secondary',
    size: 'sm',
    children: 'Создать',
  },
};
