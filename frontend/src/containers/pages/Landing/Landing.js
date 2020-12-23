import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import cakeOutline from "./../../../images/cake-outline.png";


function Landing() {
  return (
    <Row>
      <Col span={24} style={{minHeight: "100vh", marginTop: "15vh"}}>
      <div style={{width: "100%", margin: "0 auto ", display: "flex", justifyContent: "center"}}><img src={cakeOutline} style={{width: "60%"}}/></div>
      </Col>
    </Row>
  );
}

export default Landing;
