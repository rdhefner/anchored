# Anchored Website Setup Instructions

## Overview
This document provides step-by-step instructions for setting up external integrations and configurations for your Anchored website.

---

## 1. Environment Variables Setup

### Create your `.env.local` file:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your actual values following the instructions below.

---

## 2. Amazon Series Link

### What you need:
- Your Amazon series page URL or individual book link

### Steps:
1. Go to your book's Amazon page
2. Copy the full URL
3. (Optional) If you have an Amazon Associates account, create an affiliate link
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_AMAZON_SERIES_LINK=https://amazon.com/dp/YOUR_BOOK_ID
   ```

**Note:** If you don't set this, the site will use a placeholder Amazon.com link.

---

## 3. ConvertKit Email Integration (FREE)

### What it does:
- Captures email addresses from the EmailSignup component on your homepage
- Allows you to send updates and newsletters to subscribers

### Setup Steps:

#### Step 1: Create ConvertKit Account
1. Go to [https://convertkit.com](https://convertkit.com)
2. Sign up for a **free account** (supports up to 1,000 subscribers)
3. Confirm your email

#### Step 2: Create a Form
1. In ConvertKit, go to **Grow > Landing Pages & Forms**
2. Click **Create Form**
3. Choose **Inline** form type
4. Give it a name like "Anchored Email Signup"
5. Customize the thank you message (or use default)
6. **Save** the form

#### Step 3: Get Your Form ID
1. Go to your form settings
2. Look for the Form ID in the URL or form embed code
3. It will look like: `forms/1234567/subscribe`
4. The number `1234567` is your Form ID

#### Step 4: Get Your API Key
1. Go to **Settings** (gear icon) > **Advanced** > **API & Webhooks**
2. Click **Create API Key**
3. Give it a name like "Anchored Website"
4. Copy the API key

#### Step 5: Add to `.env.local`
```
NEXT_PUBLIC_CONVERTKIT_FORM_ID=1234567
NEXT_PUBLIC_CONVERTKIT_API_KEY=your_actual_api_key_here
```

#### Step 6: Restart Your Dev Server
```bash
npm run dev
```

---

## 4. Web3Forms Contact Form (FREE)

### What it does:
- Handles contact form submissions
- Sends form data to your email
- 100% free, no monthly limits

### Setup Steps:

#### Step 1: Create Web3Forms Account
1. Go to [https://web3forms.com](https://web3forms.com)
2. Click **Get Started for Free**
3. Sign up with your email
4. Confirm your email address

#### Step 2: Create an Access Key
1. Log in to your Web3Forms dashboard
2. Click **Create New Access Key**
3. Enter your email address (where form submissions will be sent)
4. Give it a name like "Anchored Contact Form"
5. Click **Create**
6. Copy the Access Key (looks like: `a1b2c3d4-1234-5678-90ab-cdef12345678`)

#### Step 3: Add to `.env.local`
```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=a1b2c3d4-1234-5678-90ab-cdef12345678
```

#### Step 4: Restart Your Dev Server
```bash
npm run dev
```

#### Step 5: Test the Form
1. Go to your Contact page
2. Fill out and submit the test form
3. Check your email for the submission
4. If it works, you're all set!

---

## 5. Adding Book Cover Images

### Required Images:
Your site expects these image files in the `/public/` directory:

```
/public/
├── hero-bg.jpg           (Hero section background - IMPORTANT!)
├── book-cover-launch.png (Launch book cover - Ages 12-14)
├── book-cover-navigate.png (Navigate book cover - Ages 14-16)
└── book-cover-anchor.png (Anchor book cover - Ages 16-18+)
```

### Steps:
1. Save your book cover images with the exact names above
2. Place them in the `/public/` folder
3. Recommended dimensions:
   - Book covers: 400x600px minimum (2:3 aspect ratio)
   - **Hero background: 1920x1080px minimum (landscape orientation)**
4. Optimize images before uploading (use tools like TinyPNG or ImageOptim)

### Background Image Tips:
The hero background (`hero-bg.jpg`) is used across all hero sections with a navy gradient overlay, so:
- Choose an image that works well darkened (the overlay is 60-70% opacity)
- Works best with: nature scenes, textures, subtle patterns, or abstract backgrounds
- Avoid: busy images with important details, faces, or text (they'll be hard to see under the overlay)
- The image is responsive and will crop/scale on different screen sizes
- Focus important visual elements in the center of the image for best results on mobile

**Note:** The placeholder images currently in use will automatically be replaced when you add your own images with these names.

---

## 6. Cinema Sunday Font (Optional)

The site is configured to use the **Cinema Sunday** font for the main "Anchored" title (matching your book cover).

### If you have the font file:
1. Create a `/public/fonts/` directory
2. Add your font files:
   ```
   /public/fonts/
   ├── cinema-sunday.woff2
   └── cinema-sunday.woff
   ```
3. The font is already configured in `globals.css`

### If you don't have the font file:
The site will fall back to Merriweather (serif), which still looks great. You can purchase or find Cinema Sunday font online if you'd like to add it later.

---

## 7. Testing Your Setup

### After configuring everything:

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Test each feature:**
   - ✅ Click all navigation links
   - ✅ Test the email signup form (homepage)
   - ✅ Test the contact form (contact page)
   - ✅ Click all "Get the Series" buttons (should go to your Amazon link)
   - ✅ View on mobile and desktop

3. **Check for console errors:**
   - Open browser DevTools (F12)
   - Look for any red errors in the Console tab

---

## 8. Deploying to Vercel

### Add Environment Variables to Vercel:

1. Go to your Vercel project dashboard
2. Click **Settings** > **Environment Variables**
3. Add each variable from your `.env.local` file:
   - `NEXT_PUBLIC_AMAZON_SERIES_LINK`
   - `NEXT_PUBLIC_CONVERTKIT_FORM_ID`
   - `NEXT_PUBLIC_CONVERTKIT_API_KEY`
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
4. Click **Save**
5. Redeploy your site

---

## 9. SEO & Metadata

All pages already have proper SEO metadata configured. You can customize them in each page file:

- Homepage: `src/app/page.tsx`
- How It Works: `src/app/about/page.tsx`
- Series: `src/app/series/page.tsx`
- Contact: `src/app/contact/page.tsx`

---

## 10. Troubleshooting

### Email signup not working?
- Check that your ConvertKit API key is correct
- Make sure the Form ID matches your ConvertKit form
- Check browser console for errors

### Contact form not working?
- Verify your Web3Forms access key is correct
- Check your email spam folder for test submissions
- Ensure your email is verified in Web3Forms dashboard

### Images not showing?
- Check that image files are in `/public/` with exact names
- Clear your browser cache
- Check file extensions (.png vs .jpg)

### Amazon link not working?
- Verify the URL in `.env.local` is complete
- Make sure you restarted the dev server after adding the variable

---

## Need Help?

If you run into any issues during setup, check:
- Browser console for error messages
- Terminal for build errors
- `.env.local` file for typos

---

## Quick Reference: Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Summary Checklist

- [ ] Created `.env.local` from `.env.local.example`
- [ ] Added Amazon series link
- [ ] Set up ConvertKit account and added credentials
- [ ] Set up Web3Forms account and added access key
- [ ] Added book cover images to `/public/`
- [ ] Added hero background image
- [ ] (Optional) Added Cinema Sunday font files
- [ ] Tested email signup form
- [ ] Tested contact form
- [ ] Tested all navigation and CTAs
- [ ] Added environment variables to Vercel
- [ ] Deployed to production

**You're all set! 🎉**
