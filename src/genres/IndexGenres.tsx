import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import Button from "../utils/Button";
import GenericList from "../utils/GenericList";
import { genreDTO } from "./genres.model";

export default function IndexGenres() {
  const [genres, setGenres] = useState<genreDTO[]>([]);
  useEffect(() => {
    axios
      .get(urlGenres)
      .then((response: AxiosResponse<genreDTO>) => console.log(response.data));
  }, []);
  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary" to="/genres/create">
        Create Genre
      </Link>
      <GenericList list={genres}>
        <table className="table table-striped">
          <thead>
            <th>Name</th>
            <th></th>
          </thead>
          <tbody>
            {genres?.map((genre) => (
              <tr key={genre.id}>
                <td>{genre.name}</td>
                <td>
                  <Link className="btn btn-success" to={`/genres/${genre.id}`}>
                    Edit
                  </Link>

                  <Button className="btn btn-danger">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GenericList>
    </>
  );
}
