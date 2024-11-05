import { AppService } from './app.service';
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { GameService } from './games/games.service';  


@Controller('games') 
export class AppController {
  constructor(private readonly gameService: GameService) {}


  @Get()
  getAllGames() {
    return this.gameService.getAllGames();
  }

  @Post()
  createGame(@Body() data: { name: string; image: string; image_back: string }) {
    return this.gameService.createGame(data);
  }

  @Delete(':id')
  deleteGame(@Param('id') id: number) {
    return this.gameService.deleteGame(id);
  }
}