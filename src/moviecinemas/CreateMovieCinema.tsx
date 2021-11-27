import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlMovieCinemas } from "../endpoints";
import DisplayErrors from "../utils/DisplayErrors";
import { movieCinemaCreationDTO } from "./movieCinema.model";
import MovieCinemaForm from "./MovieCinemaForm";

export default function CreateMovieCinema() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);

  async function create(movieCinema: movieCinemaCreationDTO) {
    try {
      await axios.post(urlMovieCinemas, movieCinema);
      history.push("/moviecinemas");
    } catch (error: any) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }

  return (
    <>
      <h3>Create Movie Cinema</h3>
      <DisplayErrors errors={errors} />
      <MovieCinemaForm
        model={{ name: "" }}
        onSubmit={async (values) => await create(values)}
      />
    </>
  );
}
