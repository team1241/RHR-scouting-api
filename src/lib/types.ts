import type { OpenAPIHono, RouteConfig, RouteHandler } from "@hono/zod-openapi";
import type { PinoLogger } from "hono-pino";

export interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

export type OpenAPIApp = OpenAPIHono<AppBindings>;

export type ScoutingAppRouteHandler<R extends RouteConfig> = RouteHandler<R, AppBindings>;
