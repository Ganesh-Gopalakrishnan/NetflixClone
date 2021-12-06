import React from "react";
import { Container, Input, Button, Text } from "./styles/opt-form";

export default function OptForm({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restprops }) {
  return <Input {...restprops} />;
};

OptForm.Button = function OptFormButton({ children, ...restprops }) {
  return (
    <Button {...restprops}>
      {children}{" "}
      <img
        src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        alt="Try Now"
      />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};
