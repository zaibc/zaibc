export async function onRequest(context) {
  const url = new URL(context.request.url);
  const p = url.pathname;

  // patterns you consider permanently removed
  const gone =
    p.startsWith("/page/") ||
    p.startsWith("/wp-") ||
    p.startsWith("/tag/") ||
    p.startsWith("/sharenet/") ||
    p.startsWith("/programming/") ||
    p.startsWith("/vision-recovery") ||
    p.startsWith("/blog/");

  if (gone) {
    return new Response("Gone", {
      status: 410,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  }

  // otherwise serve static assets / normal Pages behavior
  return context.next();
}