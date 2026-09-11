import React from "react";
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

export function render(url) {
  const context = {};
  return new Promise((resolve, reject) => {
    let html = "";
    const output = new PassThrough();
    output.setEncoding("utf8");
    output.on("data", (chunk) => { html += chunk; });
    output.on("error", reject);
    output.on("end", () => {
      const { helmet } = context;
      resolve({ html, head: [helmet.title, helmet.meta, helmet.link, helmet.script].map((tag) => tag.toString()).join("\n") });
    });
    const stream = renderToPipeableStream(
      <React.StrictMode>
        <HelmetProvider context={context}>
          <StaticRouter location={url}><App /></StaticRouter>
        </HelmetProvider>
      </React.StrictMode>,
      {
        onAllReady() { stream.pipe(output); },
        onError(error) { reject(error); },
      },
    );
  });
}
