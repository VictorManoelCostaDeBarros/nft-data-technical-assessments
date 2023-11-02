import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async search(@Query('search') search) {
    try {
      const movies = await this.moviesService.fetchMovies(search);

      return movies;
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }
}
