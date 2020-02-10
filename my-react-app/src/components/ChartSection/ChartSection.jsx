import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  CardTitle,
} from "reactstrap";

import bigChartData from "../../variables/charts.jsx";

class ChartSection extends React.Component {
  render() {
    return (
      <section id="performance" className="section section-lg">
        <img
          alt="..."
          className="path"
          src={require("../../assets/img/path4.png")}
        />
        <img
          alt="..."
          className="path"
          src={require("../../assets/img/path4.png")}
        />
        <Col md="12">
          <Card className="card-chart card-plain">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <hr className="line-info" />
                  <h5 className="card-category">Total Investments</h5>
                  <CardTitle tag="h2">Performance</CardTitle>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="chart-area">
                <Line
                  data={bigChartData.data}
                  options={bigChartData.options}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </section>
    );
  }
}

export default ChartSection;
