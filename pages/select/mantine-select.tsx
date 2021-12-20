import { NextPage } from "next";
import React from "react";
import { Select } from "@mantine/core";

const Page: NextPage<any> = ({ userAgent }) => (
  <main>
    Your user agent: {userAgent}
    <Select
      id="select"
      placeholder="Pick one"
      label="Your favorite framework/library"
      required
      data={[
        { value: "react", label: "React" },
        { value: "ng", label: "Angular" },
        { value: "svelte", label: "Svelte" },
        { value: "vue", label: "Vue" },
      ]}
    />
  </main>
);

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Page;
