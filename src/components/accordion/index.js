import React, { useState, useContext, createContext } from "react";
import {
  Body,
  Title,
  Header,
  Container,
  Inner,
  Item,
  Frame
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img
          src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997911.png?token=exp=1638792709~hmac=9ca9dbc7acbdb06d280fd9ae5c40691a"
          // src="/images/icons/close-slim.png"
          alt="Close"
        />
      ) : (
        <img
          src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997933.png?token=exp=1638792601~hmac=34296e855cca40abc1927a231a312898"
          // src="/images/icons/add.png"
          alt="Open"
        />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
