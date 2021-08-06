import { Module } from '@nestjs/common';

import { TracingModule } from '../../lib';

import { TraceController } from './test.controller';

@Module({
  imports: [
    TracingModule.forRoot({
      isSimpleSpanProcessor: true,
      exporterConfig: {
        serviceName: 'test-module',
        host: 'localhost',
      },
    }),
  ],
  controllers: [TraceController],
})
export class ApplicationModule {}
