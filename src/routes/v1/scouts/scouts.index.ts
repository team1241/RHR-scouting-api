import { createRouter } from "~/lib/create-app.js";
import * as scoutHandlers from "~/routes/v1/scouts/scouts.handlers.js";
import * as scoutRoutes from "~/routes/v1/scouts/scouts.routes.js";

const router = createRouter().openapi(scoutRoutes.listScouts, scoutHandlers.listScouts);

export default router;
