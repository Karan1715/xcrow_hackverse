import React from "react";
import { Row, Col, Button } from "antd";
import logo from "../assets/logo_3_2.png";
import ReactRotatingText from "react-rotating-text";
import { useNavigate } from "react-router-dom";
import { APP_DESC } from "../util/constants";
import { CheckCircleOutlined, CheckCircleTwoTone } from "@ant-design/icons";

const CHECKLIST_ITEMS = [
  "Escrows as Service request page hosting on IPFS",
  "Completed escrows deal saved on Smart Contracts",
  "Clash free arbitary agreements connected soon",
];

function Home(props) {
  const navigate = useNavigate();

  const goToCreate = () => {
    navigate("/create");
  };
  return (
    <div className="hero-section">
      <Row>
        <Col span={12}>
          <div className="hero-slogan-section">
            <div className="hero-slogan">
              <p>
                {APP_DESC} for&nbsp;
                <ReactRotatingText
                  items={["Traders", "Merchants", "Finance"]}
                />
                .
              </p>
            </div>
            <br />
            <Button type="primary" size="large" onClick={goToCreate}>
              Create Xcrows request
            </Button>
            <br />
            {/* // "#eb2f96" */}
            {CHECKLIST_ITEMS.map((item, i) => {
              return (
                <p>*
                  &nbsp;
                  {item}
                </p>
              );
            })}
            <br />

        
          </div>
        </Col>
        <Col span={12}>
          <img src={logo} className="hero-image" />
        </Col>
      </Row>
    </div>
  );
}

Home.propTypes = {};

export default Home;
