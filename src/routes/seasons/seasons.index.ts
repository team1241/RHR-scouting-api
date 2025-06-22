import { createRouter } from "~/lib/create-app.js";
import * as seasonHandlers from "~/routes/seasons/seasons.handlers.js";
import * as seasonRoutes from "~/routes/seasons/seasons.routes.js";

const router = createRouter().openapi(seasonRoutes.listSeasons, seasonHandlers.listSeasons);

export default router;
