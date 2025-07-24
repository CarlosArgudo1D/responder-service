import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'get_time' })
  getTime(): string {
    const time = new Date().toISOString();
    console.log('Enviando hora:', time);
    return time;
  }
}
