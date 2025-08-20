import { describe, it, expect } from 'vitest';

describe('Frontend Smoke Tests', () => {
  it('should be able to import React', async () => {
    const React = await import('react');
    expect(React).toBeDefined();
    expect(React.createElement).toBeDefined();
  });

  it('should be able to import ReactDOM', async () => {
    const ReactDOM = await import('react-dom');
    expect(ReactDOM).toBeDefined();
  });

  it('should be able to import React Router', async () => {
    const { createBrowserRouter } = await import('react-router');
    expect(createBrowserRouter).toBeDefined();
  });

  it('should be able to import home route', async () => {
    const HomeRoute = await import('./routes/home');
    expect(HomeRoute.default).toBeDefined();
    expect(HomeRoute.meta).toBeDefined();
  });

  it('should have correct meta function', async () => {
    const { meta } = await import('./routes/home');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const metaResult = meta({} as any);
    expect(metaResult).toBeDefined();
    expect(Array.isArray(metaResult)).toBe(true);
    expect(
      metaResult.some((item) => item.title === 'New React Router App'),
    ).toBe(true);
  });
});
