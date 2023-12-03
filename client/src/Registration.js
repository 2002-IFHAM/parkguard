import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import "./App.css";

function Registration() {
  const initialValues = {
    phoneNumber: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:8083/auth", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        console.log(data);
      }
    });
  };

  return (
    <div className="container">
      <div className="about">
        <span className="title">PARKGAURD</span>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="registrationform">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>PhoneNumber: </label>
            <ErrorMessage name="phoneNumber" component="span" />
            <Field
              autoComplete="off"
              id="inputphonenumber"
              name="phoneNumber"
              placeholder="(Ex. 91XXXXXXXX)"
            />

            <label>Password: </label>
            <ErrorMessage name="password" component="span" />
            <Field
              autoComplete="off"
              type="password"
              id="inputCreatePost"
              name="password"
              placeholder="Your Password..."
            />

            <div className="buttonGroup">
              <button type="submit">Register</button>
              <Link to="/login">
                <button className="loginButton">Login</button>
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Registration;
