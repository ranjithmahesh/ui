import React from "react";
import { Col, Container, InputGroup, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/auth/icon.png";
import logo1 from "../../assets/auth/logo1.png";
import logo2 from "../../assets/auth/logo2.png";
import logo3 from "../../assets/auth/logo3.png";
import logo4 from "../../assets/auth/logo4.png";
import logo6 from "../../assets/auth/logo6.png";

function Register() {
  const data = [
    { img: logo1, title: "Smart Categorization Technology" },
    { img: logo2, title: "Extract logos on the ﬂy" },
    { img: logo3, title: "Social Media Links Scraper" },
    { img: logo4, title: "Ranked Domains Recognition" },
    { img: logo6, title: "Find Competitors or Similar Domains" },
  ];

  return (
    <Container className="vh-100 d-flex align-items-center ">
      <Row className="w-100">
        {/* Left Column */}
        <Col md={6} className="text-start">
          <div className="d-flex flex-column align-items-start">
            <img src={logo} alt="ValidX Logo" className="mb-4" />
            <h2 className="fw-bold">ValidX</h2>
            <p className="mt-4 fw-medium">Get started with your account</p>
            <p>
              All-in-one domain data source. Get Website Logos, Company Data,
              Categorization, and much more from a URL or Email.
            </p>

            <Form className="w-100">
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="py-2 input-focus"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="E-Mail Address"
                  className="py-2 input-focus"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="py-2 input-focus"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  className="py-2 input-focus"
                />
              </InputGroup>
              <div className="mb-3">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-decoration-none "
                  style={{ color: "#420394" }}
                >
                  Sign in
                </Link>
              </div>
              <Button
                variant="primary"
                style={{ backgroundColor: "#420394" }}
                className="w-100 py-3"
              >
                Register
              </Button>
            </Form>
          </div>
        </Col>

        {/* Right Column */}
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center text-center"
        >
          <h5 style={{ marginTop: "180px" }}>
            The most accurate Content Classiﬁcation API
          </h5>
          <div className=" text-start  mt-1">
            {data.map((item, i) => (
              <div key={i} className="d-flex align-items-center mt-2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="me-2"
                  style={{ width: "25px" }}
                />
                <p className="mb-0">{item.title}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
