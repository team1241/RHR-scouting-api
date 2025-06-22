
import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";


const tags = ["Seasons"];

export const listSeasons = createRoute({
  path: "/seasons",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(z.object(
        {id: z.number(), year: z.number(), gameName: z.string(), createdAt: z.string(), updatedAt: z.string(), isActive: z.boolean()}
      )),
      "List of seasons",
    ),
  },
});

export type ListSeasonRoute = typeof listSeasons;
