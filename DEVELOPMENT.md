# Development guide

This document outlines the required steps to configure the library, run it locally, execute tests, and generate builds.

## Environment configuration

There are two environment variables that need to be provided:
* `VITE_SERVICE_KEY`: A service key provided by a Notificare admin. Required to make *webshots* and get application's info.
* `VITE_GOOGLE_MAPS_API_KEY`: An official Google Maps API key, required to display map push notifications shown on the web.

You should create a **.env** file in the project root folder as follows:

```dotenv
VITE_SERVICE_KEY=your-service-key
VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

## Running / Development

**Storybook** is included in this library to preview the available component variants. You can execute it using the following command:

```shell
npm run storybook
```

### Building

#### Storybook build:

```shell
npm run build-storybook
```

The output will be at `/storybook-static`.

#### Library build:

```shell
npm run build-rollup
```

The output will be at `dist/`.

### Linting

```shell
npm run lint
```

### Running Tests

```shell
npm run test
```
