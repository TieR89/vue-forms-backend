import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173', // Vite dev
      'http://localhost:4173', // Vite preview
      'https://tier89.github.io', // Root GitHub Pages origin
      'https://tier89.github.io/vue-forms-app/', // Full path для app
      'https://vue-forms-app.vercel.app',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true, // Если нужно cookies/auth
  });

  await app.listen(3000);
}
bootstrap();
