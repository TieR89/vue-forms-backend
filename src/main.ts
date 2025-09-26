import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Включаем CORS с конкретным origin (для безопасности; замените на '*' для всех, но не в prod)
  app.enableCors({
    origin: 'http://localhost:5173', // Origin вашего frontend (Vite dev server)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешенные методы
    credentials: true, // Если нужны cookies/auth
  });

  await app.listen(3000);
}
bootstrap();
