import Icon, {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DeleteOutlined,
  HeartFilled,
  LeftOutlined,
  ShoppingFilled,
} from "@ant-design/icons";
import { Col, Row, Tabs, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cake from "./../../../images/cake.png";
import cake02 from "./../../../images/cake-02.png";
import axios from "axios";

function CustomCake() {
  const { TabPane } = Tabs;
  const [heart, setHeart] = useState("#c5b59b");
  const [data, setData] = useState([]);
  const [shape, setShape] = useState(0);
  const [size, setSize] = useState(0);
  const [flour, setFlour] = useState(0);
  const [sweetness, setSweetness] = useState(0);
  const [layer, setLayer] = useState(0);
  const [flavor, setFlavor] = useState(0);
  const [filling, setFilling] = useState(0);
  const [addOnFilling, setAddOnFilling] = useState(0);
  const [frosting, setFrosting] = useState(0);
  const [dressing, setDressing] = useState(0);
  const [topping, setTopping] = useState(0);
  const [totalFilter, setTotalFilter] = useState({});

  useEffect(() => {
    axios.get("/cake-detail").then((res) => {
      setData(res.data);
    });
  }, []);

  const filterTabs = {
    tab1: "Shape",
    tab2: "Size",
    tab3: "Flour",
    tab4: "Sweetness",
    tab5: "Layer",
    tab6: "Flavor",
    tab7: "Filling",
    tab8: "Add-on Filling",
    tab9: "Frosting",
    tab10: "Dressing",
    tab11: "Topping",
  };

  const selected = [
    {
      category: "Shape",
      name: "tall",
      price: 120,
    },
    {
      category: "Size",
      name: "2 pounds",
      price: 100,
    },

    {
      category: "Flour",
      name: "Butter",
      price: 0,
    },
    {
      category: "Sweetness",
      name: "50%",
      price: 0,
    },
  ];

  const sum = (a, b) => a + b;

  return (
    <Row>
      <Col style={{ margin: "13vh auto 0 auto", height: "100vh" }} span={20}>
        <Row>
          <Col span={2} />
          <Col span={3}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Link to="#">
                <div className="sm-btn-style">
                  <ArrowLeftOutlined />
                </div>
              </Link>
              <Link to="#">
                <div className="sm-btn-style">
                  <ArrowRightOutlined />
                </div>
              </Link>
              <Link to="#">
                <div className="sm-btn-style">
                  <DeleteOutlined />
                </div>
              </Link>
            </div>
          </Col>
          <Col
            span={14}
            style={{
              height: "56vh",
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <div
              className="cake"
              style={{ margin: "0px auto", height: "400px" }}
            >
              <img
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "auto",
                }}
                src={cake}
              />
              <img
                onDoubleClick={() => {
                  setShape(!shape);
                }}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  position: "absolute",
                  left: "102px",
                  top: "10px",
                  display: shape ? "none" : "yes",
                }}
                src={cake02}
              />
            </div>
          </Col>
          <Col
            span={3}
            style={{
              display: "flex",
              alignItems: "center",
              height: "80px",
              justifyContent: "center",
              padding: "10px",
              border: "1px dashed black",
              paddingTop: "30px",
              backgroundColor: "#E5D5BB",
              boxShadow: "inset 1px 1px 6px rgba(0, 0, 0, 0.35)",
              borderRadius: "60px",
            }}
          >
            <h1
              style={{
                fontSize: "3em",
                marginRight: "8px",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.35)",
                letterSpacing: "0.035em",
              }}
            >
              {Object.keys(totalFilter).reduce(
                (sum, e) => Number(sum) + Number(totalFilter[e].price),
                0
              )}
            </h1>
            <h3
              style={{
                fontSize: "1.2em",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.35)",
                paddingTop: "8px",
              }}
            >
              ฿
            </h3>
          </Col>
        </Row>

        {/* --------------------------------------------Select Tools------------------------------------------ */}
        <Row>
          <Col span={2} />
          <Col
            span={20}
            className="form-container"
            style={{ height: "140px", margin: "0 auto" }}
          >
            <Row>
              <Col span={18}>
                <Tabs defaultActiveKey="0" size="small">
                  {Object.keys(data).map((category, idx) => (
                    <TabPane
                      tab={
                        <Tooltip title={category}>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <span className="dot"></span>
                            <p className="tab-text">{category}</p>
                          </div>
                        </Tooltip>
                      }
                      key={idx}
                    >
                      <Row>
                        <Col
                          span={23}
                          style={{ margin: "0 auto", display: "flex" }}
                        >
                          {data[category].map((recipe) => (
                            <Tooltip
                              placement="bottom"
                              title={`${recipe.name} : +${recipe.price} ฿`}
                              onClick={() =>
                                setTotalFilter((preState) => ({
                                  ...preState,
                                  [category]: recipe,
                                }))
                              }
                            >
                              <div className="filter-btn">
                                <div className="filter-img-wrap">
                                  <img
                                    className="filter-img"
                                    src={recipe.img}
                                  />
                                </div>
                              </div>
                            </Tooltip>
                          ))}
                        </Col>
                      </Row>
                    </TabPane>
                  ))}
                </Tabs>
              </Col>
              <Col span={6}>
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    left: "-6px",
                  }}
                >
                  <div className="line-dashed"></div>
                  <div
                    className="line-solid"
                    style={{ marginLeft: "4px" }}
                  ></div>
                </div>

                <div className="details-tab">Details</div>
                <Row>
                  <Col span={24}>
                    <table className="table-scroll">
                      <thead>
                        <tr>
                          <th style={{ width: "80%" }}>Selected</th>
                          <th
                            style={{ textAlign: "end", marginRight: "0.8em" }}
                          >
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody className="body-half-screen">
                        {Object.keys(totalFilter).map((fitler, idx) => (
                          <tr span={4} key={idx}>
                            <tr>
                              <td style={{ width: "68%" }}>
                                {fitler} : {totalFilter[fitler].name}
                              </td>
                              <td style={{ textAlign: "end", width: "32%" }}>
                                +{totalFilter[fitler].price}฿
                              </td>
                            </tr>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={2} />
        </Row>
        {/* --------------------------------------------Select Tools------------------------------------------ */}
        <Row>
          <Col span={20} style={{ margin: "10px auto 0 auto" }}>
            <Row>
              <Col span={2}>
                <div className="btn-style-light">
                  <LeftOutlined /> back
                </div>
              </Col>
              <Col span={16}></Col>
              <Col span={6}>
                <Row
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Col span={2}>
                    <div
                      style={{
                        textAlign: "end",
                        marginRight: "6px",
                        cursor: "pointer",
                        fontSize: "1.1em",
                      }}
                    >
                      <HeartFilled
                        style={{ color: heart }}
                        onClick={() => {
                          setHeart("black");
                        }}
                      />
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="btn-style-light"> Add to cart</div>
                  </Col>
                  <Col span={10}>
                    <div
                      className="btn-style-light"
                      style={{ backgroundColor: "#333333", color: "wheat" }}
                    >
                      <ShoppingFilled style={{ marginRight: "4px" }} /> buy now
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CustomCake;
