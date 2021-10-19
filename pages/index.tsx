import type { NextPage } from "next";
import Head from "next/head";
import "@blueprintjs/core/lib/css/blueprint.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <ul>
          One button:
          <li>
            <a href="/button/blueprintjs4-button">blueprintjs4-button</a>
          </li>
          <li>
            <a href="/button/mantine-button">mantine-button</a>
          </li>
          <li>
            <a href="/button/material-ui-button">material-ui-button</a>
          </li>
          <li>
            <a href="/button/baseweb-button">baseweb-button</a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
