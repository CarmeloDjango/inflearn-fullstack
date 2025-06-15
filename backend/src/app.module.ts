import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  // .env 자동으로 불러오게 설정 (전역)
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
