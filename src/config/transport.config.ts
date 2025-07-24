import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
dotenv.config();

export function getTransport(): MicroserviceOptions {
  const transport = process.env.TRANSPORT;

  switch (transport) {
    case 'tcp':
      if (!process.env.TCP_HOST || !process.env.TCP_PORT) {
        throw new Error('TCP_HOST o TCP_PORT no definidos en .env');
      }
      return {
        transport: Transport.TCP,
        options: {
          host: process.env.TCP_HOST,
          port: parseInt(process.env.TCP_PORT),
        },
      };

    case 'redis':
      if (!process.env.REDIS_HOST || !process.env.REDIS_PORT) {
        throw new Error('REDIS_HOST o REDIS_PORT no definidos en .env');
      }
      return {
        transport: Transport.REDIS,
        options: {
          host: process.env.REDIS_HOST,
          port: parseInt(process.env.REDIS_PORT),
        },
      };

    default:
      throw new Error(`Transporte no soportado: ${transport}`);
  }
}
