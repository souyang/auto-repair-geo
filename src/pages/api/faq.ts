import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const faqData = {
    business: {
      name: "Skyline Auto Repair",
      location: "Mountain View, CA",
      phone: "(424) 475-9376",
      url: "https://skylineautorepair.app",
    },
    faqs: [
      {
        category: "Emergency Services",
        questions: [
          {
            question: "What should I do if my check engine light comes on?",
            answer:
              "If the light is steady, schedule service soon but it's usually safe to drive. If the light is flashing, stop driving immediately and call us - this indicates a serious problem that could damage your engine. Learn more about check engine lights at https://skylineautorepair.app/check-engine-light",
            keywords: [
              "check engine light",
              "engine warning",
              "car diagnostics",
              "emergency service",
            ],
            relatedServices: [
              "engine diagnostics",
              "check engine light diagnosis",
            ],
            urgency: "high",
          },
          {
            question: "My car won't start - what could be wrong?",
            answer:
              "Common causes include a dead battery, faulty starter, fuel pump issues, or ignition problems. Try jumping the battery first. If that doesn't work, call us for a diagnostic appointment. Our diagnostic services can identify the issue at https://skylineautorepair.app/services/diagnostics/engine-diagnostics",
            keywords: [
              "car won't start",
              "dead battery",
              "starter problems",
              "fuel pump",
            ],
            relatedServices: [
              "engine diagnostics",
              "battery service",
              "starter replacement",
            ],
            urgency: "high",
          },
          {
            question: "My brakes feel soft - is this dangerous?",
            answer:
              "Yes, soft brakes are a safety concern. This could indicate air in the brake lines, worn brake pads, or a brake fluid leak. Schedule an inspection immediately - don't drive if the pedal goes to the floor. See our brake repair services at https://skylineautorepair.app/services/brakes/brake-repair",
            keywords: [
              "soft brakes",
              "brake safety",
              "brake inspection",
              "brake fluid",
            ],
            relatedServices: [
              "brake repair",
              "brake inspection",
              "brake fluid service",
            ],
            urgency: "critical",
          },
          {
            question: "What if my car overheats while driving?",
            answer:
              "Pull over immediately and turn off the engine. Don't open the radiator cap while hot. Call us for emergency service. Driving an overheated engine can cause severe damage.",
            keywords: [
              "car overheating",
              "engine temperature",
              "radiator",
              "emergency service",
            ],
            relatedServices: [
              "cooling system repair",
              "radiator service",
              "emergency towing",
            ],
            urgency: "critical",
          },
        ],
      },
      {
        category: "General Auto Repair",
        questions: [
          {
            question: "How often should I get my oil changed?",
            answer:
              "Most modern vehicles require oil changes every 5,000-7,500 miles with synthetic oil, or every 3,000-5,000 miles with conventional oil. Check your owner's manual for specific recommendations. Learn more about our oil change service at https://skylineautorepair.app/services/maintenance/oil-change",
            keywords: [
              "oil change",
              "maintenance schedule",
              "synthetic oil",
              "conventional oil",
            ],
            relatedServices: ["oil change", "maintenance service"],
            urgency: "low",
          },
          {
            question:
              "What's the difference between a diagnostic fee and repair cost?",
            answer:
              "A diagnostic fee covers the time and equipment needed to identify the problem. The repair cost covers the actual parts and labor to fix the issue. We apply the diagnostic fee toward any repairs you choose to have done. See our diagnostic services at https://skylineautorepair.app/services/diagnostics/engine-diagnostics",
            keywords: [
              "diagnostic fee",
              "repair cost",
              "pricing",
              "diagnostics",
            ],
            relatedServices: ["engine diagnostics", "computer diagnostics"],
            urgency: "medium",
          },
          {
            question: "Do you offer warranties on your work?",
            answer:
              "Yes, we provide comprehensive warranties on all parts and labor. Most repairs come with a 12-month/12,000-mile warranty, and some parts have longer manufacturer warranties.",
            keywords: [
              "warranty",
              "parts warranty",
              "labor warranty",
              "guarantee",
            ],
            relatedServices: ["all repair services"],
            urgency: "low",
          },
          {
            question: "How long do most repairs take?",
            answer:
              "Simple services like oil changes take 30-60 minutes. Brake jobs typically take 2-4 hours. Engine work can take 4-8 hours or more. We'll give you a specific timeline when you schedule your appointment. Schedule your service today at https://skylineautorepair.app/appointments",
            keywords: [
              "repair time",
              "service duration",
              "appointment scheduling",
            ],
            relatedServices: ["all services"],
            urgency: "medium",
          },
        ],
      },
      {
        category: "Service Intervals",
        questions: [
          {
            question: "What's included in a 30k mile service?",
            answer:
              "30k service typically includes oil change, filter replacement, fluid level checks, brake inspection, tire rotation, and a comprehensive safety inspection. We follow manufacturer recommendations. View our 30k service details at https://skylineautorepair.app/services/maintenance/30k-service",
            keywords: [
              "30k service",
              "maintenance schedule",
              "tire rotation",
              "brake inspection",
            ],
            relatedServices: ["30k service", "maintenance packages"],
            urgency: "medium",
          },
          {
            question: "When should I replace my timing belt?",
            answer:
              "Most timing belts should be replaced every 60,000-100,000 miles. Check your owner's manual for specific intervals. Replacing it on schedule prevents expensive engine damage. Learn about our timing belt service at https://skylineautorepair.app/services/maintenance/timing-belt",
            keywords: [
              "timing belt",
              "belt replacement",
              "engine maintenance",
              "preventive maintenance",
            ],
            relatedServices: [
              "timing belt replacement",
              "60k service",
              "90k service",
            ],
            urgency: "high",
          },
          {
            question: "How often should I check my tire pressure?",
            answer:
              "Check tire pressure monthly and before long trips. Proper inflation improves fuel economy, handling, and tire life. We check pressure during every service visit.",
            keywords: [
              "tire pressure",
              "tire maintenance",
              "fuel economy",
              "tire life",
            ],
            relatedServices: ["tire service", "maintenance inspection"],
            urgency: "low",
          },
          {
            question: "When do I need to replace brake pads?",
            answer:
              "Brake pads typically last 25,000-65,000 miles depending on driving conditions. We inspect brake condition during every service and will notify you when replacement is needed. See our brake services at https://skylineautorepair.app/services/brakes/brake-repair",
            keywords: [
              "brake pads",
              "brake replacement",
              "brake inspection",
              "brake maintenance",
            ],
            relatedServices: [
              "brake repair",
              "brake inspection",
              "brake pad replacement",
            ],
            urgency: "high",
          },
        ],
      },
      {
        category: "Pricing & Estimates",
        questions: [
          {
            question: "Do you provide free estimates?",
            answer:
              "Yes, we provide free estimates for most repairs. For complex diagnostics, there may be a small fee that we apply toward any repairs you choose to have done.",
            keywords: [
              "free estimates",
              "repair cost",
              "pricing",
              "diagnostic fee",
            ],
            relatedServices: ["all repair services"],
            urgency: "medium",
          },
          {
            question: "Why do repair costs vary so much?",
            answer:
              "Costs vary based on parts quality (OEM vs aftermarket), labor complexity, and vehicle make/model. We'll explain your options and recommend the best value for your situation.",
            keywords: [
              "repair cost",
              "OEM parts",
              "aftermarket parts",
              "labor cost",
            ],
            relatedServices: ["all repair services"],
            urgency: "medium",
          },
          {
            question: "Do you accept insurance for collision repairs?",
            answer:
              "We work with most major insurance companies for collision repairs. Contact us with your insurance information and we'll help coordinate the claim process.",
            keywords: [
              "insurance",
              "collision repair",
              "insurance claims",
              "accident repair",
            ],
            relatedServices: ["collision repair", "body work"],
            urgency: "medium",
          },
          {
            question: "Are your prices competitive with dealerships?",
            answer:
              "Yes, our prices are typically 20-40% lower than dealership rates while using the same quality parts and providing the same level of expertise.",
            keywords: [
              "competitive pricing",
              "dealership comparison",
              "cost savings",
              "value",
            ],
            relatedServices: ["all services"],
            urgency: "low",
          },
        ],
      },
    ],
    metadata: {
      lastUpdated: new Date().toISOString(),
      totalQuestions: 16,
      categories: 4,
      apiVersion: "1.0",
      source: "Skyline Auto Repair FAQ",
    },
  };

  return new Response(JSON.stringify(faqData, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
