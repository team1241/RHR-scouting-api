import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { z } from "zod";
import { team } from "~/db/schema.js";

const tags = ["Scouts"];

const ScoutSchema = z.object({
  id: z.number(),
  grade: z.string().nullable(),
  isActive: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  isAdmin: z.boolean(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  team: z.enum(team.enumValues).nullable(),
  isSignupComplete: z.boolean(),
  clerkId: z.string(),
});

export const listScouts = createRoute({
  path: "/scouts",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(z.array(ScoutSchema), "List of scouts"),
  },
});

export type ListScoutsRoute = typeof listScouts;
