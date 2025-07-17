import { unkey, type UnkeyContext } from "@unkey/hono";
import { Hono } from "hono";
import configureOpenAPI from "~/lib/configure-openapi.js";
import createApp from "~/lib/create-app.js";
import seasons from "~/routes/seasons/seasons.index.js";

// Create the main app instance
const app = createApp();
// Attach Unkey middleware to verify API keys for all routes
app.use(
  "*",
  unkey({
    apiId: "UNKEY_API_ID", // Use environment variable for Unkey API ID
    getKey: (c) => {
      const key = c.req.header("x-api-key");
      if (!key) {
        return c.text("missing api key", 401);
      }
      return key;
    },
  }),
);

// Integrates the OpenAPI documentation into the app
configureOpenAPI(app);

// creates an array of routes for each of the seasons
const routers = [seasons];

// Checks each route in the array and mounts them to the route URL
routers.forEach((route) => {
  app.route("/", route);
});

export default app;
