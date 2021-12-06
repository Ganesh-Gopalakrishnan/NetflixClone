import React from "react";
import { Container, Input, Break, Button, Text } from "./styles/opt-form";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}{" "}
      <img
        src="https://dc705.4shared.com/img/suPZdu5miq/s24/17d8fbab630/chevron-right?async&rand=0.6069299285076668"
        alt="Try Now"
      />
    </Button>
  );
};

OptForm.Break = function OptBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
