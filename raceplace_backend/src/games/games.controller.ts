import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { GameService } from './games.service';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}


  @Post()
  async createGame(@Body() body: { name: string; image: string; image_back: string }) {
    return this.gameService.createGame(body);
  }

  @Get()
  async getAllGames() {
    // return "Hello, Artem!";
    return this.gameService.getAllGames();
  }


  @Delete(':id')
  async deleteGame(@Param('id') id: string) {
    return this.gameService.deleteGame(Number(id));
  }
}