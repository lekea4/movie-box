import MovieCinemaForm from "./MovieCinemaForm";

export default function CreateCinema() {
  return (
    <>
      <h3>Create Cinema</h3>
      <MovieCinemaForm
        model={{ name: "" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
