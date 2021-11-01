import { Button } from "antd";
import { NextPage } from "next";
import React from "react";
import "antd/dist/antd.css";

const Page: NextPage<any> = ({ userAgent }) => (
  <main>
    Your user agent: {userAgent}
    <br />
    <Button>antd button</Button>
  </main>
);

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Page;
