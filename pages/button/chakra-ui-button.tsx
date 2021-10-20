import { NextPage } from "next";
import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

const Page: NextPage<any> = ({ userAgent }) => (
  <main>
    Your user agent: {userAgent}
    <br />
    <ChakraProvider>
      <Button colorScheme="teal">Hello World</Button>;
    </ChakraProvider>
  </main>
);

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Page;
