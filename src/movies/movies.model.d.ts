import { genreDTO } from "../genres/genres.model";
import { movieDTO } from "../movies/movies.model";
import { actorMovieDTO } from "../actors/actors.model";
import { movieCinemaDTO } from "../moviecinemas/moviecinemas.model";

export interface movieDTO {
  id: number;
  title: string;
  poster: string;
  inCinemas: boolean;
  trailer: string;
  summary?: string;
  releaseDate: Date;
  genres: genreDTO[];
  movieCinemas: movieCinemaDTO[];
  actors: actorMovieDTO[];
}

export interface movieCreationDTO {
  title: string;
  inCinemas: boolean;
  trailer: string;
  summary?: string;
  releaseDate?: Date;
  poster?: File;
  posterURL?: string;
  genresIds?: number[];
  movieCinemasIds?: number[];
  actors?: actorMovieDTO[];
}

export interface landingPageDTO {
  inCinemas?: movieDTO[];
  upcomingReleases?: movieDTO[];
}

export interface moviesPostGetDTO {
  genres: genreDTO[];
  movieCinemas: movieCinemaDTO[];
}

export interface moviePutGetDTO {
  movie: movieDTO;
  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];
  selectedMovieCinemas: movieCinemaDTO[];
  nonSelectedMovieCinemas: movieCinemaDTO[];
  actors: actorMovieDTO[];
}
