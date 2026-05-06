# Exvia - Portfolio Website Template

A modern, animated single-page portfolio template with a cinematic hero section featuring mouse-tracking image reveal, scroll-triggered animations, parallax effects, and a testimonial slider. Built with React, TypeScript, Tailwind CSS, and Vite.


## Tech Stack

- **React 19** with TypeScript
- **Vite 7** for development and building
- **Tailwind CSS 3** with custom design tokens (Exvia Design System)
- **Lucide React** for icons (dynamically resolved by name)
- **Geist Font** (Regular, Medium, Mono) loaded via CDN
- **shadcn/ui** component primitives available




## Design System

- **Colors**: Black (#131313), White (#FFFFFF), Base Black (#1D1D1D), Subtle (#EAEAEA), Border (#EFEFF2), Blue (#0082F3), Focus (#4D65FF)
- **Typography**: Geist (400, 500) for body, GeistMono (500) for labels and monospace text
- **Animations**: Custom easing curves (out-quad, out-cubic, out-quart, out-circ, in-out-quad)
- **Layout**: Full-width sections with container-large (80rem max) inner content

## Project Structure

```
src/
  config.ts          # All site content configuration
  App.tsx            # Main app with page load overlay
  App.css            # Base Vite styles
  index.css          # Global styles, fonts, animations, utilities
  main.tsx           # React entry point
  components/
    Navigation.tsx   # Fixed navbar with mobile menu
    AnimatedButton.tsx  # Hover-animated button component
    PageOverlay.tsx  # Loading screen overlay
  sections/
    Hero.tsx         # Full-screen hero with mouse-tracking image reveal
    About.tsx        # Two-column about with image grid
    Services.tsx     # Service cards with hover parallax images
    Portfolio.tsx    # Bento grid project showcase
    Testimonials.tsx # Auto-advancing testimonial carousel
    CTA.tsx          # Call-to-action with background image
    Footer.tsx       # Multi-column footer with newsletter
  hooks/
    useMouseParallax.ts  # Mouse parallax for hero and services
    usePageLoad.ts       # Page load state management
    useScrollAnimation.ts # Intersection Observer scroll reveals
    use-mobile.ts        # Mobile breakpoint detection
  lib/
    utils.ts         # cn() utility for class merging
```
