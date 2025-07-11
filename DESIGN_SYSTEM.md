# Design System

## Color Palette

### Primary Colors

- **Navy**: `#1C2C4C` - Used for headings, primary text, and main brand elements
- **Light Blue**: `#065E89` - Used for accents, CTAs, and interactive elements
- **Light Gray**: `#F4F4F4` - Used for backgrounds, surfaces, and subtle elements

### Color Usage

- `primary` - Navy (#1C2C4C) for headings and primary text
- `accent` - Light Blue (#065E89) for buttons, links, and interactive elements
- `surface` - Light Gray (#F4F4F4) for backgrounds and card surfaces

## Typography

### Fonts

- **Poppins** - Used for headings (h1, h2, h3, h4, h5, h6)
- **Inter** - Used for body text and general content

### Font Classes

- `font-display` - Poppins font family
- `font-sans` - Inter font family (default)

## Reusable Components

### 1. Hero Component

**File**: `src/components/Hero.astro`

A full-width hero section with gradient background, trust signals, and call-to-action buttons.

**Features**:

- Gradient background using primary color
- Trust signals (ratings, certifications)
- CTA buttons with accent color
- Responsive design
- Accessible navigation

**Usage**:

```astro
<Hero />
```

### 2. ServiceCard Component

**File**: `src/components/ServiceCard.astro`

A card component for displaying service information with pricing and booking options.

**Props**:

- `title`: Service name
- `summary`: Brief description
- `excerpt`: Detailed description
- `price`: Service cost
- `duration`: Service duration
- `tags`: Array of service tags
- `slug`: URL slug
- `category`: 'maintenance' or 'repair'

**Features**:

- Clean card design with shadow
- Price and duration display
- Tag system
- "Learn More" and "Book Now" CTAs
- Hover effects

**Usage**:

```astro
<ServiceCard
  title="Oil Change"
  summary="Full-synthetic oil change"
  excerpt="Complete oil change service with premium synthetic oil"
  price="$49.99"
  duration="30 min"
  tags={["Maintenance", "Oil"]}
  slug="oil-change"
  category="maintenance"
/>
```

### 3. ReviewCard Component

**File**: `src/components/ReviewCard.astro`

A card component for displaying customer reviews with star ratings and schema markup.

**Props**:

- `author`: Customer name
- `rating`: Star rating (1-5)
- `date`: Review date
- `text`: Review content
- `vehicle`: Vehicle information
- `id`: Unique review ID

**Features**:

- Star rating display
- Schema.org markup for SEO
- Verified customer badge
- Responsive design
- Accessible star ratings

**Usage**:

```astro
<ReviewCard
  author="Sarah M."
  rating={5}
  date="2024-01-15"
  text="Excellent service! Very professional and honest."
  vehicle="2019 Toyota Camry"
  id={1}
/>
```

### 4. FaqAccordion Component

**File**: `src/components/FaqAccordion.astro`

An accessible accordion component for FAQ sections with ARIA attributes and schema markup.

**Props**:

- `faqs`: Array of FAQ objects with `q` (question) and `a` (answer)
- `title`: Optional section title

**Features**:

- ARIA-compliant accordion functionality
- Keyboard navigation support
- Schema.org FAQ markup
- Smooth animations
- Focus management

**Usage**:

```astro
<FaqAccordion
  title="Frequently Asked Questions"
  faqs={[
    { q: "What services do you offer?", a: "We offer comprehensive auto repair services..." },
    { q: "Do you offer warranties?", a: "Yes, all our work comes with a warranty..." }
  ]}
/>
```

### 5. ContactForm Component

**File**: `src/components/ContactForm.astro`

A comprehensive contact form with validation and accessibility features.

**Props**:

- `title`: Form title (optional)
- `description`: Form description (optional)

**Features**:

- Form validation
- Netlify integration
- Honeypot spam protection
- Accessible form controls
- Success/error messaging
- Vehicle information fields
- Service type selection

**Usage**:

```astro
<ContactForm
  title="Contact Us"
  description="Get in touch for any questions or to schedule an appointment."
/>
```

### 6. Breadcrumbs Component

**File**: `src/components/Breadcrumbs.astro`

A navigation component with schema markup for better SEO.

**Props**:

- `items`: Array of breadcrumb items with `label` and `url`

**Features**:

- Schema.org breadcrumb markup
- Responsive design
- Accessible navigation
- Current page indication

**Usage**:

```astro
<Breadcrumbs
  items={[
    { label: "Home", url: "/" },
    { label: "Services", url: "/services" },
    { label: "Oil Change", url: "/services/maintenance/oil-change" }
  ]}
/>
```

### 7. MapEmbed Component

**File**: `src/components/MapEmbed.astro`

A Google Maps embed component with location information and directions link.

**Props**:

- `address`: Location address
- `title`: Map title (optional)
- `height`: Map height (optional)
- `className`: Additional CSS classes (optional)

**Features**:

- Google Maps integration
- Responsive iframe
- Location information display
- Directions link
- Accessible design

**Usage**:

```astro
<MapEmbed
  address="123 Main St, Mountain View, CA 94041"
  title="Skyline Auto Repair Location"
  height="400px"
/>
```

## Additional Components

### Header Component

**File**: `src/components/Header.astro`

Responsive navigation header with dropdown menus and mobile navigation.

### Footer Component

**File**: `src/components/Footer.astro`

Site footer with contact information, social links, and business hours.

### AskUsFab Component

**File**: `src/components/AskUsFab.astro`

Floating action button for quick contact and chat functionality.

## Design Principles

1. **Accessibility First**: All components include proper ARIA attributes and keyboard navigation
2. **Mobile Responsive**: Components adapt seamlessly across all device sizes
3. **Performance Optimized**: Minimal JavaScript, optimized images, and efficient CSS
4. **SEO Friendly**: Schema markup and semantic HTML throughout
5. **Consistent Branding**: Unified color palette and typography across all components

## CSS Classes

### Spacing

- `p-4`, `p-6`, `p-8` - Padding
- `m-4`, `m-6`, `m-8` - Margins
- `space-y-4`, `space-y-6`, `space-y-8` - Vertical spacing

### Colors

- `text-primary` - Navy text
- `text-accent` - Sky blue text
- `bg-primary` - Navy background
- `bg-accent` - Sky blue background
- `bg-surface` - Light gray background

- `font-display` - Poppins font
- `font-bold`, `font-semibold` - Font weights
- `text-xl`, `text-2xl`, `text-3xl` - Text sizes

### Interactive States

- `hover:bg-accent/90` - Hover opacity
- `focus:ring-2 focus:ring-accent` - Focus rings
- `transition-colors` - Smooth transitions
