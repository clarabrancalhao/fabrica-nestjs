import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages = [
    {
      id: 1,
      message: 'Hello World!',
    },
    {
      id: 2,
      message: 'Hello World!',
    },
  ];

  findAll() {
    return this.messages;
  }
}
