import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        message: 'Hello World!',
      },
      {
        id: 2,
        message: 'Hello World!',
      },
    ];
  }
}
