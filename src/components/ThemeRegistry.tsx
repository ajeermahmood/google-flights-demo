"use client";

import * as React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";

const cache = createCache({ key: "css", prepend: true });
cache.compat = true;

const { extractCriticalToChunks, constructStyleTagsFromChunks } =
  createEmotionServer(cache);

const theme = createTheme({
  palette: { mode: "dark" },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  useServerInsertedHTML(() => {
    const emotionChunks = extractCriticalToChunks(children as string);
    const styles = constructStyleTagsFromChunks(emotionChunks);
    return (
      <style
        data-emotion={`css ${cache.key}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
