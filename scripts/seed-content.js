#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vehicle data
const vehicles = [
  {
    make: 'Honda',
    models: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'HR-V', 'Passport'],
    image: '/images/vehicles/honda.jpg',
    description:
      'Reliable Honda service and repair, from compact cars to family SUVs.',
  },
  {
    make: 'Ford',
    models: [
      'F-150',
      'Escape',
      'Explorer',
      'Mustang',
      'Focus',
      'Edge',
      'Expedition',
    ],
    image: '/images/vehicles/ford.jpg',
    description:
      'Expert Ford maintenance and repairs for trucks, SUVs, and performance vehicles.',
  },
  {
    make: 'Chevrolet',
    models: [
      'Silverado',
      'Equinox',
      'Tahoe',
      'Camaro',
      'Malibu',
      'Traverse',
      'Colorado',
    ],
    image: '/images/vehicles/chevrolet.jpg',
    description:
      'Complete Chevrolet service including trucks, SUVs, and performance cars.',
  },
  {
    make: 'Nissan',
    models: [
      'Altima',
      'Sentra',
      'Rogue',
      'Pathfinder',
      'Maxima',
      'Murano',
      'Frontier',
    ],
    image: '/images/vehicles/nissan.jpg',
    description:
      'Professional Nissan maintenance and repair services for all models.',
  },
  {
    make: 'BMW',
    models: ['3 Series', '5 Series', 'X3', 'X5', 'X1', '4 Series', '7 Series'],
    image: '/images/vehicles/bmw.jpg',
    description:
      'Luxury BMW service and diagnostics with factory-trained technicians.',
  },
  {
    make: 'Mercedes-Benz',
    models: ['C-Class', 'E-Class', 'GLC', 'GLE', 'S-Class', 'CLA', 'GLA'],
    image: '/images/vehicles/mercedes.jpg',
    description:
      'Premium Mercedes-Benz maintenance and repair with certified expertise.',
  },
  {
    make: 'Audi',
    models: ['A4', 'A6', 'Q5', 'Q7', 'Q3', 'S4', 'RS5'],
    image: '/images/vehicles/audi.jpg',
    description:
      'Specialized Audi service and performance tuning for all models.',
  },
  {
    make: 'Volkswagen',
    models: ['Jetta', 'Passat', 'Tiguan', 'Atlas', 'Golf', 'Arteon', 'ID.4'],
    image: '/images/vehicles/volkswagen.jpg',
    description:
      'Expert VW service including traditional and electric vehicles.',
  },
  {
    make: 'Hyundai',
    models: [
      'Elantra',
      'Sonata',
      'Tucson',
      'Santa Fe',
      'Kona',
      'Palisade',
      'Venue',
    ],
    image: '/images/vehicles/hyundai.jpg',
    description:
      'Comprehensive Hyundai service and warranty work for all models.',
  },
  {
    make: 'Kia',
    models: ['Forte', 'K5', 'Sportage', 'Telluride', 'Soul', 'Sorento', 'Rio'],
    image: '/images/vehicles/kia.jpg',
    description:
      'Professional Kia maintenance and repair with factory-trained technicians.',
  },
  {
    make: 'Mazda',
    models: ['Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'CX-30', 'MX-5', 'CX-50'],
    image: '/images/vehicles/mazda.jpg',
    description:
      'Precision Mazda service and performance tuning for driving enthusiasts.',
  },
  {
    make: 'Subaru',
    models: [
      'Impreza',
      'Legacy',
      'Outback',
      'Forester',
      'Crosstrek',
      'Ascent',
      'WRX',
    ],
    image: '/images/vehicles/subaru.jpg',
    description:
      'Specialized Subaru service including all-wheel drive systems and boxer engines.',
  },
  {
    make: 'Lexus',
    models: ['ES', 'IS', 'RX', 'NX', 'LS', 'GS', 'LC'],
    image: '/images/vehicles/lexus.jpg',
    description:
      'Luxury Lexus service and maintenance with factory-certified technicians.',
  },
  {
    make: 'Acura',
    models: ['TLX', 'RDX', 'MDX', 'ILX', 'NSX', 'RLX', 'ZDX'],
    image: '/images/vehicles/acura.jpg',
    description:
      'Premium Acura service and performance maintenance for luxury vehicles.',
  },
  {
    make: 'Infiniti',
    models: ['Q50', 'Q60', 'QX50', 'QX60', 'QX80', 'Q70', 'QX30'],
    image: '/images/vehicles/infiniti.jpg',
    description:
      'Luxury Infiniti service and diagnostics with specialized expertise.',
  },
];

// Location data
const locations = [
  {
    name: 'Palo Alto',
    slug: 'palo-alto',
    address: '2450 El Camino Real, Palo Alto, CA 94306',
    coordinates: { lat: 37.4419, lng: -122.143 },
    description:
      'Convenient Palo Alto location serving Stanford and the surrounding tech community.',
  },
  {
    name: 'Sunnyvale',
    slug: 'sunnyvale',
    address: '1230 W El Camino Real, Sunnyvale, CA 94087',
    coordinates: { lat: 37.3688, lng: -122.0363 },
    description:
      'Full-service auto repair shop in the heart of Sunnyvale, serving the entire South Bay.',
  },
  {
    name: 'Santa Clara',
    slug: 'santa-clara',
    address: '2780 El Camino Real, Santa Clara, CA 95051',
    coordinates: { lat: 37.3541, lng: -121.9552 },
    description:
      'Trusted auto repair services for Santa Clara residents and nearby communities.',
  },
  {
    name: 'San Jose',
    slug: 'san-jose',
    address: '1850 The Alameda, San Jose, CA 95126',
    coordinates: { lat: 37.3382, lng: -121.8863 },
    description:
      'Comprehensive auto service in San Jose, serving the greater South Bay area.',
  },
  {
    name: 'Redwood City',
    slug: 'redwood-city',
    address: '1200 Veterans Blvd, Redwood City, CA 94063',
    coordinates: { lat: 37.4852, lng: -122.2364 },
    description:
      'Expert auto repair in Redwood City, serving the Peninsula and beyond.',
  },
  {
    name: 'Menlo Park',
    slug: 'menlo-park',
    address: '1100 El Camino Real, Menlo Park, CA 94025',
    coordinates: { lat: 37.4529, lng: -122.1817 },
    description:
      'Professional auto service in Menlo Park, trusted by local families and businesses.',
  },
  {
    name: 'Los Altos',
    slug: 'los-altos',
    address: '800 Fremont Ave, Los Altos, CA 94024',
    coordinates: { lat: 37.3852, lng: -122.1141 },
    description:
      'Quality auto repair in Los Altos, serving the upscale Peninsula community.',
  },
  {
    name: 'Cupertino',
    slug: 'cupertino',
    address: '20600 Stevens Creek Blvd, Cupertino, CA 95014',
    coordinates: { lat: 37.323, lng: -122.0322 },
    description:
      'Reliable auto service in Cupertino, home to Apple and the surrounding tech corridor.',
  },
  {
    name: 'Campbell',
    slug: 'campbell',
    address: '1550 S Bascom Ave, Campbell, CA 95008',
    coordinates: { lat: 37.2872, lng: -121.95 },
    description:
      'Trusted auto repair in Campbell, serving the West Valley and beyond.',
  },
  {
    name: 'Saratoga',
    slug: 'saratoga',
    address: '14560 Big Basin Way, Saratoga, CA 95070',
    coordinates: { lat: 37.2638, lng: -122.023 },
    description:
      'Premium auto service in Saratoga, serving the upscale South Bay community.',
  },
];

function createVehicleFile(vehicle) {
  const filename = `${vehicle.make.toLowerCase()}.mdx`;
  const filepath = path.join(__dirname, '../src/content/vehicles', filename);

  const content = `---
make: "${vehicle.make}"
models: ${JSON.stringify(vehicle.models)}
image: "${vehicle.image}"
description: "${vehicle.description}"
---

We specialize in ${vehicle.make} maintenance and repairs, from routine oil changes to advanced diagnostics. Our certified technicians have extensive experience with all ${vehicle.make} models, ensuring your vehicle receives the care it deserves.

## Why Choose Skyline Auto Repair for Your ${vehicle.make}?

- **Factory-trained technicians** with ${vehicle.make} expertise
- **Genuine parts** and OEM-quality alternatives
- **Advanced diagnostic equipment** for modern ${vehicle.make} systems
- **Comprehensive service** from basic maintenance to complex repairs
- **Warranty protection** on all parts and labor

## Popular ${vehicle.make} Services

- Oil changes and fluid services
- Brake inspection and repair
- Engine diagnostics and repair
- Transmission service
- Electrical system diagnostics
- Air conditioning service
- Suspension and steering repair
- Exhaust system service

Contact us today to schedule your ${vehicle.make} service appointment.`;

  fs.writeFileSync(filepath, content);
  console.log(`Created vehicle file: ${filename}`);
}

function createLocationFile(location) {
  const filename = `${location.slug}.mdx`;
  const filepath = path.join(__dirname, '../src/content/locations', filename);

  const content = `---
name: "${location.name}"
slug: "${location.slug}"
address: "${location.address}"
coordinates:
  lat: ${location.coordinates.lat}
  lng: ${location.coordinates.lng}
description: "${location.description}"
---

Skyline Auto Repair is proud to serve the ${location.name} community with reliable auto repair and maintenance services. Our convenient location makes it easy for local residents and businesses to access professional automotive care.

## Service Area

We provide comprehensive auto repair services to ${location.name} and the surrounding communities, including:

- Routine maintenance and oil changes
- Engine diagnostics and repair
- Brake system service
- Transmission work
- Electrical system diagnostics
- Air conditioning service
- Suspension and steering repair
- Exhaust system service

## Why Choose Skyline Auto Repair in ${location.name}?

- **Local expertise** - We know the driving conditions in ${location.name}
- **Convenient location** - Easy access from major roads and highways
- **Community focused** - Supporting local businesses and families
- **Flexible scheduling** - Appointments that work with your busy lifestyle
- **Emergency service** - Available when you need us most

## Get Directions

Visit us at ${location.address} for all your automotive needs. Call ahead to schedule your appointment and ensure we have the time to give your vehicle the attention it deserves.`;

  fs.writeFileSync(filepath, content);
  console.log(`Created location file: ${filename}`);
}

function main() {
  console.log('🌱 Seeding vehicle and location content...\n');

  // Create vehicles directory if it doesn't exist
  const vehiclesDir = path.join(__dirname, '../src/content/vehicles');
  if (!fs.existsSync(vehiclesDir)) {
    fs.mkdirSync(vehiclesDir, { recursive: true });
  }

  // Create locations directory if it doesn't exist
  const locationsDir = path.join(__dirname, '../src/content/locations');
  if (!fs.existsSync(locationsDir)) {
    fs.mkdirSync(locationsDir, { recursive: true });
  }

  // Create vehicle files
  console.log('Creating vehicle files...');
  vehicles.forEach(createVehicleFile);

  console.log('\nCreating location files...');
  locations.forEach(createLocationFile);

  console.log('\n✅ Content seeding complete!');
  console.log(`📁 Created ${vehicles.length} vehicle files`);
  console.log(`📁 Created ${locations.length} location files`);
  console.log('\nNext steps:');
  console.log('1. Run "npm run dev" to start the development server');
  console.log('2. Visit /vehicles/[make] to see the vehicle pages');
  console.log('3. Visit /service-area/[location] to see the location pages');
}

main();
