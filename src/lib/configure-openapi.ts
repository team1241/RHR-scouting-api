import type { OpenAPIApp } from "~/lib/types.js";
import { Scalar } from "@scalar/hono-api-reference";
import packageJson from "../../package.json" with { type: "json" };

export default function configureOpenAPI(app: OpenAPIApp) {
  app.doc("/api-doc", {
    openapi: "3.1.0",
    info: {
      version: packageJson.version,
      title: "RHR Scouting API",
    },
  });

  app.get("/api-reference", Scalar({
    url: "/api-doc",
    theme: "bluePlanet",
    layout: "classic",
    pageTitle: "RHR Scouting API Reference",
    defaultHttpClient: {
      targetKey: "js",
      clientKey: "fetch",
    },
  }));
}
