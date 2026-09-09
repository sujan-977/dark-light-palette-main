import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("./node-landing/", import.meta.url));
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".jpeg": "image/jpeg", ".jpg": "image/jpeg" };

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", `http://${req.headers.host}`);
  const requested = url.pathname === "/" ? "index.html" : url.pathname.slice(1);
  const file = normalize(join(root, requested));

  if (!file.startsWith(root)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  try {
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Page not found");
  }
});

const port = Number(process.env.PORT) || 3000;
server.listen(port, () => console.log(`Landing page running at http://localhost:${port}`));
