import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { games }  from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async createGame(data: {
    name: string;
    image: string;
    image_back: string;
  }): Promise<games> {
    return this.prisma.games.create({
      data,
    });
  }

  async getAllGames(): Promise<games[]> {
    return this.prisma.games.findMany();
  }

  async deleteGame(id: number): Promise<games> {
    return this.prisma.games.delete({
      where: { id },
    });
  }
}
