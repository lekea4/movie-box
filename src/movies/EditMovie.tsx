import { movieCinemaDTO } from "../cinemas/movieCinema.model";
import { genreDTO } from "../genres/genres.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {
  const nonSelectedGenres: genreDTO[] = [{ id: 3, name: "Action" }];
  const selectedGenres: genreDTO[] = [{ id: 1, name: "Comedy" }];

  const nonSelectedMovieCinemas: movieCinemaDTO[] = [
    { id: 1, name: "Filmhouse" },
    { id: 2, name: "Genesis" },
    { id: 3, name: "SilverBird Cinemas" },
  ];

  const selectedMovieCinemas: movieCinemaDTO[] = [{ id: 1, name: "Filmhouse" }];

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "Toy Story",
          inCinemas: true,
          trailer: "url",
          releaseDate: new Date("2019-01-01T00:00:00"),
        }}
        onsubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={selectedGenres}
        nonSelectedMovieCinemas={nonSelectedMovieCinemas}
        selectedMovieCinemas={selectedMovieCinemas}
      />
    </>
  );
}
