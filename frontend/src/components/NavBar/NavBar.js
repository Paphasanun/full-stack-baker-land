import {
  ShoppingCartOutlined,
  ShoppingFilled,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Col, Drawer, Row } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LocalStorageService from "../../services/LocalStorageService";
import Cart from "../Cart/Cart";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div
      style={{
        height: "54px",
        backgroundColor: "#F6F3EE",
        borderBottom: "1px solid #141414",
        position: "fixed",
        marginTop: "0px",
        marginBottom: "auto",
        width: "100vw",
        boxShadow: "1px 1px 12px rgba(48, 41, 28, 0.35)",
        zIndex: "1",
      }}
    >
      <Row>
        <Col span={4} style={{ borderRight: "1px solid #141414" }}>
          <Link to="/">
            <h2 className="logo-nav-text">bakerland</h2>
          </Link>
        </Col>

        <Col span={11} />

        <Col
          span={4}
          style={{
            borderRight: "1px solid #141414",
            borderLeft: "1px solid #141414",
          }}
        >
          <Link to="/set-date">
            <p className="menu-nav-text">Bake a cake</p>
          </Link>
        </Col>
        {LocalStorageService.getRole() !== "GUEST" ? (
          <Col
            span={4}
            style={{ borderRight: "1px solid #141414" }}
            className="dropdown"
          >
            <Link to="#" className="dropbtn">
              <p className="menu-nav-text ">menu</p>
            </Link>
            <div className="dropdown-content">
              <Link to="#">
                <div className="dropdown-list">
                  <p className="menu-nav-text">My Order</p>
                </div>
              </Link>
              <Link to="#">
                <div className="dropdown-list">
                  <p className="menu-nav-text">Wish list</p>
                </div>
              </Link>
              <Link
                to="#"
                onClick={() => {
                  LocalStorageService.removeToken();
                  window.location.reload();
                }}
              >
                <div className="dropdown-list">
                  <p className="menu-nav-text">Log out</p>
                </div>
              </Link>
            </div>
          </Col>
        ) : (
          <Col
            span={4}
            style={{ borderRight: "1px solid #141414" }}
            className="dropdown"
          >
            <Link to="/login" className="dropbtn">
              <p className="menu-nav-text ">log in</p>
            </Link>
          </Col>
        )}
        <Col
          span={1}
          style={{
            textAlign: "center",
            fontSize: "1.3rem",
            cursor: "pointer",
            paddingTop: "8px",
          }}
          onClick={showDrawer}
        >
          <ShoppingFilled />
        </Col>
        <Drawer
          title={
            <div
              style={{ textTransform: "uppercase", letterSpacing: "0.15em" }}
            >
              <ShoppingCartOutlined style={{ marginRight: "10px" }} />
              Cart
            </div>
          }
          placement="right"
          width={400}
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <Cart />
        </Drawer>
      </Row>
    </div>
  );
}

export default Navbar;
