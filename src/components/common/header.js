import React, { useState } from "react";
import { Anchor, Drawer, Button, Menu, Image } from "antd";
import { DatabaseFilled } from "@ant-design/icons";
const { Link } = Anchor;
function Header() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <a>Exam Prep</a>
        </div>
        <div className="mobileHidden">
          <Anchor>
            <Link href="#dashboard" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button
            style={{ backgroundColor: "#5b5b5b", border: 0 }}
            onClick={showDrawer}
            icon={<DatabaseFilled style={{ fontSize: "25px" }} />}
          ></Button>

          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor>
              <Link href="#dashboard" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
export default Header;
