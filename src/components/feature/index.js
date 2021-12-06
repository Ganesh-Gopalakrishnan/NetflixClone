import React from "react";
import { Container, Title, Subtitle } from "./styles/feature";

export default function Feature({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Feature.Subtitle = function FeatureSubtitle({ children, ...restprops }) {
  return <Subtitle {...restprops}>{children}</Subtitle>;
};
