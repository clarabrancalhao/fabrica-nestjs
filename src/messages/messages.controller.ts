import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Message } from './Messages';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(Number(params.id));
  }

  @Post()
  create(@Body() message: Message) {
    return this.messagesService.create(message);
  }

  @Put(':id')
  update(@Param() params, @Body() message: Message) {
    return this.messagesService.update(Number(params.id), message);
  }
}
