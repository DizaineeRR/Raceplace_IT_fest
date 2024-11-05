import { Module } from '@nestjs/common';
import { GameController } from './games/games.controller';
import { GameService } from './games/games.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [GameController],
  providers: [GameService, PrismaService],
})
export class AppModule {}
