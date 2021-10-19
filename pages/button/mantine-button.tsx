import { NextPage } from "next";
import React from "react";
import { Button } from "@mantine/core";

const Page: NextPage<any> = ({ userAgent }) => (
  <main>
    Your user agent: {userAgent}
    <Button color="red">Red button</Button>
  </main>
);

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Page;
