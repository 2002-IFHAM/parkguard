// ComplaintPage.js

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ComplaintPage = () => {
  const initialValues = {
    vehicleNo: "",
    complaintText: "",
  };

  const validationSchema = Yup.object({
    vehicleNo: Yup.string().required("Vehicle number is required"),
    complaintText: Yup.string().required("Complaint text is required"),
  });

  const onSubmit = (values) => {
    // Handle your complaint submission logic here
    console.log("Complaint submitted:", values);
    // You can make an API call or perform other actions based on your needs
  };

  return (
    <div>
      <h1>Complaint Page</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="vehicleNo">Vehicle No:</label>
            <Field type="text" id="vehicleNo" name="vehicleNo" />
            <ErrorMessage name="vehicleNo" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="complaintText">Complaint:</label>
            <Field as="textarea" id="complaintText" name="complaintText" />
            <ErrorMessage
              name="complaintText"
              component="div"
              className="error"
            />
          </div>

          <div>
            <button type="submit">Submit Complaint</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ComplaintPage;
