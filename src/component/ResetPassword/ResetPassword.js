import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Navbar />
      <Container className="mt-5 col-lg-4">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <Form.Text className="text-muted">
              {formik.errors.password}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formGridLastName">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter password again"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <Form.Text className="text-muted">
              {formik.errors.confirmPassword}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer fixed />
    </>
  );
};

export default ResetPassword;
