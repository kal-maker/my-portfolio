# Portfolio Website

A high-end, modern personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Dark mode with glassmorphism effects and vibrant accent colors
- ✨ **Smooth Animations**: Scroll-triggered animations using Framer Motion
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🚀 **Performance**: Optimized with Vite for fast loading times
- 🎯 **Single Page Application**: Smooth scrolling navigation between sections

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **EmailJS** - Email service for contact form

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up EmailJS for contact form (see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed instructions):
   - Create a free account at [EmailJS](https://www.emailjs.com/)
   - Copy `.env.example` to `.env` in the root directory:
   ```bash
   cp .env.example .env
   ```
   - Edit `.env` and add your EmailJS credentials (this file is gitignored for security)
   **Note:** The `.env` file is already included in `.gitignore` to keep your credentials secure. Never commit this file to version control.

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navigation with blur effect
│   │   ├── Hero.jsx         # Hero section with animated background
│   │   ├── About.jsx        # About section with bio and tech stack
│   │   ├── Projects.jsx     # Projects grid with hover effects
│   │   ├── Contact.jsx      # Contact form with validation
│   │   └── Footer.jsx       # Footer with social links
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

### Colors

Edit `tailwind.config.js` to change the accent color:

```js
colors: {
  accent: {
    DEFAULT: '#6366f1', // Change this to your preferred color
    light: '#818cf8',
    dark: '#4f46e5',
  },
}
```

### Content

Update the content in each component file:
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - Bio and experience
- `src/components/Projects.jsx` - Project details
- `src/components/Contact.jsx` - Contact information

### Email Setup

The contact form uses EmailJS to send emails. See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for complete setup instructions.

## Environment Variables

This project uses environment variables for EmailJS configuration. The `.env` file is gitignored to protect your credentials.

**Important Security Notes:**
- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- For production deployments, add environment variables in your hosting platform's settings (Vercel, Netlify, etc.)

## Troubleshooting

If you encounter issues with the contact form or EmailJS setup, see:
- [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) - Detailed EmailJS setup guide
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Common issues and solutions

## License

MIT


