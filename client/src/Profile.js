import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

function Profile() {
  const initialValues = {
    userName: "",
    userEmail: "",
    carModel: "",
    carYear: "",
    carRegistrationNumber: "",
    plateNumber: "",
    chassisNumber: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Assuming your server is running on http://localhost:8083
      const response = await axios.post(
        "http://localhost:8083/cardetails",
        values
      );
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor="userName">User Name:</label>
            <Field type="text" id="userName" name="userName" />
            <ErrorMessage name="userName" component="div" />
          </div>

          <div>
            <label htmlFor="userEmail">User Email:</label>
            <Field type="email" id="userEmail" name="userEmail" />
            <ErrorMessage name="userEmail" component="div" />
          </div>

          <div>
            <label htmlFor="carModel">Car Model:</label>
            <Field type="text" id="carModel" name="carModel" />
            <ErrorMessage name="carModel" component="div" />
          </div>

          <div>
            <label htmlFor="carYear">Car Year:</label>
            <Field type="number" id="carYear" name="carYear" />
            <ErrorMessage name="carYear" component="div" />
          </div>

          <div>
            <label htmlFor="carRegistrationNumber">
              Car Registration Number:
            </label>
            <Field
              type="text"
              id="carRegistrationNumber"
              name="carRegistrationNumber"
            />
            <ErrorMessage name="carRegistrationNumber" component="div" />
          </div>

          <div>
            <label htmlFor="plateNumber">Plate Number:</label>
            <Field type="text" id="plateNumber" name="plateNumber" />
            <ErrorMessage name="plateNumber" component="div" />
          </div>

          <div>
            <label htmlFor="chassisNumber">Chassis Number:</label>
            <Field type="text" id="chassisNumber" name="chassisNumber" />
            <ErrorMessage name="chassisNumber" component="div" />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Profile;
