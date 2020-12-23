import { Col, Row, Select, DatePicker, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CakeAnimate from "../../../components/CakeAnimate/CakeAnimate";
import moment from 'moment'

function SetDate() {
  const { Option } = Select;
  const  history  = useHistory();
  const [occasion, setOccasion ] = useState("");
  const [ date, setDate ] = useState("");
  const [ time, setTime ] = useState("");

  function handleOccasion(value) {
    console.log(`selected ${value}`);
    setOccasion(value)
  }

  function handleDate(value) {
    console.log(`selected ${value}`);
    setDate(value)
  }

  function handleTime(value) {
    console.log(`selected ${value}`);
    setTime(value)
  }
  function handleSubmit(value) {
    if(occasion === ''){
      return
    }
    if(date === ''){
      return
    }
    if(time === ''){
      return
    }
    history.push("/custom-cake")
  }

  const isDisable = occasion && date && time
  

  const occasionMenu = [
    {
      occasion: "Birthday",
    },
    {
      occasion: "Anniversary",
    },
    {
      occasion: "Special Festival",
    },
    {
      occasion: "Congratulations",
    },
    {
      occasion: "Others...",
    },
  ];

  const format = "HH:mm";

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().add(1, 'day').endOf('day');
  }

  return (
    <Row style={{ height: "100vh" }}>
      <Col
        span={14}
        style={{
          margin: "18vh auto",
        }}
      >
        <CakeAnimate />
        <div>
        <div style={{width: "290px", height: "2px", borderTop: "2px solid black", margin: "0 auto "}} />

          <div
            className="form-header"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "black",
              fontWeight: "700",
              fontSize: "1rem",
            }}
          >
            select DATE and location
          </div>
          <div style={{width: "290px", height: "2px", borderTop: "2px solid black", margin: "0 auto 40px auto"}} />

          <Row justify="center">
            <Col span={10}>
                  <Select
                    className="input-style"
                    placeholder="What’s the occasion"
                    onChange={handleOccasion}
                    bordered={true}
                  >
                    {occasionMenu.map((name, idx) => (
                      <Option key={idx} value={name.occasion}>
                        {" "}
                        {name.occasion}
                      </Option>
                    ))}
                  </Select>
                  <DatePicker
                    className="input-style"
                    style={{ marginTop: "20px" }}
                    disabledDate={disabledDate}
                    value={date}
                    onChange={handleDate}
                  />
                  <TimePicker
                    format={format}
                    className="input-style"
                    style={{ marginTop: "20px" }}
                    placeholder="Delivery Time"
                    value={time}
                    disabledHours={()=> [0,1,2,3,4,5,6,7,8,22,23,24]}
                    onChange={handleTime}
                    minuteStep={15}
                    hideDisabledOptions={true}
                    showNow={false}
                  />
                  
                    <div
                      className={isDisable ? 'btn-style' :  'btn-disable'}
                      style={{ marginTop: "40px", borderRadius: "20px"}}
                      onClick={handleSubmit}
                    >
                      Let's BAKE A CAKE
                    </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default SetDate;
