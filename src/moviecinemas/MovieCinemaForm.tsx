import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { movieCinemaCreationDTO } from "./movieCinema.model";
import * as Yup from "yup";

import coordinateDTO from "../utils/coordinate.model";
import MapField from "../forms/MapField";

export default function MovieCinemaForm(props: movieCinemaForm) {
  function transformCoordinates(): coordinateDTO[] | undefined {
    if (props.model.latitude && props.model.longitude) {
      const response: coordinateDTO = {
        lat: props.model.latitude,
        lng: props.model.longitude,
      };
      return [response];
    }
    return undefined;
  }
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        _name: Yup.string()
          .required("This field is required")
          .firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Name" field="name" />
          <div style={{ marginBottom: "1rem" }}>
            <MapField
              latField="latitude"
              lngField="longitude"
              coordinates={transformCoordinates()}
            />
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
