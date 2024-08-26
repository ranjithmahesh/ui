import {
  AlertTriangle,
  Camera,
  EyeIcon,
  EyeOff,
  FileText,
  Globe,
  List,
  PieChart,
  CircleGauge as Speedometer,
  Settings2,
  Trash2,
  Users,
  Volume2,
  XCircle,
} from "lucide-react";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import NavBar from "./NavBar";

function Settings() {
  const [formData, setFormData] = useState({
    firstName: "Sudhir",
    secondName: "Sukrutharaj",
    email: "sudhir.sukrutharaj@chargbackzero.com",
    API: "kiouyutydrfygh", // API input is now blank by default
    phone: "09945878179",
    company: "Chargebackzero",
    country: "United States",
    webSiteName1: "irm.chargebackzero.com",
    webSiteName2: "irm-chargebackzero.web.app",
  });

  const [showAPI, setShowAPI] = useState(false); // State to toggle API visibility
  const [showHeading, setShowHeading] = useState("Account information");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleAPIVisibility = () => {
    setShowAPI(!showAPI);
  };

  // const data = [
  //   { icon: <Check />, name: "Premium Features", className: "text-success" },
  //   { icon: <LaptopMinimal />, name: "Website Validation" },
  //   { icon: <TriangleAlert />, name: "Risk Scoring", className: "text-danger" },
  //   { icon: <FileText />, name: "PDF Report" },
  //   { icon: <Shield />, name: "Case Manager", className: "text-danger" },
  // ];

  const data = [
    { icon: <Volume2 />, name: "Custom Volume" },
    { icon: <Speedometer />, name: "360 requests per minute" }, // or <CircleGauge />
    { icon: <List />, name: "Includes Business Plan, plus:" },
    { icon: <Camera />, name: "Website Screenshot API" },
    { icon: <Users />, name: "Similar Company API" },
    { icon: <Settings2 />, name: "Website Techstack API" }, // or <Settings2 />
    { icon: <PieChart />, name: "Website Visitor Traffic Analysis API" },
    {
      icon: <AlertTriangle />,
      name: "Risk Scoring (high, moderate, and low)",
      // className: "text-danger",
    },
    { icon: <FileText />, name: "Service-level agreement (SLA)" },
    { icon: <Globe />, name: "Multi-site license" }, // or <MapPin />
    { icon: <XCircle />, name: "Cancel any time" },
  ];
  const SettingsData = [
    "Account information",
    "Change Email",
    "Change Password",
    "Upgrade Plan",
  ];

  return (
    <NavBar>
      <div className="m-4">
        <div className="d-flex mb-3 justify-content-around w-75">
          {SettingsData.map((item, index) => (
            <h6
              key={index}
              onClick={() => setShowHeading(item)}
              className={showHeading === item ? "text-black" : "text-primary"}
              style={{ cursor: "pointer" }}
            >
              {item}
            </h6>
          ))}
        </div>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label className="fw-bold">Name</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="me-2  border-black"
                  placeholder="First Name"
                />
                <Form.Control
                  type="text"
                  name="secondName"
                  className="me-2  border-black"
                  value={formData.secondName}
                  onChange={handleInputChange}
                  placeholder="Second Name"
                />
              </div>
            </Form.Group>
            <div className="mt-2">
              <p className="fw-semibold my-0">Plan Details – Enterprise Plan</p>
              <p className="fw-semibold">491821</p>
            </div>
            <div className="mt-2">
              <p className="fw-semibold my-0">Plan type : Monthly</p>
              <p className="fw-semibold">Plan Price : $299.99</p>
            </div>
            <div className="mt-2">
              <p className="fw-semibold text-decoration-underline my-0">
                Plan Highlights
              </p>
              <Row>
                <Col className="fw-semibold">
                  <ul className="list-unstyled">
                    {data.slice(0, 6).map((item, i) => (
                      <li key={i} className="d-flex align-items-center mb-2">
                        <span className={item.className}>{item.icon}</span>
                        <span className="ms-2">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col className="fw-semibold">
                  <ul className="list-unstyled">
                    {data.slice(6, 11).map((item, i) => (
                      <li key={i} className="d-flex align-items-center mb-2">
                        <span className={item.className}>{item.icon}</span>
                        <span className="ms-2">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Form.Group>
                <Form.Label className="fw-bold">Email</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    type="text"
                    name="email"
                    value={formData.email}
                    className="  border-black"
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                </div>
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label className="fw-bold">API Key</Form.Label>
                <div className="d-flex align-items-center">
                  <Form.Control
                    type={showAPI ? "text" : "password"} // Toggle input type between text and password
                    name="API"
                    value={formData.API}
                    onChange={handleInputChange}
                    placeholder="API"
                    className="  border-black"
                  />
                  <div
                    className="ms-2"
                    style={{ cursor: "pointer" }}
                    onClick={toggleAPIVisibility}
                  >
                    {showAPI ? <EyeOff /> : <EyeIcon />}
                  </div>
                  <div className="ms-2" style={{ cursor: "pointer" }}>
                    <Trash2 />
                  </div>
                </div>
              </Form.Group>
              <p className="mt-3" style={{ fontSize: "14px" }}>
                Classify website with over 70 website categories for easier
                analysis of unknown sites.
              </p>
            </div>
          </Col>
          <Col md={5}>
            <Form.Group as={Row} className="mb-3 mt-1">
              <Form.Label column sm="2" className="fw-bold">
                Phone
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="  border-black"
                />
              </Col>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="fw-bold">Company</Form.Label>
              <div>
                <Form.Control
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                  className="  border-black"
                />
              </div>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="fw-bold">Country</Form.Label>
              <div>
                <Form.Control
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="  border-black"
                />
              </div>
            </Form.Group>
            <h6 className="mt-4">Domains</h6>
            <p
              className="fw-semibold"
              style={{ fontSize: "10px", lineHeight: "20px" }}
            >
              Please place only one website per input box without http(s). www
              or / Subdomains are optional. You can add or remove sites at any
              time. Domains are used to validate JavaScript tools are not being
              used by unauthorized domains which would unfairly use your account
              credits.
            </p>
            <Form.Group className="mt-5">
              <div>
                <Form.Control
                  type="text"
                  name="webSiteName1"
                  value={formData.webSiteName1}
                  onChange={handleInputChange}
                  placeholder="Website 1"
                  className="  border-black"
                />
              </div>
            </Form.Group>
            <Form.Group className="mt-3">
              <div>
                <Form.Control
                  type="text"
                  name="webSiteName2"
                  value={formData.webSiteName2}
                  onChange={handleInputChange}
                  placeholder="Website 2"
                  className="  border-black"
                />
              </div>
            </Form.Group>
          </Col>
        </Row>
      </div>
    </NavBar>
  );
}

export default Settings;
