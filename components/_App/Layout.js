import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import { Analytics } from "@vercel/analytics/react";
import { HighlightInit } from "@highlight-run/next/client";
import { CONSTANTS } from "../../utils/highlightConstants";
import Zoho from "./Zoho";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Santepay: borderless money</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <HighlightInit
        // excludedHostnames={['localhost']}
        projectId={CONSTANTS.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID}
        serviceName="frontend-app"
        tracingOrigins
        networkRecording={{
          enabled: true,
          recordHeadersAndBody: true,
        }}
      />

      {children}
      <Analytics />
      <Zoho />

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
