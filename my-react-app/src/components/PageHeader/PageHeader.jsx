import React from "react";
import {
  Button,
  Row,
  Col
} from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div id="home" className="page-header">
        <img
          alt="..."
          className="path"
          src={require("../../assets/img/blob.png")}
        />
        <img
          alt="..."
          className="path2"
          src={require("../../assets/img/path2.png")}
        />
        <img
          alt="..."
          className="shapes triangle"
          src={require("../../assets/img/triunghiuri.png")}
        />
        <img
          alt="..."
          className="shapes wave"
          src={require("../../assets/img/waves.png")}
        />
        <img
          alt="..."
          className="shapes squares"
          src={require("../../assets/img/patrat.png")}
        />
        <img
          alt="..."
          className="shapes circle"
          src={require("../../assets/img/cercuri.png")}
        />
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
              <h1 className="text-white">
                We keep your coin <br />
                <span className="text-white">secured</span>
              </h1>
              <p className="text-white mb-3">
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my
                whole heart. I am alone, and feel...
              </p>
              <div className="btn-wrapper mb-3">
                <p className="category text-success d-inline">
                  From 9.99%/mo
                </p>
                <Button
                  className="btn-link"
                  color="success"
                  href="#home"
                  onClick={e => e.preventDefault()}
                  size="sm"
                >
                  <i className="tim-icons icon-minimal-right" />
                </Button>
              </div>
              <div className="btn-wrapper">
                <div className="button-container">
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#home"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#home"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                  <Button
                    className="btn-icon btn-simple btn-round btn-neutral"
                    color="default"
                    href="#home"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="4" md="5">
              <img
                alt="..."
                className="img-fluid"
                src={require("../../assets/img/etherum.png")}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default PageHeader;
