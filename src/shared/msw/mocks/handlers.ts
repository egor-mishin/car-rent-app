import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.backend.dev/user', (req, res, ctx) => {
    return res(ctx.json({ firstName: 'John' }));
  })
];
