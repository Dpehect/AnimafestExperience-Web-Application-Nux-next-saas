import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Set global prefix for Pure JSON API
  app.setGlobalPrefix('api');
  
  // Enable CORS
  app.enableCors();
  
  // Global Exception Filter for Pure JSON Errors
  app.useGlobalFilters(new GlobalExceptionFilter());
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
