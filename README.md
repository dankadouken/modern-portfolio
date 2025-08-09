# Modern Portfolio Website

A modern, responsive portfolio website inspired by Anthony Rosado's design, built with React, Tailwind CSS, and modern web technologies.

## 🌟 Features

- **Dark Theme Design**: Modern dark theme with circuit board pattern background
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Navigation**: Smooth scrolling navigation with active section highlighting
- **Project Showcase**: Beautiful project cards with colorful tech stack badges
- **Skills Visualization**: Interactive skill bars with percentage indicators
- **Professional Contact Section**: Clean contact section with social media links
- **Modern Typography**: Clean, professional fonts with excellent readability
- **Call-to-Action Buttons**: Prominent buttons for resume download and project viewing

## 🚀 Live Demo

**Live Website**: https://pblseivu.manus.space

## 🛠️ Technologies Used

- **React 19.1.0** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icons
- **shadcn/ui** - High-quality UI components

## 📁 Project Structure

```
modern-portfolio/
├── public/
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ui/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles and theme
│   ├── index.css        # Base styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#3B82F6) for name highlighting and buttons
- **Tech Badges**: Color-coded badges for different technologies
  - AWS: Orange
  - Python: Yellow
  - React: Cyan
  - Node.js: Green
  - Java: Red
  - Docker: Blue
  - And many more...

### Layout Sections
1. **Hero Section**: Large introduction with name, title, and call-to-action buttons
2. **Projects Section**: Grid layout of project cards with tech stacks
3. **About Section**: Professional summary with skills visualization
4. **Contact Section**: Contact information with social media links

## 🔧 Development

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm

### Installation
```bash
# Clone or extract the project
cd modern-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 📝 Customization Guide

### Personal Information
Edit the following in `src/App.jsx`:

1. **Name and Title**: Update the hero section text
2. **Projects**: Modify the `projects` array with your own projects
3. **Skills**: Update the `skills` array with your technical proficiencies
4. **Contact Information**: Update email, GitHub, and LinkedIn links

### Styling
- **Colors**: Modify color variables in `src/App.css`
- **Typography**: Update font families in Tailwind classes
- **Layout**: Adjust spacing and sizing in component JSX

### Adding New Projects
```javascript
{
  id: 7,
  title: "Your Project Name",
  description: "Project description with key achievements and metrics",
  technologies: ["React", "Node.js", "AWS"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://your-project-demo.com",
  featured: true
}
```

### Tech Stack Colors
Add new technology colors in the `techColors` object:
```javascript
const techColors = {
  "YourTech": "bg-purple-500",
  // ... existing colors
}
```

## 🚀 Deployment

The portfolio is already deployed and accessible at: **https://pblseivu.manus.space**

### Deploy to Other Platforms

#### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure custom domain if needed

#### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- Mobile-first design approach
- Flexible grid layouts that adapt to screen size
- Touch-friendly navigation and buttons
- Optimized typography for mobile reading
- Proper spacing and sizing on all devices

## 🎯 Key Improvements Over Original

1. **Modern Dark Theme**: Professional dark design with circuit board pattern
2. **Enhanced Visual Hierarchy**: Better typography and spacing
3. **Colorful Tech Badges**: Eye-catching technology indicators
4. **Smooth Interactions**: Hover effects and smooth scrolling
5. **Professional Projects**: Detailed project descriptions with metrics
6. **Skills Visualization**: Interactive progress bars
7. **Better Navigation**: Smooth scrolling with active states
8. **Call-to-Action Focus**: Prominent buttons for key actions

## 📞 Support

For questions or customization help, contact:
- **Email**: joshua.hammond@email.com
- **GitHub**: https://github.com/dankadouken
- **LinkedIn**: https://linkedin.com/in/joshua-hammond

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React and modern web technologies**

