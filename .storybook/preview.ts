import type { Preview } from '@storybook/react';
import { setPushAPIHost } from '../src/config/api';
import { TEST_PUSH_API_HOST } from '../src/constants/constants';

setPushAPIHost(TEST_PUSH_API_HOST);

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
