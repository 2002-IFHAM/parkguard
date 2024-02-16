import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import "./App.css";

function Registration() {
  const initialValues = {
    phoneNumber: "",
    password: "",
  };

  let navigate = useNavigate();

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
        navigate("/details");
      }
    });
  };

  return (
    <div className="container">
      <div className="registrationform">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label htmlFor="phoneNumber">PhoneNumber:</label>
            <Field
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="(Ex. 91XXXXXXXX)"
            />
            <ErrorMessage name="phoneNumber" component="span" />

            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Your Password..."
            />
            <ErrorMessage name="password" component="span" />

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
