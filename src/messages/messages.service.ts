import { Injectable } from '@nestjs/common';
import { Message } from './Messages';

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

  update(id: number, message: Message) {
    const index = this.messages.findIndex((m) => m.id === id);
    this.messages[index] = message;
    return message;
  }
}
