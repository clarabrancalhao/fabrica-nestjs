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

  async findById(id: number) {
    const message = this.messages.find((message) => message.id === id);

    if (!message) {
      throw new Error('Message not found');
    }

    return message;
  }

  create(message: { id: number; text: string }) {
    return this.messages.push(message);
  }

  update(id: number, message: Message) {
    const index = this.messages.findIndex((m) => m.id === id);
    this.messages[index] = message;
    return message;
  }

  delete(id: number) {
    const index = this.messages.findIndex((m) => m.id === id);
    delete this.messages[index];
    return true;
  }
}
