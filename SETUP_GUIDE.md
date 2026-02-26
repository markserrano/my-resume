# 🚀 QUICK SETUP GUIDE - Connect to GitHub Now

## ⚡ Option 1: Direct Upload (Fastest - 5 minutes)

### Step 1: Create Repository
1. Go to https://github.com/new
2. **Repository name**: `markhadrian` (for markhadrian.github.io)
   - OR use `portfolio` if you prefer
3. **Description**: "IT Professional Portfolio - Mark Hadrian P. Serrano"
4. **Public** (must be public for free GitHub Pages)
5. Check **"Add a README file"**
6. Click **"Create repository"**

### Step 2: Upload Files
1. In your new repository, click **"Add file"** → **"Upload files"**
2. Create these folders first:
   - Click **"Create new file"**
   - Type `css/style.css` (this creates the folder)
   - Paste the CSS content
   - Click **"Commit new file"**

   - Click **"Add file"** → **"Create new file"**
   - Type `js/main.js`
   - Paste the JS content
   - Click **"Commit new file"**

3. Now upload `index.html`:
   - Click **"Add file"** → **"Upload files"**
   - Drag and drop `index.html`
   - Click **"Commit changes"**

### Step 3: Enable GitHub Pages
1. Go to **Settings** tab (top of repo)
2. Scroll down left sidebar → click **"Pages"**
3. Under **"Source"**, select **"Deploy from a branch"**
4. Select **"main"** branch, **"/ (root)"** folder
5. Click **Save**
6. Wait 2-5 minutes
7. Your site will be at: `https://markhadrian.github.io`

---

## 💻 Option 2: Git Command Line (For developers)

```bash
# 1. Create repository on GitHub first (as above)

# 2. Clone to your computer
git clone https://github.com/markhadrian/markhadrian.github.io.git
cd markhadrian.github.io

# 3. Create folder structure
mkdir css js

# 4. Copy files
cp /path/to/index.html .
cp /path/to/style.css css/
cp /path/to/main.js js/

# 5. Add, commit, push
git add .
git commit -m "Initial portfolio website"
git push origin main

# 6. Enable GitHub Pages in repository settings (as above)
```

---

## 🔗 Connecting Your GitHub Profile

### Update These Links in index.html:

Search for these text in your `index.html` and replace with your actual GitHub username:

1. **Line ~45** (Navigation):
   ```html
   <a href="https://github.com/markhadrian" target="_blank">
   ```
   Change `markhadrian` to your username

2. **Line ~95** (Hero section):
   ```html
   <a href="https://github.com/markhadrian" target="_blank">
   ```
   Change `markhadrian` to your username

3. **Line ~350** (Footer):
   ```html
   <a href="https://github.com/markhadrian" target="_blank">
   ```
   Change `markhadrian` to your username

### Add GitHub Stats Widget (Optional):
Add this code to your HTML to show live GitHub statistics:

```html
<!-- Add this in the About section or create a new section -->
<div class="glass-card rounded-2xl p-6 mt-6">
    <h3 class="font-display text-lg font-bold text-white mb-4">GitHub Activity</h3>
    <img src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=dark&hide_border=true&bg_color=0f172a&title_color=06b6d4&text_color=e2e8f0&icon_color=8b5cf6" 
         alt="GitHub Stats" 
         class="w-full rounded-lg">
</div>
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## 🌐 Custom Domain (Optional)

If you want a custom domain like `markhadrian.dev`:

### Step 1: Buy Domain
- Namecheap, GoDaddy, Google Domains, Cloudflare
- Suggested: `markhadrian.dev`, `mhserrano.tech`, `markhadrian.me`

### Step 2: DNS Configuration
Add these records at your domain provider:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | markhadrian.github.io |

### Step 3: GitHub Configuration
1. In repository: **Settings** → **Pages**
2. Under **"Custom domain"**, enter: `markhadrian.dev`
3. Click **Save**
4. Check **"Enforce HTTPS"** after certificate generates (~1 hour)

### Step 4: Create CNAME File
Create file named `CNAME` (no extension) in repository:
```
markhadrian.dev
```

---

## ✅ Post-Setup Checklist

- [ ] Repository is Public
- [ ] GitHub Pages enabled in Settings
- [ ] Site loads at `https://markhadrian.github.io`
- [ ] All links updated with correct GitHub username
- [ ] Mobile responsive (test on phone)
- [ ] LinkedIn link working
- [ ] Email link working
- [ ] Custom domain configured (if applicable)

---

## 🆘 Troubleshooting

### "404 Site not found"
- Repository must be **Public**
- Wait 5-10 minutes after first setup
- Check that `index.html` is at root level
- Verify GitHub Pages is enabled in Settings

### "CSS/JS not loading"
- Check file paths: `css/style.css` and `js/main.js`
- Files must be in correct folders
- Case sensitive: `CSS` ≠ `css`

### "Custom domain not working"
- DNS changes take 24-48 hours to propagate
- Check CNAME file exists in repository
- Verify DNS records are correct
- Ensure "Enforce HTTPS" is checked

### "Changes not showing"
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check Actions tab for deployment status
- Wait 2-5 minutes for GitHub to build

---

## 📞 Need Help?

**GitHub Documentation**: https://docs.github.com/en/pages
**Status Page**: https://www.githubstatus.com

**Your Contact Info**:
- Email: markhadrianserrano@gmail.com
- LinkedIn: https://www.linkedin.com/in/mark-hadrian-serrano/

---

## 🎉 Success!

Once deployed, your portfolio will be live and you can:
1. Add link to LinkedIn profile
2. Include in job applications
3. Share on social media
4. List on resume

**Star this repository** if you found it helpful!
