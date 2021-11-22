import { movieCinemaDTO } from "../cinemas/movieCinema.model";
import { genreDTO } from "../genres/genres.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {
  const nonSelectedGenres: genreDTO[] = [
    { id: 1, name: "Comedy" },
    { id: 2, name: "Drama" },
    { id: 3, name: "Action" },
  ];

  const nonSelectedMovieCinemas: movieCinemaDTO[] = [
    { id: 1, name: "Filmhouse" },
    { id: 2, name: "Genesis" },
    { id: 3, name: "SilverBird Cinemas" },
  ];
  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm
        model={{ title: "", inCinemas: false, trailer: "" }}
        onsubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={[]}
        nonSelectedMovieCinemas={nonSelectedMovieCinemas}
        selectedMovieCinemas={[]}
        selectedActors={[]}
      />
    </>
  );
}
