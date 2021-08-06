/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';

import { ApplicationModule } from './app.module';

describe('ApplicationModule', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [ApplicationModule],
    }).compile();
    app = module.createNestApplication();
    await app.init();
  });

  it('should log service name', () => {
    expect(app).toBeDefined();
  });

  it('should fire a trace', async () => {
    return request(app.getHttpServer()).get('/test').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
