import { createRouter } from "~/lib/create-app.js";
import * as imagesHandler from "~/routes/v1/images/images.handlers.js";
import * as imagesRoutes from "~/routes/v1/images/images.routes.js";

const router = createRouter().openapi(imagesRoutes.listFieldImagesForActiveSeason, imagesHandler.listFieldImagesForActiveSeason);

export default router;
