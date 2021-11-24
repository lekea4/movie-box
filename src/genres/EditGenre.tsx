import { urlGenres } from "../endpoints";
import EditEntity from "../utils/EditEntity";
import GenreForm from "./GenreForm";
import { genreCreationDTO, genreDTO } from "./genres.model";

export default function EditGenre() {
  return (
    <>
      <EditEntity<genreCreationDTO, genreDTO>
        url={urlGenres}
        entityName="Genres 2"
        indexURL="/genres"
      >
        {(entity, edit) => (
          <GenreForm
            model={entity}
            onSubmit={async (value) => {
              //when form is posted
              await edit(value);
            }}
          />
        )}
      </EditEntity>
    </>
  );
}
