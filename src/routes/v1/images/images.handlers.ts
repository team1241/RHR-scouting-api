import type { ScoutingAppRouteHandler } from "src/lib/types.js";
import type { ListFieldImagesForActiveSeasonRoute } from "src/routes/v1/images/images.routes.js";
import { eq } from "drizzle-orm";
import db from "src/db/index.js";
import { fieldImages } from "src/db/schema.js";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";

export const listFieldImagesForActiveSeason: ScoutingAppRouteHandler<ListFieldImagesForActiveSeasonRoute> = async (c) => {
  const activeSeason = await db.query.seasons.findFirst({ where: (seasons, { eq }) => eq(seasons.isActive, true) });

  if (!activeSeason) {
    return c.json(
      {
        message: HttpStatusPhrases.NOT_FOUND,
      },
      HttpStatusCodes.NOT_FOUND,
    );
  }

  const images = await db.query.fieldImages.findMany({ where: eq(fieldImages.seasonId, activeSeason!.id) });

  return c.json(images, HttpStatusCodes.OK);
};
