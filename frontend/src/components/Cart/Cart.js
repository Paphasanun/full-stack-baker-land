import { Modal, Col, Row, Tooltip, Button, InputNumber, Input } from "antd";
import React, { useState } from "react";
import {
  CalendarOutlined,
  CreditCardOutlined,
  DeleteOutlined,
  EditOutlined,
  EnvironmentOutlined,
  FormOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AddressForm from "../AddressForm/AddressForm";
import MyAddress from "../MyAddress/MyAddress";
import cake from "./../../images/cake.png";

function Cart() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);

  const address = {
    firstname: "Paphasanun",
    lastname: "Tatiyathitima",
    address:
      "46/448 624 Condolete Seri-Thai Rd. Klongchan Bangkapi Bangkok Thailand 10240",
    phone_number: "0943953630",
  };

  const order = {
    date: "Mon. 24/12/2020, 14:20",
    total_price: "1,500",
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showModal2 = () => {
    setIsModal2Visible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCancel2 = () => {
    setIsModal2Visible(false);
  };

  const handleOk2 = () => {
    setIsModal2Visible(false);
  };

  function onChange(value) {
    console.log("changed", value);
  }

  const { TextArea } = Input;

  return (
    <Row justify="center">
      <Col span={24}>
        <div style={{ padding: "24px",}}>
          <Row>
            <Col
              span={24}
              style={{ border: "1px solid black", marginBottom: "10px" }}
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
                    height: "72%",
                    position: "absolute",
                    left: "47px",
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
                    <p
                      className="cart-address-text"
                      style={{ marginLeft: "25px", fontSize: "0.7rem" }}
                    >
                      {address.address} ({address.phone_number})
                    </p>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col span={22} style={{ marginTop: "4px" }}>
                    <CalendarOutlined style={{ marginTop: "2px" }} />
                    <p className="cart-address-text">{order.date}</p>
                  </Col>
                </Row>
                <Row justify="end">
                  <Col
                    span={2}
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      right: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <Tooltip title="Edit">
                      <FormOutlined onClick={showModal} />
                    </Tooltip>
                  </Col>
                  <Modal
                    title="MY ADDRESS"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    width={580}
                  >
                    <MyAddress />
                    <div
                      style={{ marginTop: "10px", marginBottom: "0" }}
                      className="new-address-btn"
                      onClick={showModal2}
                    >
                      <PlusOutlined /> Add new address
                    </div>
                  </Modal>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="new-address-btn" onClick={showModal2}>
                <PlusOutlined /> Add new address
              </div>
            </Col>
            <Modal
              title="address info."
              visible={isModal2Visible}
              onCancel={handleCancel2}
              width={580}
            >
              <AddressForm />
              <Row justify="center">
                {" "}
                <Col span={20} style={{ marginBottom: "20px" }}>
                  <Button
                    type="primary"
                    onClick={handleOk2}
                    className="btn-style"
                  >
                    submit
                  </Button>
                </Col>
              </Row>
            </Modal>
          </Row>
          <Row>
            <Col span={24} style={{ marginBottom: "20px" }}>
              <Row>
                <Col
                  span={8}
                  style={{
                    border: "1px solid black",
                    height: "106px",
                    padding: "6px",
                  }}
                >
                  <div
                    style={{
                      border: "1px dashed black",
                      height: "100%",
                      backgroundColor: "#e6dbc9",
                    }}
                  >
                    <img
                      src={cake}
                      style={{ objectFit: "cover", width: "100%" }}
                    />
                  </div>
                </Col>
                <Col span={16} style={{ paddingLeft: "20px" }}>
                  <div
                    style={{
                      position: "absolute",
                      right: "1px",
                      fontSize: "0.7em",
                      cursor: "pointer",
                    }}
                  >
                    <Tooltip title="Delete">
                      <DeleteOutlined
                        style={{
                          marginRight: "6px",
                          padding: "2px",
                          border: "1px solid black",
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Edit">
                      <EditOutlined
                        style={{ padding: "2px", border: "1px solid black" }}
                      />
                    </Tooltip>
                  </div>
                  <div>
                    <h4>Product Name</h4>
                    <p
                      style={{
                        fontSize: "0.8em",
                        maxWidth: "82%",
                        height: "42px",
                      }}
                    >
                      2 Pounds cake, 5 Layers Chocolate...
                    </p>
                    <Row>
                      <Col span={12}>
                        <InputNumber
                          min={1}
                          max={10}
                          defaultValue={1}
                          onChange={onChange}
                          size="small"
                        />
                      </Col>
                      <Col span={12}>
                        <h4
                          style={{
                            padding: "14px 5px 0 0",
                            fontSize: "1.4em",
                            textAlign: "end",
                            lineHeight: "0",
                          }}
                        >
                          1,500 ฿
                        </h4>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <div
                style={{
                  width: "100%",
                  borderBottom: "1px solid #666666",
                  marginTop: "16px",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <TextArea style={{maxHeight: "60px"}} rows={1} placeholder="Special notes..." />
            </Col>
          </Row>
        </div>
        <Row>
          <Col span={24} style={{ borderTop: "1px solid black", position: "fixed", bottom: "0px", width: "400px", backgroundColor: "#F6F3EE" }}>
            <div style={{ padding: "20px 24px 0 24px" }}>
              <Row style={{fontSize: "0.9em"}}>
                <Col span={12} style={{textAlign: "start"}}>Subtotal :</Col>
                <Col span={12} style={{textAlign: "end"}}>1,500 ฿</Col>
                </Row>
              <Row style={{fontSize: "0.9em"}}>
                <Col span={12} style={{textAlign: "start"}}>Shipping Fee :</Col>
                <Col span={12} style={{textAlign: "end"}}>20 ฿</Col>
                </Row>
              <Row style={{fontSize: "1.4em", fontWeight: "600", marginTop: "5px"}}>
                <Col span={12} style={{textAlign: "start"}}>Total Price :</Col>
                <Col span={12} style={{textAlign: "end"}}>1,520 ฿</Col>
                </Row>
              <div className="new-address-btn" style={{fontSize: "0.7rem", fontWeight: "500", letterSpacing: "0.15em",marginTop: "10px"}}>
                CHECKOUT
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Cart;
