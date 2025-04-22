# notificare-react-preview-components

This document outlines the required steps to configure the library, run it locally, execute tests, and generate builds.

## Prerequisites

You will need the following things properly installed on your computer:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm) - version **22.x**
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>`
* `cd notificare-react-preview-components`
* `npm install`

## Environment configuration
There are two environment variables that need to be provided:
* `VITE_SERVICE_KEY`: A service key provided by a Notificare admin. Required to make *webshots* and get application's info.
* `VITE_GOOGLE_MAPS_API_KEY`: An official Google Maps API key, required to display map push notifications shown on the web.


You should create a **.env** file in the project root folder as follows:

```dotenv
VITE_SERVICE_KEY=your-service-key
VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

***Note**: the **VITE** prefix is used because Storybook is configured to use Vite as a bundler*

## Running / Development
**Storybook** is included in this library to preview the available component variants.
You can execute it using the following command:

* `npm run storybook`

Then you can visit the app at http://localhost:6006/.

### Building

#### Storybook build:
* `npm run build-storybook`

The output will be at `storybook-static/`.

#### Library build:
* `npm run build-dev-rollup` (development)
* `npm run build-prod-rollup` (production)

The output will be at `dist/`.


### Linting

* `npm run lint`

### Running Tests

* `npm run test`