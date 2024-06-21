import type { Metadata } from "next";
import type { ReactNode } from "react";

// import styles for fonts
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/package.json";

/**
 *  Styling for MUI components using theme
 */
import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// nextjs optimization
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import Toolbar from "@mui/material/Toolbar";

// vercel site performance and analytics
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
// import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Anthony Dombrowski's To-Do Task Timer App",
  description:
    "to-due is an app meant to help you be more efficient with your time, focus, and be more productive. Inspired by the pomodoro technique of intervals of work split between short and long breaks to keep your mind sharp and at peak effectiveness instead of trying to maintain a consistent level in a basic marathon sprint.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="icon"
          href="/anthonyProfilesq/favicon.ico"
          sizes="any"
        /> */}
      </head>
      {/* <GoogleTagManager gtmId="GTM-1234567" /> */}
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <AppAppBar /> */}
            <Toolbar
              variant="dense"
              sx={{ minHeight: 55 }}
            />
            {children}
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
