
# Create comprehensive README.md
readme_content = '''# Mark Hadrian P. Serrano - IT Professional Portfolio

🌐 **Live Demo**: [https://markhadrian.github.io](https://markhadrian.github.io) (Update with your actual URL)

A modern, responsive portfolio website showcasing my IT professional experience, technical skills, and certifications. Built with pure HTML, Tailwind CSS, and GSAP animations.

![Portfolio Preview](./preview.png)

## 🚀 Features

- **Modern Dark Theme** - Cyberpunk-inspired design with cyan/violet gradients
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - GSAP-powered scroll animations and typewriter effects
- **Interactive Elements** - Hover effects, parallax backgrounds, and dynamic counters
- **Glass Morphism UI** - Modern translucent design elements
- **SEO Optimized** - Semantic HTML structure and meta tags
- **Fast Loading** - Optimized assets and CDN-hosted libraries

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **GSAP** - Professional-grade JavaScript animations
- **Font Awesome** - Icons and brand logos
- **Google Fonts** - Space Grotesk & Inter typography

## 📂 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles and animations
├── js/
│   └── main.js         # Interactive functionality
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
├── CNAME               # Custom domain configuration (optional)
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A GitHub account
- Git installed on your local machine (optional)
- A text editor (VS Code recommended)

### Installation

#### Option 1: Direct GitHub Upload (Easiest)

1. **Create a new repository** on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `markhadrian` (for username.github.io) OR `portfolio`
   - Make it **Public**
   - Check **Add a README file**
   - Click **Create repository**

2. **Upload the files**:
   - Click **"Add file"** → **"Upload files"**
   - Drag and drop these files:
     - `index.html`
     - `css/style.css`
     - `js/main.js`
   - Commit message: "Initial portfolio upload"
   - Click **"Commit changes"**

3. **Enable GitHub Pages**:
   - Go to **Settings** → **Pages** (in left sidebar)
   - Under **Source**, select **"Deploy from a branch"**
   - Select **"main"** branch and **"/ (root)"** folder
   - Click **Save**
   - Wait 2-5 minutes for deployment

4. **Your site is live at**:
   - `https://yourusername.github.io` (if repo name matches username)
   - `https://yourusername.github.io/portfolio` (if repo name is "portfolio")

#### Option 2: Git Command Line

```bash
# Clone the repository (or create new)
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Create folder structure
mkdir css js

# Copy files into respective folders
# index.html -> root
# style.css -> css/
# main.js -> js/

# Add, commit, and push
git add .
git commit -m "Initial portfolio website commit"
git push origin main
```

## 🌐 Custom Domain Setup (Optional)

To use your own domain (e.g., `markhadrian.dev`):

### 1. Configure GitHub

1. In your repository, go to **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain: `markhadrian.dev`
3. Click **Save**
4. Check **"Enforce HTTPS"** (wait for certificate to generate, ~1 hour)

### 2. Configure DNS Records

At your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.), add these records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 30 min |
| A | @ | 185.199.109.153 | 30 min |
| A | @ | 185.199.110.153 | 30 min |
| A | @ | 185.199.111.153 | 30 min |
| CNAME | www | yourusername.github.io | 30 min |

### 3. Create CNAME File

Create a file named `CNAME` (no extension) in your repository root:

```
markhadrian.dev
```

Commit this file to your repository.

### 4. Wait for Propagation

DNS changes can take up to 24 hours to propagate globally. Use [whatsmydns.net](https://whatsmydns.net) to check propagation status.

## 🔧 Customization Guide

### Changing Personal Information

Edit these sections in `index.html`:

1. **Hero Section** (Line ~50-80):
   - Name, title, description
   - Social media links

2. **About Section** (Line ~150-200):
   - Personal bio
   - Contact details
   - Location

3. **Experience Section** (Line ~250-400):
   - Job titles, companies, dates
   - Job descriptions

4. **Skills Section** (Line ~450-550):
   - Technical skills and tags

5. **Certifications** (Line ~600-700):
   - Awards and certificates

### Changing Colors

Edit `css/style.css`:

```css
/* Primary accent color (currently cyan) */
--accent-color: #06b6d4;

/* Secondary accent color (currently violet) */
--secondary-color: #8b5cf6;
```

### Adding Your Photo

1. Add your image to the repository (e.g., `images/profile.jpg`)
2. In `index.html`, replace the initials avatar:

```html
<!-- Replace this -->
<div class="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 ...">MHS</div>

<!-- With this -->
<img src="images/profile.jpg" alt="Mark Hadrian Serrano" class="w-32 h-32 rounded-full object-cover shadow-2xl">
```

## 📱 Connecting Your GitHub Account

I've added GitHub links throughout the site. To make them work with your account:

1. **Update GitHub username** in `index.html`:
   - Search for `markhadrian` and replace with your actual GitHub username
   - Locations: Navigation, Hero section, Footer

2. **Add GitHub Stats** (Optional):
   Add this to your HTML to display live GitHub statistics:
   ```html
   <img src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=dark" alt="GitHub Stats">
   ```

3. **Pin this repository** on your GitHub profile:
   - Go to your profile
   - Click "Customize your pins"
   - Select this portfolio repository

## 🔄 Automatic Deployment with GitHub Actions

Create `.github/workflows/deploy.yml` for automatic deployment:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 📊 Performance Optimization

The site is already optimized, but you can further improve:

1. **Compress Images**: Use [TinyPNG](https://tinypng.com) for image compression
2. **Minify CSS/JS**: Use minification tools for production
3. **Enable Gzip**: GitHub Pages handles this automatically
4. **Lazy Loading**: Add `loading="lazy"` to below-fold images

## 🐛 Troubleshooting

### Site not showing up?
- Check that repository is **Public**
- Verify GitHub Pages is enabled in Settings
- Ensure `index.html` is at the root level
- Wait 5-10 minutes after first deployment

### Custom domain not working?
- Verify DNS records are correct
- Check that CNAME file exists in repository
- Wait 24 hours for DNS propagation
- Ensure "Enforce HTTPS" is checked

### Animations not working?
- Check browser console for errors
- Ensure GSAP library loads (check internet connection)
- Try disabling browser extensions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: markhadrianserrano@gmail.com
- **LinkedIn**: [Mark Hadrian Serrano](https://www.linkedin.com/in/mark-hadrian-serrano/)
- **Phone**: 0969-191-6125

---

**⭐ Star this repository if you found it helpful!**

Built with ❤️ by Mark Hadrian P. Serrano
'''

# Save README
with open('/mnt/kimi/output/README.md', 'w', encoding='utf-8') as f:
    f.write(readme_content)

print("✅ README.md created successfully")

# Create GitHub Actions workflow file
workflow_content = '''name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
'''

# Save workflow file
with open('/mnt/kimi/output/deploy.yml', 'w', encoding='utf-8') as f:
    f.write(workflow_content)

print("✅ GitHub Actions workflow created")

# Create CNAME template
cname_content = '''# Replace with your custom domain (optional)
# Example: markhadrian.dev
# Delete this file if using default github.io domain
'''

with open('/mnt/kimi/output/CNAME', 'w', encoding='utf-8') as f:
    f.write(cname_content)

print("✅ CNAME template created")

print("\n" + "="*60)
print("ALL FILES CREATED SUCCESSFULLY!")
print("="*60)
print("\nFiles created:")
print("1. index.html - Main website file")
print("2. css/style.css - Styles and animations")
print("3. js/main.js - Interactive functionality")
print("4. README.md - Complete documentation")
print("5. deploy.yml - GitHub Actions workflow")
print("6. CNAME - Custom domain configuration")
print("\nNext steps: Follow the README.md instructions")
print("to upload these files to your GitHub repository.")
