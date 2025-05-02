import { Hono } from "https://deno.land/x/hono@v3.11.7/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v3.11.7/middleware.ts";

const app = new Hono();

app.get('/courses', (c) => {
  return c.json({
    courses: [
      { id: 1, name: "Web Software Development" },
      { id: 2, name: "Device-Agnostic Design" }
    ]
  });
});

app.get('/courses/:id', (c) => {
  const id = Number(c.req.param('id'));
  return c.json({
    course: { id, name: "Course Name" }
  });
});

app.post('/courses', async (c) => {
  const body = await c.req.json();
  return c.json({
    course: { id: 3, name: body.name }
  });
});

app.get('/courses/:id/topics', (c) => {
  return c.json({
    topics: [
      { id: 1, name: "Topic 1" },
      { id: 2, name: "Topic 2" }
    ]
  });
});

app.get('/courses/:cId/topics/:tId/posts', (c) => {
  return c.json({
    posts: [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" }
    ]
  });
});

app.get('/courses/:cId/topics/:tId/posts/:pId', (c) => {
  const pId = Number(c.req.param('pId'));
  return c.json({
    post: { id: pId, title: "Post Title" },
    answers: [
      { id: 1, content: "Answer 1" },
      { id: 2, content: "Answer 2" }
    ]
  });
});

export default app;
