import React from "react";
import { Button } from "antd";
import { Carousel } from "antd";

const items = [
  {
    key: "1",
    title: "Exam Preparation Site for Students",
    content:
      "Our innovative Examination Practice site  make student to learn fast, and effortless. Say goodbye to the boring room class methods and embrace the future to new learning",
  },
  {
    key: "2",
    title: "Work better together",
    content:
      "Collaborate and achieve your goals as a team. Join forces, share ideas and leverage each others strengths to reach new heights together",
  },
  {
    key: "3",
    title: "The best app to increase your Learning skills",
    content:
      "Boost your learning and practice your exam with our cutting-edge app. Stay focused, get more done in less time and achieve your goals faster than ever before",
  },
];

function Dashboard() {
  return (
    <div id="dashboard" className="dashboardBlock">
      <Carousel>
        {items.map((item) => {
          return (
            <div key={item.key}>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="buttonHolder">
                  <Button type="primary" size="large">
                    Learn More
                  </Button>
                  <a href="https://youtu.be/O2oD2atv4T8">
                    <Button style={{ backgroundColor: "grey" }} size="large">
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Dashboard;
