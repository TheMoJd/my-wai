# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build` (builds project and generates static HTML pages)
- **Build for development**: `npm run build:dev` (development mode build)
- **Lint code**: `npm run lint` (ESLint with TypeScript support)
- **Preview production build**: `npm run preview`
- **Test deployment**: `npm run test:deployment` (runs test-deployment.sh script)

## Architecture Overview

This is a React SPA (Single Page Application) built with Vite, TypeScript, and Tailwind CSS. The application uses:

- **React Router** for client-side routing with fallback to static HTML files
- **TanStack Query** for server state management
- **i18next** for internationalization (French default, supports English and Spanish)
- **shadcn/ui** component library with Radix UI primitives
- **Tailwind CSS** for styling with custom utility functions

## Project Structure

- `src/pages/` - Main application pages (Index, CGU, MentionsLegales, Entreprise, NotFound)
- `src/components/B2C/` - Business-to-Consumer components 
- `src/components/B2B/` - Business-to-Business components (Entreprise page)
- `src/components/ui/` - Reusable UI components organized by category (button, modal, loading, etc.)
- `src/lib/utils.ts` - Utility functions including `cn()` for class name merging
- `src/i18n.ts` - Internationalization configuration
- `public/locales/` - Translation files (fr, en, es)

## Build Process

The build process includes a custom static page generation step:
- `generate-static-pages.js` creates static HTML files for SEO-friendly routes
- Generates configuration files for different hosting platforms (_redirects, vercel.json, .htaccess)
- Handles dynamic asset references and route redirects

## Styling & Components

- Uses `cn()` utility from `src/lib/utils.ts` for conditional class merging
- Component structure follows shadcn/ui patterns with Tailwind CSS
- Responsive design with mobile-first approach
- Custom video and image components for different aspect ratios

## Internationalization

- Default language: French (`fr`)
- Supported languages: French, English, Spanish
- Translation files located in `public/locales/{lang}/translation.json`
- Language detection via browser settings and localStorage persistence

## Rails Integration

This project is designed to be integrated into a Rails application:
- Compiled assets (JS, CSS, images) are placed in Rails app's `public/landing/` folder
- Asset prefix is configured via `VITE_ASSET_PREFIX` environment variable in `mise.toml`
- Set `VITE_ASSET_PREFIX="/landing/"` for Rails deployment
- The static page generator automatically applies the prefix to all asset references

## Environment Configuration

The project uses mise for environment management:
- `mise.toml` contains environment variables including `VITE_ASSET_PREFIX`
- Default prefix is `/` for standalone deployment
- Change to `/landing/` when integrating with Rails

## Key Features

- **SEO-optimized**: Static HTML generation for better search engine indexing
- **Multi-language support**: Full i18n implementation
- **B2B/B2C sections**: Separate component structures for different customer types
- **Responsive design**: Mobile-first approach with custom breakpoints
- **Rails-ready**: Configurable asset prefix for seamless Rails integration
- **Static deployment ready**: Supports Netlify, Vercel, and traditional hosting