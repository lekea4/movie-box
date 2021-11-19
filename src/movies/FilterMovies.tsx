import { Field, Form, Formik } from "formik";
import { genreDTO } from "../genres/genres.model";
import Button from "../utils/Button";

export default function FilterMovies() {
  const initialValues: filterMoviesForm = {
    title: "",
    genreId: 0,
    upcomingRelease: false,
    inCinemas: false,
  };
  const genres: genreDTO[] = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Comedy" },
  ];

  return (
    <>
      <h3>Filter Movies</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {(formikProps) => (
          <Form>
            <div className="row gx-3 align-items-center">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title of Movie"
                  {...formikProps.getFieldProps("title")}
                />
              </div>
              <div className="col-auto">
                <select
                  className="form-select"
                  {...formikProps.getFieldProps("genreId")}
                >
                  <option value="0">---Select Genre---</option>
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-auto">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    id="upcomingReleases"
                    name="upcomingReleases"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="upcomingReleases"
                  >
                    Upcoming Releases
                  </label>
                </div>
              </div>

              <div className="col-auto">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    id="inCinemas"
                    name="inCinemas"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="upcomingReleases"
                  >
                    In Cinemas
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <Button
                  className="btn btn-primary"
                  onClick={() => formikProps.submitForm()}
                >
                  Filter
                </Button>

                <Button
                  className="btn btn-danger ms-3"
                  onClick={() => formikProps.setValues(initialValues)}
                >
                  Clear
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface filterMoviesForm {
  title: string;
  genreId: number;
  upcomingRelease: boolean;
  inCinemas: boolean;
}
