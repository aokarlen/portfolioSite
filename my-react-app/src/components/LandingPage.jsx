import React from "react";

// core components
import Navbar from "./Navbars/Navbar.jsx";
import PageHeader from "./PageHeader/PageHeader.jsx";
import AboutSection from "./AboutSection/AboutSection.jsx"
import ChartSection from "./ChartSection/ChartSection.jsx"
import CoinSection from "./CoinSection/CoinSection.jsx";
import Footer from "./Footer/Footer.jsx";

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="wrapper">
          <PageHeader />
          <AboutSection />
          <ChartSection />
          <CoinSection />
          <Footer />
        </div>
      </>
    );
  }
}

export default LandingPage;
