import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { movieCinemaCreationDTO } from "./movieCinema.model";
import * as Yup from "yup";
import Map from "../utils/Map";

export default function MovieCinemaForm(props: movieCinemaForm) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        _name: Yup.string()
          .required("This field is required")
          .firstLetterUppercase(),
        get name() {
          return this._name;
        },
        set name(value) {
          this._name = value;
        },
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Name" field="name" />
          <div style={{ marginBottom: "1rem" }}>
            <Map />
          </div>
          <Button disabled={formikProps.isSubmitting} type="submit">
            Save
          </Button>
          <Link className="btn btn-secondary" to="/cinenas">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface movieCinemaForm {
  model: movieCinemaCreationDTO;
  onSubmit(
    values: movieCinemaCreationDTO,
    actions: FormikHelpers<movieCinemaCreationDTO>
  ): void;
}
