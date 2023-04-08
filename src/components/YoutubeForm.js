import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/youtubeForm.css";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
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
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   // validate,
  //   validationSchema,
  // });
  // console.log(formik.touched, "Form touched");
  return (
    <Formik
      className="youtube-wrap"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="youtube-form">
        <label className="yt-label" htmlFor="name">
          Name
        </label>
        <Field
          className="yt-input"
          type="text"
          id="name"
          name="name"
          // onChange={formik.handleChange}
          // value={formik.values.name}
          // onBlur={formik.handleBlur}
        />
        {/* {formik.touched.name && formik.errors.name && (
          <div className="errors-content">{formik.errors.name}</div>
        )} */}
        <div className="errors-content">
          <ErrorMessage name="name" />
        </div>
        <label className="yt-label" htmlFor="email">
          E-mail
        </label>
        <Field className="yt-input" type="email" id="email" name="email" />
        <div className="errors-content">
          <ErrorMessage name="email" />
        </div>

        <label className="yt-label" htmlFor="channel">
          Channel
        </label>
        <Field className="yt-input" type="text" name="channel" id="channel" />
        <div className="errors-content">
          <ErrorMessage name="channel" />
        </div>

        <button type="submit" className="yt-btn" onClick={() => {}}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
