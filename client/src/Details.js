import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios"; // Don't forget to import Axios

const Details = () => {
  const initialValues = {
    userName: "",
    userEmail: "",
    carModel: "",
    carYear: "",
    carRegistrationNumber: "",
    plateNumber: "",
    chassisNumber: "",
    // Add more fields as needed
  };

  const onSubmit = (values) => {
    axios.post("http://localhost:8083/cardetails", values);
    // .then((response) => {
    //   // Handle the response if needed
    //   console.log('Server response:', response);
    // })
    // .catch((error) => {
    //   // Handle errors if the request fails
    //   console.error('Error submitting the form:', error);
    // });

    // Handle any additional form submission logic here
    console.log("Form submitted with values:", values);
  };

  const validate = (values) => {
    const errors = {};

    // Add your validation logic here
    if (!values.userName) {
      errors.userName = "Required";
    }

    // Add similar checks for other fields

    return errors;
  };

  return (
    <div>
      <h1>Car Verification Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form>
          <label htmlFor="userName">User Name:</label>
          <Field type="text" id="userName" name="userName" />
          <ErrorMessage name="userName" component="div" />

          <label htmlFor="userEmail">User Email:</label>
          <Field type="email" id="userEmail" name="userEmail" />
          <ErrorMessage name="userEmail" component="div" />

          <label htmlFor="carModel">Car Model:</label>
          <Field type="text" id="carModel" name="carModel" />
          <ErrorMessage name="carModel" component="div" />

          <label htmlFor="carYear">Car Year:</label>
          <Field type="text" id="carYear" name="carYear" />
          <ErrorMessage name="carYear" component="div" />

          <label htmlFor="carRegistrationNumber">Car Registration:</label>
          <Field
            type="text"
            id="carRegistrationNumber"
            name="carRegistrationNumber"
          />
          <ErrorMessage name="carRegistrationNumber" component="div" />

          <label htmlFor="plateNumber">Plate Number:</label>
          <Field type="text" id="plateNumber" name="plateNumber" />
          <ErrorMessage name="plateNumber" component="div" />

          <label htmlFor="chassisNumber">Chassis Number:</label>
          <Field type="text" id="chassisNumber" name="chassisNumber" />
          <ErrorMessage name="chassisNumber" component="div" />

          {/* Add more fields as needed */}

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Details;
