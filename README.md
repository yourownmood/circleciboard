# CircleciBoard

CircleCi Dashboard application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

```
npm install
```

Make a copy of `./src/settings-sample.json` as `./src/settings.json`.

```
cp src/settings-sample.json src/settings.json
```

Adjust the settings.json according to your CircleCi setup/account.

## Development

Start a local development environment by running:

```
npm start
```

## Running the tests

```
# Run all tests
npm run test

# Run a specific test
npm run test Loader.spec.tsx

# Watch all tests
npm run test:watch

# Watch a specific file
npm run test:watch Loader.spec.tsx

# Coverage
npm run test:coverage
```

## Deployment

Creating a build is done by:

```
npm run build
```

Copy the contents of the `./build` folder to your destination to run the application.
