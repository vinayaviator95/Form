import React from "react";
import { useFormik } from "formik";
import "../styles/youtubeForm.css";

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

const onSubmit = (value) => {
  console.log(value, "value");
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.errors, "Form errors");
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
        />
        {formik.errors.name && (
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
        />
        {formik.errors.email && (
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
        />
        {formik.errors.channel && (
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
