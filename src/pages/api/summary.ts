import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../../config/site";

export const GET: APIRoute = async () => {
  try {
    // Fetch all content collections
    const services = await getCollection("services");
    const vehicles = await getCollection("vehicles");
    const locations = await getCollection("locations");
    const reviews = await getCollection("reviews");

    // Structure data for LLM consumption
    const structuredData = {
      business: {
        name: SITE.name,
        url: SITE.url,
        address: SITE.address,
        phone: SITE.phone,
        email: SITE.email,
        hours: SITE.hours,
        areaServed: SITE.areaServed,
        ratingValue: SITE.ratingValue,
        reviewCount: SITE.reviewCount,
        description: SITE.description,
      },
      services: {
        maintenance: services
          .filter((service) => service.data.category === "maintenance")
          .map((service) => ({
            title: service.data.title,
            summary: service.data.summary,
            excerpt: service.data.excerpt,
            price: service.data.price,
            duration: service.data.duration,
            tags: service.data.tags,
            slug: service.slug,
            category: service.data.category,
            faqs: service.data.faqs || [],
          })),
        repair: services
          .filter((service) => service.data.category === "repair")
          .map((service) => ({
            title: service.data.title,
            summary: service.data.summary,
            excerpt: service.data.excerpt,
            price: service.data.price,
            duration: service.data.duration,
            tags: service.data.tags,
            slug: service.slug,
            category: service.data.category,
            faqs: service.data.faqs || [],
          })),
      },
      vehicles: vehicles.map((vehicle) => ({
        make: vehicle.data.make,
        models: vehicle.data.models,
        description: vehicle.data.description,
        slug: vehicle.slug,
      })),
      locations: locations.map((location) => ({
        name: location.data.name,
        slug: location.slug,
        address: location.data.address,
        coordinates: location.data.coordinates,
        description: location.data.description,
      })),
      reviews: reviews.map((review) => ({
        author: review.data.author,
        rating: review.data.rating,
        date: review.data.date,
        text: review.data.text,
        vehicle: review.data.vehicle,
        featured: review.data.featured,
      })),
      contentPages: [
        {
          title: "Check Engine Light Guide",
          url: "/check-engine-light",
          description:
            "Comprehensive guide to check engine light diagnosis and repair",
          type: "guide",
        },
        {
          title: "Dealer vs Independent Repair",
          url: "/dealer-vs-independent",
          description:
            "Comparison of dealer vs independent auto repair options",
          type: "comparison",
        },
        {
          title: "Best Auto Repair in Mountain View",
          url: "/best-auto-repair-mountain-view",
          description:
            "Why Skyline Auto Repair is the best choice in Mountain View",
          type: "local",
        },
        {
          title: "Toyota Common Problems",
          url: "/vehicles/toyota-common-problems",
          description: "Common Toyota problems and solutions",
          type: "vehicle-specific",
        },
      ],
      metadata: {
        lastUpdated: new Date().toISOString(),
        totalServices: services.length,
        totalVehicles: vehicles.length,
        totalLocations: locations.length,
        totalReviews: reviews.length,
        apiVersion: "1.0",
      },
    };

    return new Response(JSON.stringify(structuredData, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
