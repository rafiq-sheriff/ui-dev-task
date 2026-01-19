# Quick Start Guide

## 🚀 Get Started in 2 Minutes

### Step 1: Run Setup

**Mac/Linux:**
```bash
cd vanilla-version
bash setup.sh
```

**Windows:**
```bash
cd vanilla-version
setup.bat
```

### Step 2: Start Server

**Option A - Python:**
```bash
python -m http.server 8000
```

**Option B - Node.js:**
```bash
npx http-server -p 8000
```

**Option C - VS Code:**
Right-click `index.html` → "Open with Live Server"

### Step 3: Open Browser

Navigate to: `http://localhost:8000`

## ✅ What to Test

### 1. Image Gallery (Section 2)
- ✅ Click left/right arrows to navigate
- ✅ Click dots to jump to specific images
- ✅ Click thumbnails to change main image
- ✅ All three controls should sync perfectly

### 2. Subscription Options
- ✅ Click "Single Subscription" radio button
  - Should expand showing fragrance selection
  - "Most Popular" badge should appear
- ✅ Click "Double Subscription" radio button
  - Should expand showing two fragrance selections
  - "Most Popular" badge should disappear

### 3. Fragrance Selection
- ✅ Select different fragrances (Original/Lily/Rose)
- ✅ "What's Included" should update to show selected fragrance
- ✅ Check that Add to Cart URL updates (hover over button, check bottom-left of browser)

### 4. Dynamic Add to Cart
- ✅ Try all combinations:
  - Single + Original
  - Single + Lily
  - Single + Rose
  - Double + Original + Original
  - Double + Lily + Rose
  - etc.
- ✅ URL should change for each combination

### 5. Collection Accordion (Section 3)
- ✅ Click accordion headers
- ✅ Only one should be open at a time
- ✅ Smooth expand/collapse animations
- ✅ Plus icon changes to minus when expanded

### 6. Statistics Counter (Section 4)
- ✅ Scroll down to statistics section
- ✅ Numbers should animate from 0 to target (84%, 78%, 89%, 90%)
- ✅ Animation should trigger only once

### 7. Comparison Table (Section 5)
- ✅ Desktop: Full table with green GTG column
- ✅ Mobile: Card-based layout
- ✅ Resize browser to test responsive behavior

### 8. Mobile Menu
- ✅ Resize browser to mobile size
- ✅ Click hamburger menu
- ✅ Menu should slide in
- ✅ Click outside or on link to close

### 9. Newsletter Form (Footer)
- ✅ Enter email
- ✅ Click Subscribe
- ✅ Should show alert and clear input

### 10. Responsive Design
- ✅ Test at different screen sizes:
  - Mobile: < 640px
  - Tablet: 768px
  - Laptop: 1024px
  - Desktop: 1280px+

## 🐛 Troubleshooting

### Images not loading?
- Run setup script to copy assets
- Check console for 404 errors
- Verify assets folder exists in vanilla-version/

### JavaScript not working?
- Make sure you're using HTTP server (not file://)
- Check browser console for errors
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Styles look broken?
- Clear browser cache
- Check that styles.css loaded (Network tab in DevTools)
- Verify no CSS errors in console

### Mobile menu not working?
- Try resizing browser window
- Check that main.js is loaded
- Look for JavaScript errors in console

## 📱 Testing on Real Devices

### Desktop
- Chrome, Firefox, Edge, Safari
- Test at 1920×1080, 1366×768, 1280×720

### Tablet
- Test at 768×1024 (iPad)
- Test at 800×1280 (Android tablet)

### Mobile
- Test at 375×667 (iPhone SE)
- Test at 414×896 (iPhone 11 Pro Max)
- Test at 360×640 (Android)

## 🎯 Feature Checklist

- ✅ Hero section with stats and gradient text
- ✅ Product image gallery (8 images)
- ✅ Thumbnail navigation
- ✅ Dot indicators
- ✅ Arrow navigation
- ✅ Single/Double subscription selection
- ✅ Fragrance radio buttons
- ✅ Dynamic "What's Included" preview
- ✅ 9 unique Add to Cart URL combinations
- ✅ Expandable subscriptions with smooth animations
- ✅ Collection accordion (4 items)
- ✅ Animated percentage counters (IntersectionObserver)
- ✅ Comparison table (desktop/mobile views)
- ✅ 5-star rating with partial fill (4.7 stars)
- ✅ Responsive navigation (desktop/mobile)
- ✅ Newsletter subscription form
- ✅ Footer with social links

## 📊 Performance Check

Open DevTools → Performance tab:
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Total Page Size: < 2MB (with images)

## 🔍 Code Quality Check

- ✅ No console errors
- ✅ No console warnings
- ✅ All images have alt text
- ✅ All buttons have labels
- ✅ Forms are accessible
- ✅ Proper semantic HTML
- ✅ Valid CSS (no errors)
- ✅ Clean JavaScript (no linting errors)

## 📖 Next Steps

1. **Read README.md** - Full documentation
2. **Read CONVERSION_SUMMARY.md** - Technical details
3. **Customize** - Change colors, images, content
4. **Deploy** - Host on any static hosting service

## 💡 Pro Tips

1. Use browser DevTools to inspect elements
2. Check Network tab to verify all assets load
3. Use Lighthouse for performance audit
4. Test in incognito mode to avoid cache issues
5. Use responsive design mode for quick testing

---

**Need Help?**

1. Check README.md for detailed documentation
2. Review CONVERSION_SUMMARY.md for implementation details
3. Check browser console for errors
4. Verify setup script ran successfully

**Happy Coding! 🎉**
