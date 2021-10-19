import { NextPage } from "next";
import React from "react";
import Button from "@mui/material/Button";

const Page: NextPage<any> = ({ userAgent }) => (
  <main>
    Your user agent: {userAgent}
    <Button variant="contained">Hello World</Button>;
  </main>
);

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Page;
