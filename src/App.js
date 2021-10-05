import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "./components/TextInput";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 5) {
    errors.name = "Name must be at least 5 characters";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 5) {
    errors.lastName = "Last Name must be at least 5 characters";
  }
  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{ name: "", lastName: "", email: "" }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <label>Name</label>
        <TextInput name="nombre" label="Nombre" />
        <Field name="name" type="text" />
        <Field name="select" as="select">
          <option value="chanchitofeliz">Chanchito feliz</option>
          <option value="chanchitotriste">Chanchito triste</option>
        </Field>
        <ErrorMessage name="name" />
        <br />
        <label>Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <br />
        <label>Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}

export default App;
