import { Injectable } from '@nestjs/common';
import { Message } from './messages';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: 1,
      text: 'Hello World!',
    },
    {
      id: 2,
      text: 'Hello World!',
    },
  ];

  findAll() {
    return this.messages;
  }

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }

  create(message: { id: number; text: string }) {
    return this.messages.push(message);
  }
}
