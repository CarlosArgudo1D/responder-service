import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getTransport } from './config/transport.config';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    getTransport(),
  );
  await app.listen();
  console.log('Responder service listening...');
}
bootstrap();
