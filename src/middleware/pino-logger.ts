import { pinoLogger as logger } from "hono-pino";
import env from "~/env.js";

export function pinoLogger() {
  return logger({
    pino: {
      level: env.LOG_LEVEL,
      ...(env.NODE_ENV !== "production"
        ? {
            transport: {
              target: "pino-pretty",
            },
          }
        : {}),
    },
  });
}
