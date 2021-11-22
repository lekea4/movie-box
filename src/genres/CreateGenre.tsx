import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import DisplayErrors from "../utils/DisplayErrors";
import { urlGenres } from "../endpoints";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";

export default function CreateGenre() {
  const history = useHistory();
  const [errors] = useState<string[]>([]);
  async function create(genre: genreCreationDTO) {
    try {
      await axios.post(urlGenres, genre);
      history.push("/genres");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h3>Create Genre</h3>
      <DisplayErrors errors={errors} />
      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await create(value);
        }}
      />
    </>
  );
}
