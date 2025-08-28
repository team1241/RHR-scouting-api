import { createRouter } from "src/lib/create-app.js";
import * as scoutHandlers from "src/routes/v1/scouts/scouts.handlers.js";
import * as scoutRoutes from "src/routes/v1/scouts/scouts.routes.js";

const router = createRouter().openapi(scoutRoutes.listScouts, scoutHandlers.listScouts).openapi(scoutRoutes.listCommentsForScout, scoutHandlers.listCommentsForScout);

export default router;
