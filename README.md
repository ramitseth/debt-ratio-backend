# debt-ratio-backend
This is a demo Node.js project made to calculate debt ratio of users using Nest JS framework.
It also includes jest tests and api specs.

## Assumptions

- There is some dummy data for users in file `src/app.data.ts`. 
- We are assuming the Gross Income given is yearly gross income.
- Debt Ratio is being calculated using the formula `(monthly expenses + monthly loan payments) / monthly income`
- We are not using tax rate anywhere

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript repository.
Project is created using default NestJs set up

There are only 2 api end points - 
1. Data end point `http://localhost:3000/debt/:id` value of :id can be 1,2,3,4
2. API specs end point `http://localhost:3000/api`

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Spec

Swagger is enabled. You can find the api specs on `http://localhost:3000/api` after running the dev or prod server.
