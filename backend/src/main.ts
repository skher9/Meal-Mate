import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 👉 Swagger config
  const config = new DocumentBuilder()
    .setTitle('MealMate API')
    .setDescription('Recipe + Auth APIs for the MealMate app 🍽️')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('recipes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Accessible at /api

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap().catch((err) => {
  console.error('NestJS failed to start:', err);
});
