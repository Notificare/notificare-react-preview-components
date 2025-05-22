const esModules = ['@react-leaflet', 'react-leaflet'].join('|');

export default {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/mocks/svg.js',
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
