# Santhoshi Derangula - Portfolio Website

A modern, fully responsive portfolio website showcasing professional experience, technical skills, projects, and educational background. Built with Next.js, React, and Tailwind CSS with smooth GSAP animations and dark mode support.

## Features

- **Responsive Design** - Mobile-first approach that works seamlessly on all devices
- **Dark Mode** - Toggle between light and dark themes with smooth transitions
- **Smooth Animations** - GSAP scroll-triggered animations for all sections
- **Professional Sections** - Hero, Skills, Projects, Experience, Education, Certificates, and Contact
- **Accessibility** - Semantic HTML, ARIA labels, and keyboard navigation
- **Performance** - Optimized images, lazy loading, and efficient animations
- **3D Background** - Interactive Three.js particle background in hero section

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP (GreenSock Animation Platform)
- **3D Graphics**: Three.js
- **UI Components**: Radix UI + shadcn/ui
- **Theme Management**: next-themes

## Project Highlights

### Professional Experience
- **2-Year Java Developer Role at TCS**
  - Full-stack development with Java, Spring Boot, and React
  - Database design and optimization with MySQL
  - RESTful API development and testing
  - Agile development methodology

### Featured Projects
- **Car Rental Management System** - Full-stack Java project with database management
- **Hotel Reservation System** - Complete booking system with real-time updates
- **Detecting Parkinson's Disease Using ML** - Machine learning classification project
- **Skyward Sketchpad** - Computer vision gesture recognition system
- **MamaBot** - AI-powered pregnancy support system using ML and NLP

### Technical Skills
- **Programming**: Python, Java, JavaScript
- **Web Technologies**: HTML, CSS, React, Next.js
- **Databases**: SQL, MySQL
- **AI/ML**: Machine Learning, Deep Learning, NLP
- **Core CS**: Data Structures, Algorithms, OOP, DBMS

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. Clone or download the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout with theme setup
│   └── globals.css       # Global styles and design tokens
├── components/
│   ├── navbar.tsx        # Navigation bar with theme toggle
│   ├── hero.tsx          # Hero section with CTA buttons
│   ├── skills.tsx        # Technical skills showcase
│   ├── projects.tsx      # Featured projects section
│   ├── experience.tsx    # Professional experience section
│   ├── education.tsx     # Education and qualifications
│   ├── certificates.tsx  # Certifications and training
│   ├── contact.tsx       # Contact form and social links
│   └── three-background.tsx # 3D particle background
└── public/               # Static assets
\`\`\`

## Key Features Explained

### Smooth Animations
All sections use GSAP's ScrollTrigger for animations that trigger when sections enter the viewport. Cards scale, fade, and slide in with staggered timing for visual interest.

### Dark Mode
Click the theme toggle in the navbar to switch between light (lavender/blush pink accent) and dark modes. Preferences are saved in localStorage.

### Responsive Design
Mobile-optimized layouts with reduced spacing for better readability on small screens. Desktop versions maintain generous spacing for visual hierarchy.

### Accessibility
- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Color contrast that meets WCAG standards
- Screen reader friendly

## Contact

- **Email**: santhoshiderangula22@gmail.com
- **Phone**: +91 8639536954
- **Location**: Hyderabad, Telangana

## License

This project is open source and available for personal use.

---

**Version**: 7.0
**Last Updated**: November 2025
