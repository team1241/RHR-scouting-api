import { unkey, type UnkeyContext } from "@unkey/hono";
import { Hono } from "hono";

const app = new Hono<{ Variables: { unkey: UnkeyContext } }>();

app.use("*", unkey({
  apiId: "<UNKEY_API_ID>",
}));

app.get("/somewhere", (c) => {
  // access the unkey response here to get metadata of the key etc
  const verification = c.get("unkey");

  return c.text("gurt");
});
