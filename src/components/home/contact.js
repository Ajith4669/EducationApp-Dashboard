import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;

function Contact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container">
        <div className="title">
          <h2>Get in Touch</h2>
        </div>
        <Form>
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please enter your full name!",
              },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please give your E-mail!",
              },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="mobile"
            rules={[
              {
                type: "number",
              },
            ]}
          >
            <Input placeholder="Mobile" />
          </Form.Item>
          <Form.Item name="location">
            <Input placeholder="Location" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Checkbox>I agree with terms and conditions</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
