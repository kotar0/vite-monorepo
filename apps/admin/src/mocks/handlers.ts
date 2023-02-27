import { faker } from '@faker-js/faker/locale/ja';
import { rest } from 'msw';

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', (_req, res, ctx) => {
    sessionStorage.setItem('is-auth', 'true');
    return res(ctx.status(200));
  }),
  // Handles a GET /user request
  rest.get('/user', (_req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-auth');
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      );
    }
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
