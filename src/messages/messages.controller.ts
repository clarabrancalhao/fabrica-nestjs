import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessageDto } from './MessageDto';
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
    return this.messagesService.findById(Number(params.id)).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() message: MessageDto) {
    return this.messagesService.create(message);
  }

  @Put(':id')
  update(@Param() params, @Body() message: MessageDto) {
    return this.messagesService
      .update(Number(params.id), message)
      .catch((e) => {
        throw new NotFoundException(e.message);
      });
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.messagesService.delete(Number(params.id));
  }
}
