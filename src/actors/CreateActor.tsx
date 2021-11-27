import axios from "axios";
import { useState } from "react";
import { urlActors } from "../endpoints";
import ActorForm from "./ActorForm";
import { actorCreationDTO } from "./actors.model";
import { convertActorToFormData } from "../utils/formDataUtils";
import { useHistory } from "react-router";

export default function CreateActor() {
  const [errros, setErrors] = useState<string[]>([]);
  const history = useHistory();
  async function create(actor: actorCreationDTO) {
    try {
      const formData = convertActorToFormData(actor);
      await axios({
        method: "post",
        url: urlActors,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      history.push("/actors");
    } catch (error: any) {
      if (errros && error.response) {
        setErrors(error.response.data);
      }
    }
  }
  return (
    <>
      <h3>Create Actor</h3>
      <ActorForm
        model={{ name: "", dateOfBirth: undefined }}
        onSubmit={async (values) => await create(values)}
      />
    </>
  );
}
