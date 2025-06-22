import type { ScoutingAppRouteHandler } from "~/lib/types.js";
import type { ListSeasonRoute } from "~/routes/seasons/seasons.routes.js";

import * as HttpStatusCodes from "stoker/http-status-codes";
import db from "~/db/index.js";

export const listSeasons: ScoutingAppRouteHandler<ListSeasonRoute> = async (c) => {
  const seasons = await db.query.seasons.findMany();

  return c.json(seasons, HttpStatusCodes.OK);
};
