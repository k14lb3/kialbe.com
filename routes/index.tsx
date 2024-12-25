export function handler(): Response {
  return new Response(null, {
    status: 301,
    headers: { Location: '/home' },
  });
}
