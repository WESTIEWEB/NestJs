import { ExampleMiddleware } from './example.middlewares';

describe('ExampleMiddleware', () => {
  it('should be defined', () => {
    expect(new ExampleMiddleware()).toBeDefined();
  });
});
