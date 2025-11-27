# Hunnidlabs Landing Page

A modern, animated landing page for Hunnidlabs featuring a dynamic swirling background effect and clean, professional design.

## Features

- 🎨 **Modern Design**: Dark theme with blue and purple gradients
- ✨ **Animated Background**: Dynamic swirling light effects with CSS animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Next.js 14 and optimized for performance
- 🎯 **SEO Optimized**: Proper metadata and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animations**: CSS animations and transforms

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hunnidlabs-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── AnimatedBackground.tsx    # Swirling background animation
│   │   ├── Header.tsx                # Navigation header
│   │   └── HeroSection.tsx           # Main hero content
│   ├── globals.css                   # Global styles and animations
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Main page component
```

## Customization

### Colors
The color scheme can be modified in the Tailwind classes throughout the components. The main colors used are:
- Primary: Blue (`blue-500`, `blue-600`)
- Secondary: Purple (`purple-500`, `purple-600`)
- Accent: Pink (`pink-500`)
- Background: Dark slate (`slate-900`)

### Animations
Custom animations are defined in `globals.css`:
- `animate-spin-slow`: 20s rotation
- `animate-spin-reverse`: 15s reverse rotation
- `animate-pulse-slow`: 3s pulse effect

## Deployment

The project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact Hunnidlabs.
