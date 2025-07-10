# LLM Citation Strategy for Skyline Auto Repair

## Overview

This document outlines the comprehensive strategy to make your auto repair website content discoverable and citable by LLMs like Perplexity, ChatGPT, and Claude.

## 1. Enhanced Structured Data Implementation

### ✅ Already Implemented

- **Schema.org markup** on all pages
- **Review structured data** with ratings and author information
- **Business information** with address, phone, hours
- **FAQ structured data** for better Q&A discovery
- **Breadcrumb navigation** with proper schema markup

### 🔄 Recently Enhanced

- **Service pages** with comprehensive structured data including:
  - Service type categorization (maintenance vs repair)
  - Pricing information
  - Duration estimates
  - Geographic service areas
  - Action buttons for booking

## 2. API Endpoints for LLM Consumption

### `/api/summary` - Comprehensive Data API

```json
{
  "business": {
    "name": "Skyline Auto Repair",
    "address": "500 Castro St, Mountain View, CA 94041",
    "phone": "(650) 961-0302",
    "ratingValue": 4.8,
    "reviewCount": 1050
  },
  "services": {
    "maintenance": [...],
    "repair": [...]
  },
  "vehicles": [...],
  "locations": [...],
  "reviews": [...],
  "contentPages": [...]
}
```

### `/for-ai` - LLM-Friendly Landing Page

- Structured business profile
- API documentation
- Sample queries
- Content summaries
- Enhanced schema markup for discovery

## 3. Content Optimization for LLM Discovery

### High-Value Content Pages

1. **Check Engine Light Guide** (`/check-engine-light`)
   - Common diagnostic codes
   - Step-by-step troubleshooting
   - Professional advice

2. **Dealer vs Independent Comparison** (`/dealer-vs-independent`)
   - Pricing comparisons
   - Service quality analysis
   - Local market insights

3. **Best Auto Repair in Mountain View** (`/best-auto-repair-mountain-view`)
   - Local expertise
   - Competitive advantages
   - Customer testimonials

4. **Toyota Common Problems** (`/vehicles/toyota-common-problems`)
   - Vehicle-specific expertise
   - Common issues and solutions
   - Maintenance recommendations

## 4. Technical SEO for LLM Crawlers

### Robots.txt Optimization

```txt
User-agent: GPTBot
Allow: /
Allow: /api/
Allow: /for-ai

User-agent: ChatGPT-User
Allow: /
Allow: /api/
Allow: /for-ai

User-agent: CCBot
Allow: /
Allow: /api/
Allow: /for-ai
```

### Dynamic Sitemap

- All service pages
- All vehicle pages
- All location pages
- Content pages with proper priorities
- API endpoints included

## 5. Content Strategy for LLM Citations

### Target Questions LLMs Should Answer

1. **"What causes a check engine light?"**
   - Your check engine light guide will be cited

2. **"How much does an oil change cost in Mountain View?"**
   - Your service pages with pricing will be cited

3. **"What's the best auto repair shop in Mountain View?"**
   - Your local expertise page will be cited

4. **"Should I go to dealer or independent mechanic?"**
   - Your comparison guide will be cited

5. **"What are common Toyota problems?"**
   - Your vehicle-specific content will be cited

### Content Optimization Tips

1. **Use clear, authoritative language**
2. **Include specific pricing and details**
3. **Provide step-by-step instructions**
4. **Include local context and expertise**
5. **Use proper heading structure (H1, H2, H3)**
6. **Include relevant keywords naturally**

## 6. Monitoring and Testing

### Test Your LLM Citations

1. **Ask Perplexity**: "What causes a check engine light?"
2. **Ask ChatGPT**: "Best auto repair in Mountain View, CA"
3. **Ask Claude**: "How much does an oil change cost?"

### Track Citations

- Monitor which pages get cited
- Note the types of questions that trigger citations
- Identify gaps in content coverage

## 7. Advanced Strategies

### JSON-LD Implementation

All pages now include comprehensive structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Oil Change & Filter",
  "provider": {
    "@type": "AutoRepair",
    "name": "Skyline Auto Repair"
  },
  "offers": {
    "@type": "Offer",
    "price": "49.99",
    "priceCurrency": "USD"
  }
}
```

### API Rate Limiting

- Implement caching for API responses
- Set appropriate cache headers
- Monitor API usage

## 8. Content Calendar for LLM Optimization

### Monthly Content Focus

- **Week 1**: Service-specific guides (brake repair, engine diagnostics)
- **Week 2**: Vehicle-specific content (Honda, Toyota, BMW)
- **Week 3**: Local market content (Mountain View, Palo Alto)
- **Week 4**: Industry insights and comparisons

### Content Types to Prioritize

1. **How-to guides** with step-by-step instructions
2. **Comparison content** (dealer vs independent, brands)
3. **Local expertise** content
4. **Problem-solution** content
5. **Cost and pricing** information

## 9. Success Metrics

### LLM Citation Indicators

- [ ] Content appears in Perplexity search results
- [ ] ChatGPT cites your website for auto repair questions
- [ ] Claude references your content in responses
- [ ] API endpoints are discovered and used
- [ ] Structured data is properly indexed

### Traffic and Engagement

- [ ] Increased organic traffic from AI-generated responses
- [ ] Higher click-through rates from LLM citations
- [ ] Improved local search rankings
- [ ] More qualified leads from AI-referred traffic

## 10. Implementation Checklist

### ✅ Completed

- [x] Enhanced structured data on all pages
- [x] Created comprehensive API endpoint
- [x] Built LLM-friendly landing page
- [x] Optimized robots.txt for AI crawlers
- [x] Created dynamic sitemap
- [x] Added schema markup to service pages

### 🔄 In Progress

- [ ] Monitor LLM citations
- [ ] Test with different AI platforms
- [ ] Optimize content based on citation patterns
- [ ] Expand content coverage for gaps

### 📋 Next Steps

- [ ] Create more vehicle-specific content
- [ ] Add more local market content
- [ ] Develop seasonal auto repair guides
- [ ] Create video content with transcripts
- [ ] Build more comparison content

## 11. Troubleshooting

### If LLMs Aren't Citing Your Content

1. **Check structured data** using Google's Rich Results Test
2. **Verify API accessibility** by testing `/api/summary`
3. **Ensure content quality** - make it authoritative and comprehensive
4. **Improve page speed** - LLMs prefer fast-loading content
5. **Add more specific details** - pricing, locations, expertise

### Common Issues

- **Missing structured data**: Use Google's testing tool
- 
- **API not accessible**: Check CORS headers and rate limiting
- **Content too generic**: Add specific local details and expertise
- **Poor page performance**: Optimize images and code

## 12. Resources

### Testing Tools

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

### Monitoring Tools

- Google Search Console
- Google Analytics
- Manual testing with AI platforms

This strategy positions your auto repair website as a go-to resource for LLMs when users ask about automotive services, local expertise, and technical information. 