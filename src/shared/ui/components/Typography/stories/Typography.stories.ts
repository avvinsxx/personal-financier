import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Typography } from '../Typography';

const meta = {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    variant: 'text1',
  },
  argTypes: {
    variant: {
      options: ['logo1', 'logo2', 'h2', 'h3', 'text1', 'text2', 'error'],
      control: { type: 'radio' },
    },
    truncate: { control: 'boolean' },
    weight: {
      options: ['normal', 'bold'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
  args: {
    variant: 'text1',
    children: 'Абзац с текстом',
    weight: 'normal',
  },
};

export const Header: Story = {
  args: {
    variant: 'h2',
    children: 'Заголовок',
    weight: 'normal',
  },
};
