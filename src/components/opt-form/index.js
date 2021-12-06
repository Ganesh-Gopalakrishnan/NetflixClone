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
        src="https://d3qe1qo9ekumsv.cloudfront.net/shzy%2Fpreview%2F43622704%2Fmain_large.png?response-content-disposition=inline%3Bfilename%3D%22main_large.png%22%3B&response-content-type=image%2Fpng&Expires=1638735583&Signature=KjivIBpbg2BYC5T7lvxCBWumAHwKxzBK24PkzK2hkVAnlp5gcmpvftPtCjffiaaDQORemOq9ItmzzaWDJJ6~f3pfqhz8MS-EW9~P3w1tmlBgeW1QmCGyyPeQ7cwVkaqjVFKD6W8izrZyQLvSVGGb7~xLFOzlU-2GJ-eqEKQwGYZe0nmAa-KgyMFpIJQiXYPVhfdGDevIVJ~csEP01l8gYwqF-uDQaAkiROXo14hNTJzcA-UH0pfhWoTPFNYHLODSQQh1N4AiRzCuOkzjvBGnPl19gAfQ8xliFOKmomd1lvXLOEmfSShpwtgaKbiYYpQPimbzq5cjnL2mfeEWJRXbbQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
        alt="Try Now"
      />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};
