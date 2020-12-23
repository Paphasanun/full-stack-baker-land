import { EnvironmentOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Form, Select, Checkbox, } from 'antd'
import React, { useState } from 'react'

function AddressForm() {
    const [district, setDistrict ] = useState("");
    const [subDistrict, setSubDistrict ] = useState("");
    const { Option } = Select;

    const districtMenu = [
        {
          district: "Option 1",
        },
        {
          district: "Option 2",
        },
      ];

    const subDistrictMenu = [
        {
          subDistrict: "Option 1",
        },
        {
        subDistrict: "Option 2",
        },
      ];

      function handleDistrict(value) {
        console.log(`selected ${value}`);
        setDistrict(value)
      }
      function handleSubDistrict(value) {
        console.log(`selected ${value}`);
        setSubDistrict(value)
      }

    return (
        <Row justify="center" >
            <Col span={20} style={{paddingTop: "10px"}}>
            <Form
          name="register"
        >
            <Row>
                <Col span={5}><h4 style={{textTransform: "capitalize", fontSize: "0.9em",}}>Resiver's name</h4></Col>
                <Col span={18}  style={{
                width: "100%",
                height: "11px",
                borderBottom: "1px solid #141414",
                margin: "0 auto"
              }}></Col>
                </Row>
             
            <Row style={{marginTop: "8px"}}>
                <Col span={12} style={{paddingRight: "5px"}}> <Form.Item
            name="firstname"
            
            rules={[
              {
                required: true,
                message: "Please input your firstname!",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First name" />
          </Form.Item></Col>
                <Col span={12} style={{paddingLeft: "5px"}}> <Form.Item
            name="lastname"
            
            rules={[
              {
                required: true,
                message: "Please input your lastname!",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last name" />
          </Form.Item></Col>
            </Row>
         
          <Form.Item
            name="phone_number"
            
            rules={[
              {
                required: true,
                message: "Please input your phone number",
              },
            ]}
          >
            <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone number" />
          </Form.Item>

          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your address",
              },
            ]}
          >
           <Input
          prefix={<EnvironmentOutlined className="site-form-item-icon" />}
          placeholder="Address details"
        />
          </Form.Item>
        <Row>
            <Col span={12} style={{paddingRight: "5px",}}>
                
            <Select
                    className="address-selector"
                    placeholder="District"
                    onChange={handleDistrict}
                    bordered={true}
                    style={{ width: "100%"}}
                  >
                    {districtMenu.map((value, idx) => (
                      <Option key={idx} value={value.district}>
                        {value.district}
                      </Option>
                    ))}
                  </Select>
                 </Col>
            <Col span={12} style={{paddingLeft: "5px",}}>
            <Select
                    className="address-selector"
                    placeholder="Sub-district"
                    onChange={handleSubDistrict}
                    bordered={true}
                    style={{ width: "100%"}}
                  >
                    {subDistrictMenu.map((value, idx) => (
                      <Option key={idx} value={value.subDistrict}>
                        {value.subDistrict}
                      </Option>
                    ))}
                  </Select>
                </Col>
        </Row>
        <Form.Item name="default" valuePropName="checked" style={{marginTop: "10px",}}>
          <Checkbox>Set to default address</Checkbox>
        </Form.Item>
          
        </Form>
            </Col>
        </Row>
    )
}

export default AddressForm
