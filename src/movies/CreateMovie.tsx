import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlMovies } from "../endpoints";
import { genreDTO } from "../genres/genres.model";
import { movieCinemaDTO } from "../moviecinemas/movieCinema.model";
import DisplayErrors from "../utils/DisplayErrors";
import { convertMovieToFormData } from "../utils/formDataUtils";
import Loading from "../utils/Loading";
import MovieForm from "./MovieForm";
import { movieCreationDTO, moviesPostGetDTO } from "./movies.model";

export default function CreateMovie() {
  const [nonSelectedGenres, setNonSelectedGenres] = useState<genreDTO[]>([]);
  const [nonSelectedMovieCinemas, setNonSelectedMovieCinemas] = useState<
    movieCinemaDTO[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${urlMovies}/postget`)
      .then((response: AxiosResponse<moviesPostGetDTO>) => {
        setNonSelectedGenres(response.data.genres);
        setNonSelectedMovieCinemas(response.data.movieCinemas);
        setLoading(false);
      });
  }, []);

  async function create(movie: movieCreationDTO) {
    try {
      const formData = convertMovieToFormData(movie);
      const response = await axios({
        method: "post",
        url: urlMovies,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      history.push(`/movie/${response.data}`);
    } catch (error: any) {
      if (errors && error.response) setErrors(error.response.data);
    }
  }

  return (
    <>
      <h3>Create Movie</h3>
      <DisplayErrors errors={errors} />
      {loading ? (
        <Loading />
      ) : (
        <MovieForm
          model={{ title: "", inCinemas: false, trailer: "" }}
          onSubmit={async (values) => await create(values)}
          nonSelectedGenres={nonSelectedGenres}
          selectedGenres={[]}
          nonSelectedMovieCinemas={nonSelectedMovieCinemas}
          selectedMovieCinemas={[]}
          selectedActors={[]}
        />
      )}
    </>
  );
}
