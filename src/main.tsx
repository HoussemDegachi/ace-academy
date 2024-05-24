import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthProvider.tsx";
import { UserProvider } from "./contexts/UserProvider.tsx";
import { Analytics } from '@vercel/analytics/react';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://e35143d577a5b59c68d70b1c0253dbe7@o4507311681634304.ingest.de.sentry.io/4507311692775504",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <UserProvider>
      <Analytics />
      <App />
    </UserProvider>
  </AuthProvider>
);
