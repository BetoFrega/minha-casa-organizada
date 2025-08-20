import { describe, it, expect } from 'vitest';
import { AppService } from './app.service';

describe('Backend Smoke Tests', () => {
  it('should be able to import app module', async () => {
    const { AppModule } = await import('./app.module');
    expect(AppModule).toBeDefined();
  });

  it('should be able to import app controller', async () => {
    const { AppController } = await import('./app.controller');
    expect(AppController).toBeDefined();
  });

  it('should be able to import app service', async () => {
    const { AppService } = await import('./app.service');
    expect(AppService).toBeDefined();
  });

  it('should be able to create app service instance', () => {
    const service = new AppService();
    expect(service).toBeDefined();
    expect(service.getHello()).toBe('Hello World!');
  });
});
