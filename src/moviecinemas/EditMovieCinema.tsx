import { urlMovieCinemas } from "../endpoints";
import EditEntity from "../utils/EditEntity";
import MovieCinemaForm from "./MovieCinemaForm";
import { movieCinemaCreationDTO, movieCinemaDTO } from "./movieCinema.model";

export default function EditMovieTheater() {
  return (
    <EditEntity<movieCinemaCreationDTO, movieCinemaDTO>
      url={urlMovieCinemas}
      indexURL="/movietheaters"
      entityName="Movie Theater"
    >
      {(entity, edit) => (
        <MovieCinemaForm
          model={entity}
          onSubmit={async (values) => await edit(values)}
        />
      )}
    </EditEntity>
  );
}
