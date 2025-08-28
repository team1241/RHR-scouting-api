import { createRouter } from "src/lib/create-app.js";
import * as seasonHandlers from "src/routes/v1/seasons/seasons.handlers.js";
import * as seasonRoutes from "src/routes/v1/seasons/seasons.routes.js";

const router = createRouter()
  .openapi(seasonRoutes.listSeasons, seasonHandlers.listSeasons)
  .openapi(seasonRoutes.activeSeason, seasonHandlers.activeSeason);

export default router;
