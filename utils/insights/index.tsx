import React, { ReactNode } from "react";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import {
  ReactPlugin,
  withAITracking,
  AppInsightsContext,
} from "@microsoft/applicationinsights-react-js";

console.log(process.env.NEXT_PUBLIC_APP_INSIGHTS)

let reactPlugin = new ReactPlugin();
let appInsights = new ApplicationInsights({
  config: {
    connectionString: process.env.NEXT_PUBLIC_APP_INSIGHTS,
    enableAutoRouteTracking: true,
    enableCorsCorrelation: true,
    enableRequestHeaderTracking: true,
    enableResponseHeaderTracking: true,
    enableAjaxPerfTracking: true,
    isBrowserLinkTrackingEnabled: true,
    extensions: [reactPlugin],
  },
});

appInsights.loadAppInsights();

interface InsightsProps {
	children: ReactNode;
}

const AzureAppInsights = ({ children }: InsightsProps) => {
  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      {children}
    </AppInsightsContext.Provider>
  );
};

export default withAITracking(reactPlugin, AzureAppInsights);