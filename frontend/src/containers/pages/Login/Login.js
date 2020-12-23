import React from "react";
import { Button, Checkbox, Col, Form, Input, notification, Row } from "antd";
import axios from "../../../config/axios";
import LocalStorageService from "../../../services/LocalStorageService";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useHistory, useLocation } from "react-router-dom";

function Login(props) {
  const history = useHistory();

  const onFinish = (values) => {
    axios
      .post("/users/login", {
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        notification.success({
          description: "Login success.",
        });
        LocalStorageService.setToken(res.data.token);
        history.push("/set-date")
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: "Login failed.",
        });
      });
  };

  return (
    <Row justify="center" style={{ height: "100vh" }}>
      <Col
        xs={20}
        md={14}
        lg={9}
        className="form-container"
        style={{ margin: "30vh", height: "46%" }}
      >
        <div className="form-header">log in</div>
        <Form
          onFinish={onFinish}
          className="Form"
          style={{ padding: "40px 60px 20px 60px" }}
        >
          <Form.Item name="username">
            <Input
              style={{ width: "100%" }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Row justify="center">
            <Button htmlType="submit" className="btn-style">
              Log in
            </Button>
            <span
              style={{
                width: "100%",
                height: "1px",
                borderTop: "1px solid black",
                margin: "30px 0 20px 0",
              }}
            ></span>
            <span style={{ color: "black" }}>
              or{" "}
              <Link to="/register">
                <h4 style={{ display: "inline", textTransform: "capitalize" }}>
                  {" "}
                  Create Account{" "}
                </h4>
              </Link>
            </span>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
