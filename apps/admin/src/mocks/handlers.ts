import { faker } from '@faker-js/faker/locale/ja';
import { rest } from 'msw';

export const handlers = [
  // Handles a POST /login request
  rest.post('/auth', (req, res, ctx) => {
    console.log(req);
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        id: faker.datatype.uuid(),
        token: faker.datatype.string(10),
      }),
    );
  }),
  // Handles a GET /user request
  rest.get('/user', (_req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
      }),
    );
  }),
];
