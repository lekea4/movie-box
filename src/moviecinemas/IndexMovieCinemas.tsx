import { urlMovieCinemas } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { movieCinemaDTO } from "./movieCinema.model";

export default function IndexMovieTheaters() {
  return (
    <IndexEntity<movieCinemaDTO>
      url={urlMovieCinemas}
      createURL="moviecinemas/create"
      title="Movie Cinemas"
      entityName="Movie Cinema"
    >
      {(entities, buttons) => (
        <>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {entities?.map((entity) => (
              <tr key={entity.id}>
                <td>{buttons(`moviecinemas/edit/${entity.id}`, entity.id)}</td>
                <td>{entity.name}</td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </IndexEntity>
  );
}
