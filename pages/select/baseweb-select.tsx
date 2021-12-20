import { NextPage } from "next";
import React from "react";
// import { Client, Server } from "styletron-engine-monolithic";
import { Client, Server } from "styletron-engine-atomic";
import { LightTheme, BaseProvider } from "baseui";
import { Select } from "baseui/select";
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

const Page: NextPage<any> = ({ userAgent }) => {
  const [value, setValue] = React.useState([{ label: "Aqua", id: "#00FFFF" }]);

  return (
    <main>
      <StyletronProvider value={styletron} debug={undefined}>
        <BaseProvider theme={LightTheme}>
          Your user agent: {userAgent}
          <br />
          <Select
            options={[
              { label: "AliceBlue", id: "#F0F8FF" },
              { label: "AntiqueWhite", id: "#FAEBD7" },
              { label: "Aqua", id: "#00FFFF" },
              { label: "Aquamarine", id: "#7FFFD4" },
              { label: "Azure", id: "#F0FFFF" },
              { label: "Beige", id: "#F5F5DC" },
            ]}
            value={value}
            placeholder="Select color"
            onChange={(params) => setValue(params.value as any)}
          />
        </BaseProvider>
      </StyletronProvider>
    </main>
  );
};

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Page;
