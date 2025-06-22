import configureOpenAPI from "~/lib/configure-openapi.js";
import createApp from "~/lib/create-app.js";
import seasons from "~/routes/seasons/seasons.index.js";

const app = createApp();

configureOpenAPI(app);

const routers = [seasons];

routers.forEach((route) => {
  app.route("/", route);
});

export default app;
