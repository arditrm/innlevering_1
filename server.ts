import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { readFile, writeFile } from "node:fs/promises";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

app.use("/*", cors());
app.use("/static*/", serveStatic({ root: "./" }));


app.get("/json", async (c) => {
    const data = await readFile("./data.json", "utf-8");
    return c.json(JSON.parse(data));
});


app.post("/create-project", async (c) => {
    const newProject = await c.req.json();

    const data = JSON.parse(await readFile("./data.json", "utf-8"));


    data.allprojects.push({
        Id: Date.now(),
        Title: newProject.Title,
        Description: newProject.Description,
    });

   
    await writeFile("./data.json", JSON.stringify(data, null, 2));

    return c.json({ message: "Project created successfully" });
});

const port = 6969;
console.log(`Server running on http://localhost:${port}`);
serve({
    fetch: app.fetch,
    port,
});
