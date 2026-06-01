# Mohd Rafey - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Showcase your projects, skills, and experience with beautiful animations and smooth interactions.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes with multiple color themes
- **Smooth Animations**: Framer Motion for elegant page transitions and interactions
- **Smooth Scrolling**: Lenis integration for premium scroll experience
- **Form Validation**: Client-side form validation with error messages
- **SEO Optimized**: Meta tags and Open Graph integration
- **Error Boundaries**: Graceful error handling with error boundary component
- **Performance**: Optimized with Vite for fast builds and development

## 🛠️ Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Validation**: Built-in email validation
- **Smooth Scroll**: Lenis
- **3D Effects**: Three.js (optional)

## 📋 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Configuration

### Update Personal Information

Edit `src/data/portfolioData.js` to add your information:

```javascript
export const profileData = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  resumeLink: "https://your-resume-link.pdf",
  location: "Your Location",
};
```

### Add Your Projects

Update the `projectsData` array with your projects:

```javascript
{
  id: 1,
  title: "Project Title",
  description: "Project description",
  image: "image-url",
  tags: ["React", "Node.js"],
  demoUrl: "https://demo-link.com",
  githubUrl: "https://github.com/username/repo",
  category: "React"
}
```

### Configure Email (Contact Form)

The contact form currently shows success/error states. To enable actual email sending:

**Option 1: Using EmailJS (Recommended)**

1. Sign up at [emailjs.com](https://emailjs.com)
2. Create email service and email template
3. Install EmailJS: `npm install @emailjs/browser`
4. Update `src/components/Contact.jsx`:

```javascript
import emailjs from "@emailjs/browser";

// Initialize EmailJS (add to useEffect)
emailjs.init("YOUR_PUBLIC_KEY");

// Update handleSubmit:
const sendEmail = () => {
  emailjs
    .send("SERVICE_ID", "TEMPLATE_ID", {
      to_email: profileData.email,
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    })
    .then(() => {
      setStatus("success");
    })
    .catch(() => {
      setStatus("error");
    });
};
```

**Option 2: Using Formspree**

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update the form action in `Contact.jsx`

## 🎨 Theme Customization

Edit `src/index.css` to customize colors:

```css
:root {
  --primary: #8b5cf6;
  --primary-light: #a78bfa;
  --secondary: #ec4899;
  --bg-color: #f8fafc;
  --card-color: #ffffff;
}

.dark {
  --bg-color: #030014;
  --card-color: #0b0524;
}
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── ErrorBoundary.jsx
│   └── ...
├── data/
│   └── portfolioData.js # Portfolio content
├── hooks/
│   └── ThemeContext.jsx # Theme management
├── utils/
│   └── cn.js           # Class name utility
├── App.jsx
├── main.jsx
└── index.css           # Global styles
```

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Vercel automatically deploys on push

### Deploy on Netlify

1. Push to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Deployment

```bash
npm run build
# Deploy the `dist` folder to your hosting
```

## ✅ Recent Updates

- ✅ Fixed portfolio data (resume link, contact info, project URLs)
- ✅ Added comprehensive form validation with error messages
- ✅ Fixed theme context race condition (prevents theme flash)
- ✅ Removed unused React imports from all components
- ✅ Added Error Boundary component for graceful error handling
- ✅ Improved SEO with meta tags and Open Graph tags
- ✅ Added sending state to contact form

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!
