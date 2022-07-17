/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <h3 className="text-center">Our Values</h3>
          <br></br><br></br>
          <Container>
            <div class="card-deck">
              <Card
                color="danger"
                style={{ Width: '10 px' }}
              >
                <CardBody>

                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-bulb-63" />
                    </div>
                    <div className="description">
                      <b>
                        <h4
                          className="info-title" style={{ color: "white" }}
                        >INNOVATIVE</h4>
                      </b> <br></br>
                      <p>
                        <font color="white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </font>
                      </p>
                    </div>
                  </div>

                </CardBody>
              </Card>
              <Card
                color="success"
                style={{ Width: '18 px' }}
              >
                <CardBody>
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-bank" />
                    </div>
                    <div className="description">
                      <b>
                        <h4
                          className="info-title" style={{ color: "white" }}
                        >LOYALTY</h4>
                      </b> <br></br>
                      <p>
                        <font color="white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </font>
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card
                color="info"
                style={{ Width: '18 px' }}
              >
                <CardBody>
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-vector" />
                    </div>
                    <div className="description">
                      <b>
                        <h4
                          className="info-title" style={{ color: "white" }}
                        >RESPECT</h4>
                      </b> <br></br>
                      <p>
                        <font color="white">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </font>
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contact Us</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" required></Input>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" required></Input>
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    required
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
