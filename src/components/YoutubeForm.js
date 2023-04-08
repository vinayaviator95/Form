import React from "react";
import { useFormik } from "formik";
import "../styles/youtubeForm.css";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const validate = (values) => {
  // validate function should return object and keys of that object is the name of the initialValues Objects and string value should be provided to the error
  // values.name, values.email, values.channel; its contains 3 values
  // errors.email, error.name, errors.channel
  // errors.email = "This field is required"
  let errors = {};
  if (!values.email) {
    errors.email = "This field is required";
  }
  if (!values.name) {
    errors.name = "This field is required";
  }
  if (!values.channel) {
    errors.channel = "This field is required";
  }
  return errors;
};
const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invaled email format")
    .required("This field is required"),
  channel: Yup.string().required("This field is required"),
});

const onSubmit = (value) => {
  console.log(value, "value");
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });
  console.log(formik.touched, "Form touched");
  return (
    <div className="youtube-wrap">
      <form onSubmit={formik.handleSubmit} className="youtube-form">
        <label className="yt-label" htmlFor="name">
          Name
        </label>
        <input
          className="yt-input"
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="errors-content">{formik.errors.name}</div>
        )}
        <label className="yt-label" htmlFor="email">
          E-mail
        </label>
        <input
          className="yt-input"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="errors-content">{formik.errors.email}</div>
        )}

        <label className="yt-label" htmlFor="channel">
          Channel
        </label>
        <input
          className="yt-input"
          type="text"
          name="channel"
          id="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />
        {formik.touched.channel && formik.errors.channel && (
          <div className="errors-content">{formik.errors.channel}</div>
        )}

        <button type="submit" className="yt-btn" onClick={() => {}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default YoutubeForm;
