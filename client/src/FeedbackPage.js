import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackPage = () => {
  const initialValues = {
    vehicleNo: "",
    feedbackText: "", // Fix: Correct field name here
  };

  const validationSchema = Yup.object({
    vehicleNo: Yup.string().required("Vehicle number is required"),
    feedbackText: Yup.string().required("Feedback is required"),
  });

  const onSubmit = (values) => {
    // Handle your feedback submission logic here
    console.log("Feedback submitted:", values);
    // You can make an API call or perform other actions based on your needs
  };

  return (
    <div>
      <h1>Feedback Page</h1>
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
            <label htmlFor="feedbackText">Feedback:</label>
            <Field as="textarea" id="feedbackText" name="feedbackText" />
            <ErrorMessage
              name="feedbackText"
              component="div"
              className="error"
            />
          </div>

          <div>
            <button type="submit">Submit Feedback</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FeedbackPage;
