# RTDex - Real-Time Data Explorers

Real-Time Data Explorers leveraging TRM's blockchain intelligence, Finster AI's analytics, and Senso's data capabilities — all running on Parallel's compute infrastructure.

## Overview

RTDex is a modern web application that combines multiple cutting-edge data platforms to provide comprehensive real-time data exploration and analysis capabilities:

- **TRM Blockchain Intelligence** - Deep blockchain monitoring and analysis
- **Finster AI Analytics** - Advanced machine learning-powered insights
- **Senso Data Capabilities** - Comprehensive data aggregation and processing
- **Parallel Compute Infrastructure** - Distributed, scalable compute resources

## Getting Started

First, install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Available Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Check code quality (lint and format)
pnpm lint
pnpm format

# Type check
pnpm typecheck
```

## Project Structure

- `src/app/page.tsx` - Main landing page
- `src/app/layout.tsx` - Root layout with metadata and font configuration
- `src/app/globals.css` - Global styles with Tailwind CSS
- `public/images/` - Branding assets (logos and favicons)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Biome (linting and formatting)
