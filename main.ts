import { Hono } from "https://deno.land/x/hono@v4.6.5/mod.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hi there!"));

Deno.serve(app.fetch);