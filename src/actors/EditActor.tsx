import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{
          name: "Tom Holland",
          dateOfBirth: new Date("1996-06-01T00:00:00"),

          pictureURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Tom_Holland_MTV_2018_%2802%29.jpg/330px-Tom_Holland_MTV_2018_%2802%29.jpg",
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
