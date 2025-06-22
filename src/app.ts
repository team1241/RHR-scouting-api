import configureOpenAPI from "~/lib/configure-openapi.js";
import createApp from "~/lib/create-app.js";
import indexRouter from "~/routes/index.route.js";
import seasons from "~/routes/seasons/seasons.index.js";

const app = createApp();

configureOpenAPI(app);

const routers = [indexRouter, seasons];

routers.forEach((route) => {
  app.route("/", route);
});

export default app;
