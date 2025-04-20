import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common'; // 🆕 import this

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS for frontend
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // ✅ Enable global validation and auto-transforming of query params
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // 👉 Swagger setup
  const config = new DocumentBuilder()
    .setTitle('MealMate API')
    .setDescription('Recipe + Auth APIs for the MealMate app 🍽️')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('recipes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  console.log('🚀 Starting MealMate on port:', process.env.PORT ?? 4000);
  await app.listen(process.env.PORT ?? 4000);
}

bootstrap().catch((err) => {
  console.error('NestJS failed to start:', err);
});
