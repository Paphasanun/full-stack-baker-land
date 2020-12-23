import {
    DeleteOutlined,
    EditOutlined,
  EnvironmentOutlined,
  FormOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Row, Tooltip } from "antd";
import React from "react";

function MyAddress() {
  const address = {
    firstname: "Paphasanun",
    lastname: "Tatiyathitima",
    address:
      "46/448 624 Condolete Seri-Thai Rd. Klongchan Bangkapi Bangkok Thailand 10240",
    phone_number: "0943953630",
  };

  return (
    <div>
      <Row justify="center" style={{marginTop: "10px", marginBottom: "30px"}}>
        <Col
          span={24}
          style={{ border: "1px solid black", cursor: "pointer", transition: "ease-in-out 0.3s" }}
          className="address-container"
        >
          <div
            style={{
              border: "1px dashed black",
              margin: "6px",
              padding: "10px 0",
            }}
          >
            <div
              className="line-dashed"
              style={{
                height: "74%",
                position: "absolute",
                left: "54px",
                opacity: "0.5",
              }}
            />
            <Row justify="center">
              <Col span={22}>
                <UserOutlined />
                <p
                  className="cart-address-text"
                  style={{
                    fontWeight: "500",
                    fontSize: "1em",
                    textTransform: "capitalize",
                  }}
                >
                  {address.firstname} {address.lastname}
                </p>
              </Col>
            </Row>
            <Row justify="center">
              <Col
                span={22}
                style={{
                  alignItems: "flex-start",
                  display: "flex",
                  marginTop: "6px",
                }}
              >
                <EnvironmentOutlined style={{ marginTop: "2px" }} />
                <p className="cart-address-text" style={{ marginLeft: "25px" }}>
                  {address.address}
                </p>
              </Col>
            </Row>
            <Row justify="center">
              <Col
                span={22}
                style={{
                  marginTop: "6px",
                }}
              >
                <PhoneOutlined />
                <p className="cart-address-text">({address.phone_number})</p>
              </Col>
            </Row>
            <Row justify="end">
              <Col
                span={2}
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  cursor: "pointer",
                  fontSize: "0.7em",
                }}
              >
                <Tooltip title="Delete">
                <DeleteOutlined style={{marginRight: "6px", padding: "2px", border: "1px solid black"}} />
                </Tooltip>
                <Tooltip title="Edit">
                <EditOutlined style={{padding: "2px", border: "1px solid black"}} />
                </Tooltip>
                
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MyAddress;
