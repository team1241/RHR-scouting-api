import type { ScoutingAppRouteHandler } from "src/lib/types.js";
import type { ActiveSeasonRoute, ListSeasonRoute } from "src/routes/v1/seasons/seasons.routes.js";

import db from "src/db/index.js";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";

export const listSeasons: ScoutingAppRouteHandler<ListSeasonRoute> = async (c) => {
  const seasons = await db.query.seasons.findMany();

  return c.json(seasons, HttpStatusCodes.OK);
};

export const activeSeason: ScoutingAppRouteHandler<ActiveSeasonRoute> = async (c) => {
  const activeSeason = await db.query.seasons.findFirst({ where: (seasons, { eq }) => eq(seasons.isActive, true) });

  if (!activeSeason) {
    return c.json({ message: HttpStatusPhrases.NOT_FOUND }, HttpStatusCodes.NOT_FOUND);
  }

  return c.json(activeSeason, HttpStatusCodes.OK);
};
