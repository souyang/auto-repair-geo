import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  // Demo: just echo back a canned answer
  return new Response(
    JSON.stringify({
      answer: `Demo: You asked '${body.question}'. Real-time answers coming soon.`,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
