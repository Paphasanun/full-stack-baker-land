import React, { useState } from "react";
import { Row, Col, Button, Form, Input, notification } from "antd";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import axios from "../../../config/axios";
import { BASE_BACKEND_URL } from "../../../config/constants";
import { Link, withRouter } from "react-router-dom";

const layout = {};

function Register(props) {
  const [fileName, setFileName] = useState("");

  const onFinish = ({ username, password, phoneNumber, email }) => {
    axios
      .post("/users/register", {
        username,
        password,
        email,
        phone_number: phoneNumber,
      })
      .then((res) => {
        notification.success({
          description: "Signup successfully",
        });
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        notification.error({
          description: "Something went wrong.",
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
        style={{ margin: "20vh", height: "68%" }}
      >
        <div className="form-header">register</div>
        <Form
          style={{ width: "100%", padding: "40px 60px 20px 60px" }}
          {...layout}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Please input your Phone Number",
              },
            ]}
          >
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Phone Number"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Row justify="center" style={{ marginTop: "10px" }}>
            <Button type="primary" htmlType="submit" className="btn-style">
              Register
            </Button>
            <span
              style={{
                width: "100%",
                height: "1px",
                borderTop: "1px solid black",
                margin: "30px 0 15px 0",
              }}
            ></span>
            <span style={{ color: "black" }}>
              or{" "}
              <Link to="/login">
                <h4
                  style={{
                    display: "inline",
                    textTransform: "capitalize",
                    color: "black",
                  }}
                >
                  {" "}
                  log in{" "}
                </h4>
              </Link>
            </span>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default withRouter(Register);
