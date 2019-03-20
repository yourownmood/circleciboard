# CircleciBoard

CircleCi Dashboard application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

```
yarn install
```
Make a copy of `./src/settings-sample.json` as `./src/settings.json`.
```
cp src/settings-sample.json src/settings.json
```
Adjust the settings.json according to your CircleCi setup/account.

## Development

Start a local development environment by running:
```
yarn start
```

## Running the tests
```
# Run all tests
yarn test

# Run a specific test
yarn test Loader.spec.tsx

# Watch all tests
yarn test:watch

# Watch a specific file
yarn test:watch Loader.spec.tsx

# Coverage
yarn test:coverage
```

## Deployment
Creating a build is done by:
```
yarn build
```
Copy the contents of the `./build` folder to your destination to run the application.
