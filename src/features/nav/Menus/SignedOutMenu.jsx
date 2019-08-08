import React from "react";
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({signIn}) => {
  return (
    <Menu.Item position="right" onClick={signIn}>
      <Button basic inverted content="Login"  />
      <Button
        basic
        inverted
        content="Registered"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
