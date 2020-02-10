import React from "react";
import ThirdPart from "./ThirdPart.jsx";
import FirstPart from "./FirstPart.jsx";
import SecondPart from "./SecondPart.jsx";

class ChartSection extends React.Component {
  render() {
    return (
      <div id="about" className="about-section">
        <FirstPart />
        <SecondPart />
        <ThirdPart />
      </div>
    );
  }
}

export default ChartSection;
