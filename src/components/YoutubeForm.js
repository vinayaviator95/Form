import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/youtubeForm.css";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: {
    facebook: "",
    instagram: "",
  },
  phoneNumber: ["", ""],
};

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Invaled email format")
    .required("This field is required"),
  channel: Yup.string().required("This field is required"),
  comments: Yup.string().required("This field is required"),
});

const onSubmit = (value) => {
  console.log(value, "value");
};

const YoutubeForm = () => {
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
          placeholder="Enter your name"
        />
        <div className="errors-content">
          {/* errormessage with custome component for renderting the error */}
          <ErrorMessage name="name" component={TextError} />
        </div>
        <label className="yt-label" htmlFor="email">
          E-mail
        </label>
        <Field className="yt-input" type="email" id="email" name="email" />
        {/* we can passs any element in the component to wrap it with error message to the compoennt */}
        <ErrorMessage name="email" component="Div" />

        <label className="yt-label" htmlFor="channel">
          Channel
        </label>
        <Field className="yt-input" type="text" name="channel" id="channel" />
        {/* Showing error with method renderor prop pattern */}
        <ErrorMessage name="channel">
          {(errorMsg) => {
            return <div className="errors-content">{errorMsg}</div>;
          }}
        </ErrorMessage>
        <div>
          <label htmlFor="facbook">Facebook</label>
          <Field type="text" id="facbook" name="address.facebook" />
          <label htmlFor="instagram">Instagram</label>
          <Field type="text" id="instagram" name="address.instagram" />
        </div>
        <div>
          <label htmlFor="PrimaryNum">Primary Number</label>
          <Field type="text" id="PrimaryNum" name="phoneNumber[0]" />
          <label htmlFor="SecondryNum">Secondry Number</label>
          <Field type="text" id="SecondryNum" name="phoneNumber[1]" />
        </div>

        <Field as="textarea" name="comments" id="comments" />
        <button type="submit" className="yt-btn" onClick={() => {}}>
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
