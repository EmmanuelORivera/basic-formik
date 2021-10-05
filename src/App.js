import { Formik, Form, Field, ErrorMessage } from "formik";
import Checkbox from "./components/Checkbox";
import TextInput from "./components/TextInput";
import Select from "./components/Select";
import Radio from "./components/Radio";

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
  if (!values.radio) {
    errors.radio = "Required";
  }
  return errors;
};

function App() {
  return (
    <Formik
      initialValues={{ name: "", lastName: "", email: "", radio: "" }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="name" label="Name" />
        <br />
        <TextInput name="lastName" label="Last Name" />
        <br />
        <TextInput name="email" label="Email" type="email" />
        <Select label="Learning" name="learning">
          <option value="">Select a favorite technologie</option>
          <option value="react">React</option>
          <option value="typescript">Typescript</option>
          <option value="node">Node</option>
        </Select>
        <Checkbox name="accept">Accept terms and conditions</Checkbox>
        <Radio name="radio" value="react" label="react" />
        <Radio name="radio" value="typescript" label="typescript" />
        <Radio name="radio" value="node" label="node" />
        <ErrorMessage name="radio" />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}

export default App;
