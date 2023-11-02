import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError } from 'rxjs';
import {
  SearchMovieOmdbapiResponse,
  SearchMovieResponseDto,
} from './dto/search-movie-response.dto';

@Injectable()
export class MoviesService {
  constructor(private httpService: HttpService) {}

  async fetchMovies(search: string): Promise<SearchMovieResponseDto> {
    return new Promise((resolve, reject) => {
      this.httpService
        .get<SearchMovieOmdbapiResponse>(
          `${process.env.OMDBAPI_ULR}/?apikey=${process.env.OMDBAPI_KEY}&t=${search}&plot=full`,
        )
        .pipe(
          catchError((err) => {
            console.log(err);
            reject('');
            throw new HttpException('Erro on movie search', 400);
          }),
        )
        .subscribe((response) => {
          resolve({
            title: response.data.Title,
            plot: response.data.Plot,
            actors: response.data.Actors,
            poster: response.data.Poster,
            metascore: response.data.Metascore,
          });
        });
    });
  }
}
