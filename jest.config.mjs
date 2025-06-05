import { pathsToModuleNameMapper } from 'ts-jest';
import tsconfig from './tsconfig.json' with { type: "json" };

export default {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  modulePaths: [tsconfig.compilerOptions.baseUrl],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/mocks/svg.js',
    '^~/(.*)$': 'src/$1',
    ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths),
  },
};
