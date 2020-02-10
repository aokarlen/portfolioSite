import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  ListGroupItem,
  ListGroup,
  CardFooter,
  Button
} from "reactstrap";

class CoinSection extends React.Component {
  render() {
    return (
      <section id="plans" className="section section-lg section-coins">
        <img
          alt="..."
          className="path"
          src={require("../../assets/img/path3.png")}
        />
        <Container>
          <Row>
            <Col md="4">
              <hr className="line-info" />
              <h1>
                Choose the coin{" "}
                <span className="text-info">that fits your needs</span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card className="card-coin card-plain">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("../../assets/img/bitcoin.png")}
                  />
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Light Coin</h4>
                      <span>Plan</span>
                      <hr className="line-primary" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>50 messages</ListGroupItem>
                      <ListGroupItem>100 emails</ListGroupItem>
                      <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-simple" color="primary">
                    Get plan
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-coin card-plain">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("../../assets/img/etherum.png")}
                  />
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Dark Coin</h4>
                      <span>Plan</span>
                      <hr className="line-success" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>150 messages</ListGroupItem>
                      <ListGroupItem>1000 emails</ListGroupItem>
                      <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-simple" color="success">
                    Get plan
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-coin card-plain">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center img-fluid"
                    src={require("../../assets/img/ripp.png")}
                  />
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h4 className="text-uppercase">Bright Coin</h4>
                      <span>Plan</span>
                      <hr className="line-info" />
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>350 messages</ListGroupItem>
                      <ListGroupItem>10K emails</ListGroupItem>
                      <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center">
                  <Button className="btn-simple" color="info">
                    Get plan
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default CoinSection;
