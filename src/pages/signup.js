import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { FooterContainer } from "../containers/footer";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              Value={firstName}
              onChange={({ target }) => setFirstName(target.Value)}
            />
            <Form.Input
              placeholder="Email Address"
              Value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.Value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              autoComplete="off"
              Value={password}
              onChange={({ target }) => setPassword(target.Value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign In now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
