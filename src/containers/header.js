import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="https://raw.githubusercontent.com/Ganesh-Gopalakrishnan/NetflixClone_1/4e92142479ba53e6aac60818e621470c25df1da9/images/misc/logo.svg"
          alt="Netflix"
        />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
