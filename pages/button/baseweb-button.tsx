import { NextPage } from "next";
import React from "react";
// import { Client, Server } from "styletron-engine-monolithic";
import { Client, Server } from "styletron-engine-atomic";
import { LightTheme, BaseProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";

const getHydrateClass = () =>
  document.getElementsByClassName("_styletron_hydrate_");

export const styletron =
  typeof window === "undefined"
    ? new Server()
    : new Client({
        // @ts-ignore
        hydrate: getHydrateClass(),
      });

export const debug = void 0;

import { Button } from "baseui/button";

const Page: NextPage<any> = ({ userAgent }) => (
  <main>
    <StyletronProvider value={styletron} debug={undefined}>
      <BaseProvider theme={LightTheme}>
        Your user agent: {userAgent}
        <br />
        <Button kind="primary">Hello World</Button>
      </BaseProvider>
    </StyletronProvider>
  </main>
);

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Page;
