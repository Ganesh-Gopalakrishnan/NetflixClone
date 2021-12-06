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
          src="https://dc572.4shared.com/img/7P2cylncea/s24/17d8fbabe00/close-slim?async&rand=0.5854346231548808"
          // src="/images/icons/close-slim.png"
          alt="Close"
        />
      ) : (
        <img
          src="https://dc572.4shared.com/img/Ur2vs7Haea/s24/17d8fbab248/add?async&rand=0.37898267811575526"
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
