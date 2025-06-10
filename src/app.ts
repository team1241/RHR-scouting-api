import configureOpenAPI from "~/lib/configure-openapi.js";
import createApp from "~/lib/create-app.js";
import indexRouter from "~/routes/index.route.js";

const app = createApp();

configureOpenAPI(app);

const routers = [indexRouter];

routers.forEach((route) => {
  app.route("/", route);
});

export default app;
