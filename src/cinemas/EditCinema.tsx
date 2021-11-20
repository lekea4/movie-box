import MovieCinemaForm from "./MovieCinemaForm";

export default function EditCinema() {
  return (
    <>
      <h3>Edit Cinema</h3>
      <MovieCinemaForm
        model={{ name: "Filmhouse" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
