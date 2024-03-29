import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  Row,
  Col,
  CardTitle,
  Container
} from "reactstrap";

class ThirdPart extends React.Component {
  render() {
    return (
      <section className="section section-lg section-safe">
        <img
          alt="..."
          className="path"
          src={require("../../assets/img/path5.png")}
        />
        <Container>
          <Row className="row-grid justify-content-between">
            <Col md="5">
              <img
                alt="..."
                className="img-fluid floating"
                src={require("../../assets/img/chester-wade.jpg")}
              />
              <Card className="card-stats bg-danger">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">100%</CardTitle>
                      <p className="card-category text-white">Safe</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-info">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">573 K</CardTitle>
                      <p className="card-category text-white">
                        Satisfied customers
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-default">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">10 425</CardTitle>
                      <p className="card-category text-white">Business</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <div className="px-md-5">
                <hr className="line-success" />
                <h3>Awesome features</h3>
                <p>
                  The design system comes with three pre-built pages to help
                  you get started faster. You can change the text and images
                  and you're good to go.
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-vector" />
                      </div>
                      <div className="ml-3">
                        <h6>Carefully crafted components</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-tap-02" />
                      </div>
                      <div className="ml-3">
                        <h6>Amazing page examples</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <div className="ml-3">
                        <h6>Super friendly support team</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ThirdPart;
