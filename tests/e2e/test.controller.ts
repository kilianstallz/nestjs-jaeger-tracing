import { Controller, Get } from '@nestjs/common';

@Controller('')
export class TraceController {
  @Get('test')
  testTrace(): string {
    return 'OK';
  }
}
