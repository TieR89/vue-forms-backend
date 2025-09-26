import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Включаем CORS с конкретным origin (для безопасности; замените на '*' для всех, но не в prod)
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://TieR89.github.io/vue-forms-app/',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
