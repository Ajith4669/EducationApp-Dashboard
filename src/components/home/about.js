import React from "react";

import { Row, Col } from "antd";

const items = [
  {
    key: "1",
    title: "High Performance",
    content:
      "Elevate your learning with high-performance technology. Enjoy seamless, efficient and experiences.",
  },
  {
    key: "2",
    title: "Easy Undestanding Design",
    content:
      "Simplify your aesthetic with design. Clean, modern, and minimal design elements.",
  },
  {
    key: "3",
    title: "Simplified Workflow",
    content:
      "Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease.",
  },
];

function About() {
  return (
    <div id="about" className="block aboutBlock ">
      <div className="container">
        <div className="title">
          <h2 style={{ fontSize: "28px" }}>About Us</h2>
        </div>
        <div>
          <p>
            Technology has revolutionized the way we learn and work, providing
            us with new and innovative ways to solve problems, improve
            efficiency, and make our lives easier. From artificial intelligence
            to cloud computing, the rapid advancements in technology are
            changing the way we interact with the world around us. As we
            continue to push the boundaries of what is possible, we can expect
            new and exciting developments that will further shape the future of
            our world. Whether it's in healthcare, education, or any other
            industry, technology has the power to make a positive impact and
            create a better future for all of us.
          </p>
        </div>
        <Row gutter={[24, 24]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default About;
