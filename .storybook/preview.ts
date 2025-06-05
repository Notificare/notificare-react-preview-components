import type { Preview } from '@storybook/react';
import { PUSH_API_TEST_HOST, setPushAPIHost } from '../src/internal/network/api';

setPushAPIHost(PUSH_API_TEST_HOST);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        includeNames: true,
      },
    },
  },
};

export default preview;
