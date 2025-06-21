import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // 실제 데이터베이스에 연결
  async onModuleInit() {
    await this.$connect();
  }
}
