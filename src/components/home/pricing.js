import React from "react";
import { List, Card, Button } from "antd";

const data = [
  {
    title: "Basic",
    content: [
      {
        price: "Rs.999",
        class: "Weekend classes",
        user: "1 user",
        support: "24/7 support",
        backup: "Safe, Practice one exam in week",
        access: "Access from anywhere",
      },
    ],
  },
  {
    title: "Premium",
    content: [
      {
        price: "Rs.1900",
        class: "Weekly classes",
        user: "5 users",
        support: "24/7 support",
        backup: "Safe, Practice three exams in week",
        access: "Access from anywhere",
      },
    ],
  },
  {
    title: "Enterprise",
    content: [
      {
        price: "Rs.2600",
        class: "All day access",
        user: "15 users",
        support: "24/7 support",
        backup: "Safe,Attend exam whenever you want",
        access: "Access from anywhere",
      },
    ],
  },
];

function Pricing() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container">
        <div className="title">
          <h1>Choose a plan</h1>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>
                <p>{item.content[0].price}</p>
                <p>{item.content[0].class}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <Button type="primary" size="large">
                  Get Started
                </Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Pricing;
