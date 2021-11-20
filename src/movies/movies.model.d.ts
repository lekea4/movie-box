export interface movieDTO {
  id: number;
  title: string;
  poster: string;
}
export interface movieCreationDTO {
  title: string;
  inCinemas: boolean;
  trailer: string;
  releaseDate?: Date;
  poster?: file;
  posterUrl?: string;
  genresIds?: number[];
  movieCinemasIds?: number[];
}

export interface landingPageDTO {
  inTheaters?: movieDTO[];
  upcomingReleases?: movieDTO[];
}
