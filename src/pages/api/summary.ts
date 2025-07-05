import { getCollection } from 'astro:content';

export async function GET() {
  const services = await getCollection('services');
  const vehicles = await getCollection('vehicles');
  const reviews = await getCollection('reviews');
  const locations = await getCollection('locations');

  return new Response(
    JSON.stringify({
      services: services.map(s => s.data),
      vehicles: vehicles.map(v => v.data),
      reviews: reviews.map(r => r.data),
      locations: locations.map(l => l.data),
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
