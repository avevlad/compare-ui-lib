import { NextPage } from "next";
import React from "react";
import { Button } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

const Page: NextPage<any> = ({ userAgent }) => (
  <main>
    Your user agent: {userAgent}
    <br />
    <Button>blueprintjs4 button</Button>
  </main>
);

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Page;
