import { Injectable } from '@nestjs/common';
import { MessageDto } from './MessageDto';
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

  create(messageDto: MessageDto) {
    const id = this.messages.length + 1;

    const message = {
      id: id,
      text: messageDto.text,
    };

    this.messages.push(message);

    return message;
  }

  async update(id: number, messageDto: MessageDto) {
    const index = this.messages.findIndex((m) => m.id === id);

    if (index < 0) {
      throw new Error('Message not found');
    }

    const message: Message = {
      id,
      ...messageDto,
    };
    this.messages[index] = message;
    return message;
  }

  delete(id: number) {
    const index = this.messages.findIndex((m) => m.id === id);
    delete this.messages[index];
    return true;
  }
}
