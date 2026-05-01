import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternshipModule } from './modules/internship/internship.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [InternshipModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
