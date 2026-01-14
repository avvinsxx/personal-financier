import type { Preview } from '@storybook/nextjs-vite';
import { Inter } from 'next/font/google';

import '@/shared/ui/theme/reset.scss';
import '@/shared/ui/theme/theme.scss';
import '@/shared/ui/theme/storybook.scss';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        items: [
          { title: 'Light', value: 'light', icon: 'sun' },
          { title: 'Dark', value: 'dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'dark',
  },

  decorators: [
    (Story, context) => {
      document.body.dataset.theme = context.globals.theme;

      return (
        <div
          data-theme={context.globals.theme}
          className={`${inter.className}`}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      disable: true
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
