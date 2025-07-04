# Scripts

This directory contains utility scripts for the Skyline Auto Repair website.

## seed-content.js

A Node.js script that generates MDX content files for vehicles and locations.

### Usage

```bash
# Run the seeding script
npm run seed

# Or run directly
node scripts/seed-content.js
```

### What it does

The script creates:

- **15 vehicle files** in `src/content/vehicles/`:
  - Honda, Ford, Chevrolet, Nissan, BMW, Mercedes-Benz, Audi, Volkswagen
  - Hyundai, Kia, Mazda, Subaru, Lexus, Acura, Infiniti

- **10 location files** in `src/content/locations/`:
  - Palo Alto, Sunnyvale, Santa Clara, San Jose, Redwood City
  - Menlo Park, Los Altos, Cupertino, Campbell, Saratoga

### Generated Content

Each vehicle file includes:
- Frontmatter with make, models, image, and description
- Detailed service information
- Why choose Skyline for that make
- Popular services offered

Each location file includes:
- Frontmatter with name, slug, address, coordinates, and description
- Service area information
- Local expertise details
- Contact information

### Customization

To add more vehicles or locations, edit the arrays in `seed-content.js`:

```javascript
// Add new vehicles
const vehicles = [
  // ... existing vehicles
  {
    make: "New Make",
    models: ["Model 1", "Model 2"],
    image: "/images/vehicles/new-make.jpg",
    description: "Description for new make"
  }
];

// Add new locations
const locations = [
  // ... existing locations
  {
    name: "New City",
    slug: "new-city",
    address: "123 Main St, New City, CA 12345",
    coordinates: { lat: 37.1234, lng: -122.1234 },
    description: "Description for new location"
  }
];
```

### Notes

- The script will overwrite existing files with the same names
- All files are created with proper MDX frontmatter structure
- Content follows SEO best practices with relevant keywords
- Coordinates are real addresses in the Bay Area 