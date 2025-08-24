import type { ScoutingAppRouteHandler } from "~/lib/types.js";

import type { ListScoutsRoute } from "~/routes/scouts/scouts.routes.js";
import * as HttpStatusCodes from "stoker/http-status-codes";
import db from "~/db/index.js";

export const listScouts: ScoutingAppRouteHandler<ListScoutsRoute> = async (c) => {
  const scouts = await db.query.users.findMany();

  return c.json(scouts, HttpStatusCodes.OK);
};
