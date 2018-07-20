# circleboard

CircleCi Dashboard application

https://circleci.com/api/v1.1/

**Information about signed in user:**
GET | https://circleci.com/api/v1.1/me?circle-token=:token

**List of all projects:**
GET | https://circleci.com/api/v1.1/projects?circle-token=:token

**Last 30 builds:**
GET | https://circleci.com/api/v1.1/project/github/yourownmood/eneco-e2e?circle-token=:token

**Full details of single build:**
GET | https://circleci.com/api/v1.1/project/github/yourownmood/eneco-e2e/45?circle-token=:token

**Artifacts of build:**
GET | https://circleci.com/api/v1.1/project/github/yourownmood/eneco-e2e/45/artifacts?circle-token=:token

## Todo:

- [x] Adding SCSS pre-processing
- [x] Including igloocss
- [x] Add Jest testing
