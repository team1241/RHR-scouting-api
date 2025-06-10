import type { AppBindings } from "~/lib/types.js";
import { OpenAPIHono } from "@hono/zod-openapi";
import { requestId } from "hono/request-id";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { pinoLogger } from "~/middleware/pino-logger.js";

export default function createApp() {
  const app = new OpenAPIHono<AppBindings>({ strict: false });
  app.use(serveEmojiFavicon("📊"));
  app.use(requestId());
  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
