export const SITE = {
  name: 'Skyline Auto Repair',
  url: 'https://skylineautorepair.com',
  address: '2037 Old Middlefield Way, Mountain View, CA 94043',
  phone: '(650) 961-0302',
  email: 'info@skylineautorepair.com',
  hours: 'Mon–Fri 8 AM – 5 PM',
  areaServed: ['Mountain View', 'Palo Alto', 'Los Altos', 'Sunnyvale'],
  ratingValue: 4.8,
  reviewCount: 1050,
  description:
    'ASE-certified auto repair and maintenance services in Mountain View, CA. Family-owned since 1985.',
  social: {
    facebook: 'https://facebook.com/skylineautorepair',
    yelp: 'https://yelp.com/biz/skyline-auto-repair-mountain-view',
    google: 'https://maps.google.com/?cid=123456789',
  },
};

export const SERVICES = {
  maintenance: [
    {
      slug: 'oil-change',
      title: 'Oil Change & Filter',
      summary: 'Full-synthetic oil change with premium filter replacement.',
      excerpt:
        'Keep your engine running smoothly with our comprehensive oil change service.',
      price: '$49.99',
      duration: '30 min',
      tags: ['Maintenance', 'Oil Change', 'Mountain View'],
    },
    {
      slug: '30k-service',
      title: '30k Mile Service',
      summary: 'Complete 30,000-mile maintenance package.',
      excerpt:
        'Comprehensive service including fluid checks, filter replacement, and safety inspection.',
      price: '$299.99',
      duration: '2-3 hours',
      tags: ['Maintenance', 'Scheduled Service', 'Mountain View'],
    },
    {
      slug: '60k-service',
      title: '60k Mile Service',
      summary: 'Major service interval maintenance package.',
      excerpt:
        'Includes timing belt inspection, transmission service, and comprehensive diagnostics.',
      price: '$599.99',
      duration: '4-5 hours',
      tags: ['Maintenance', 'Scheduled Service', 'Mountain View'],
    },
    {
      slug: '90k-service',
      title: '90k Mile Service',
      summary: 'Complete 90,000-mile maintenance package.',
      excerpt:
        'Major service including timing belt replacement, brake inspection, and full diagnostics.',
      price: '$899.99',
      duration: '6-8 hours',
      tags: ['Maintenance', 'Scheduled Service', 'Mountain View'],
    },
  ],
  repair: [
    {
      slug: 'brake-repair',
      title: 'Brake Repair & Pad Replacement',
      summary: 'ASE-certified brake repair for all makes and models.',
      excerpt: 'Stop safely with Skyline Auto Repair brake services.',
      price: 'From $199.99',
      duration: '2-4 hours',
      tags: ['Brakes', 'Repair', 'Mountain View'],
      faqs: [
        {
          q: 'How long do brake pads last?',
          a: 'Typically 25,000–65,000 miles depending on driving conditions and vehicle type.',
        },
        {
          q: 'How often should I have my brakes inspected?',
          a: 'We recommend brake inspection every 12,000 miles or annually.',
        },
        {
          q: 'What are the signs I need brake service?',
          a: 'Squeaking, grinding, soft pedal, or dashboard warning lights indicate brake service is needed.',
        },
      ],
    },
    {
      slug: 'engine-diagnostics',
      title: 'Engine Diagnostics & Check Engine Light',
      summary: 'Professional engine diagnostics and repair services.',
      excerpt:
        'Expert diagnosis and repair of engine problems and check engine lights.',
      price: 'From $89.99',
      duration: '1-2 hours',
      tags: ['Engine', 'Diagnostics', 'Mountain View'],
      faqs: [
        {
          q: 'What causes a check engine light?',
          a: 'Common causes include oxygen sensor failure, loose gas cap, catalytic converter issues, or spark plug problems.',
        },
        {
          q: 'Is it safe to drive with the check engine light on?',
          a: 'It depends on the severity. If the light is flashing, stop driving immediately. If steady, schedule service soon.',
        },
        {
          q: 'How much does engine diagnostics cost?',
          a: 'Our diagnostic service starts at $89.99 and includes a comprehensive computer scan and analysis.',
        },
      ],
    },
    {
      slug: 'timing-belt',
      title: 'Timing Belt / Timing Chain Replacement',
      summary: 'Professional timing belt and chain replacement services.',
      excerpt:
        'Prevent costly engine damage with timely timing belt replacement.',
      price: 'From $399.99',
      duration: '4-6 hours',
      tags: ['Engine', 'Timing Belt', 'Mountain View'],
      faqs: [
        {
          q: 'How often should timing belts be replaced?',
          a: "Typically every 60,000–100,000 miles, but check your owner's manual for specific intervals.",
        },
        {
          q: 'What happens if a timing belt breaks?',
          a: 'A broken timing belt can cause severe engine damage, potentially requiring engine replacement.',
        },
        {
          q: 'How long does timing belt replacement take?',
          a: 'Most timing belt replacements take 4-6 hours depending on the vehicle make and model.',
        },
      ],
    },
    {
      slug: 'hybrid-ev-service',
      title: 'Hybrid & EV System Service',
      summary: 'Specialized hybrid and electric vehicle maintenance.',
      excerpt:
        'Expert service for hybrid and electric vehicle systems and components.',
      price: 'From $149.99',
      duration: '2-4 hours',
      tags: ['Hybrid', 'EV', 'Mountain View'],
      faqs: [
        {
          q: 'Do hybrids need special maintenance?',
          a: 'Yes, hybrids require specialized knowledge for battery systems, regenerative braking, and electric motors.',
        },
        {
          q: 'How often should hybrid batteries be serviced?',
          a: 'Hybrid battery systems should be inspected annually, with full diagnostics every 30,000 miles.',
        },
        {
          q: 'Can you service electric vehicles?',
          a: 'Yes, we have certified technicians trained in EV systems, though some repairs may require dealer tools.',
        },
      ],
    },
  ],
};

export const VEHICLES = [
  {
    make: 'Toyota',
    models: [
      'Camry',
      'Corolla',
      'Prius',
      'RAV4',
      'Highlander',
      'Tacoma',
      'Tundra',
    ],
    image: '/images/vehicles/toyota.jpg',
  },
  {
    make: 'Honda',
    models: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'Ridgeline'],
    image: '/images/vehicles/honda.jpg',
  },
  {
    make: 'Lexus',
    models: ['ES', 'IS', 'RX', 'NX', 'LS', 'GS', 'GX'],
    image: '/images/vehicles/lexus.jpg',
  },
  {
    make: 'Nissan',
    models: ['Altima', 'Sentra', 'Rogue', 'Murano', 'Pathfinder', 'Frontier'],
    image: '/images/vehicles/nissan.jpg',
  },
];

export const LOCATIONS = [
  {
    name: 'Mountain View',
    slug: 'mountain-view',
    address: '2037 Old Middlefield Way, Mountain View, CA 94043',
    coordinates: { lat: 37.3861, lng: -122.0839 },
  },
  {
    name: 'Palo Alto',
    slug: 'palo-alto',
    address: 'Serving Palo Alto area',
    coordinates: { lat: 37.4419, lng: -122.143 },
  },
  {
    name: 'Los Altos',
    slug: 'los-altos',
    address: 'Serving Los Altos area',
    coordinates: { lat: 37.3855, lng: -122.1141 },
  },
  {
    name: 'Sunnyvale',
    slug: 'sunnyvale',
    address: 'Serving Sunnyvale area',
    coordinates: { lat: 37.3688, lng: -122.0363 },
  },
];

export const REVIEWS = [
  {
    id: 1,
    author: 'Sarah M.',
    rating: 5,
    date: '2024-01-15',
    text: 'Excellent service! They diagnosed and fixed my check engine light quickly. Very professional and honest about pricing.',
    vehicle: '2018 Toyota Camry',
  },
  {
    id: 2,
    author: 'Mike R.',
    rating: 5,
    date: '2024-01-10',
    text: 'Family-owned business with great customer service. They saved me money by fixing the real issue instead of just replacing parts.',
    vehicle: '2016 Honda Accord',
  },
  {
    id: 3,
    author: 'Jennifer L.',
    rating: 5,
    date: '2024-01-05',
    text: 'Trustworthy mechanics who explain everything clearly. My hybrid battery service was done perfectly.',
    vehicle: '2020 Toyota Prius',
  },
];
