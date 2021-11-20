import MovieForm from "./MovieForm";

export default function CreateMovie() {
  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm
        model={{ title: "", inCinemas: false, trailer: "" }}
        onsubmit={(values) => console.log(values)}
      />
    </>
  );
}
