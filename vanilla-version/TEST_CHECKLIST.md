# 🧪 Complete Testing Checklist

## Pre-Test Setup

1. Open `index.html` in a web browser
2. Open Developer Tools (F12)
3. Check Console for any errors
4. Check Network tab to verify all assets load

## ✅ Visual Verification

### Hero Section
- [ ] Background image loads correctly
- [ ] Award badge displays with green gradient
- [ ] "Live your best life" heading is visible
- [ ] Three stats display: 10x, 9, 20K+
- [ ] Stats have gradient text effect
- [ ] "Shop Now" button displays
- [ ] Desktop: Navigation menu visible (≥1024px)
- [ ] Mobile: Hamburger menu visible (<1024px)

### Section 2: Product Gallery
- [ ] Main product image loads
- [ ] Left arrow button visible
- [ ] Right arrow button visible
- [ ] Pagination dots visible (8 dots)
- [ ] Thumbnail gallery displays (8 thumbnails)
- [ ] Product title "GTG Perfumes" displays
- [ ] 4.7 star rating displays (4 full stars + 1 partial)
- [ ] Product description text visible
- [ ] Single Subscription card displays
- [ ] Double Subscription card displays
- [ ] "Most Popular" badge on Single Subscription
- [ ] "Add to Cart" button displays

### Section 3: Collection
- [ ] Collection image loads
- [ ] "Our Collection" heading displays
- [ ] 4 accordion items display
- [ ] First accordion item is expanded by default
- [ ] Plus/minus icons display correctly

### Section 4: Statistics
- [ ] Green background section displays
- [ ] Four percentage boxes display
- [ ] Text is white on green background

### Section 5: Comparison Table
- [ ] Desktop (≥768px): Full table displays
- [ ] Mobile (<768px): Card layout displays
- [ ] GTG logo displays
- [ ] Competitor logos display (Arose, Bella, Daisies)
- [ ] "Try It Risk-Free" button displays

### Footer
- [ ] Dark green background
- [ ] "GTG" logo in white
- [ ] Navigation links display
- [ ] Social media icons (Facebook, X)
- [ ] Newsletter input field
- [ ] Subscribe button
- [ ] Privacy policy text

## 🖱️ Interactive Features Testing

### 1. Image Gallery Navigation

**Test 1: Arrow Navigation**
- [ ] Click right arrow → image changes to next
- [ ] Click right arrow 8 times → returns to first image
- [ ] Click left arrow → image changes to previous
- [ ] Active dot updates when arrow clicked
- [ ] Active thumbnail updates when arrow clicked

**Test 2: Dot Navigation**
- [ ] Click each dot (1-8) → main image changes
- [ ] Clicked dot becomes active (darker, wider)
- [ ] Active thumbnail updates
- [ ] Smooth transition between images

**Test 3: Thumbnail Navigation**
- [ ] Click each thumbnail → main image changes
- [ ] Clicked thumbnail gets green border
- [ ] Active dot updates
- [ ] All three controls stay synchronized

**Test 4: Synchronization**
- [ ] Change image via arrow → dot and thumbnail update
- [ ] Change image via dot → arrow and thumbnail update
- [ ] Change image via thumbnail → arrow and dot update
- [ ] No layout shift during transitions

### 2. Subscription Selection

**Test 1: Single Subscription**
- [ ] Click "Single Subscription" radio
- [ ] "Most Popular" badge appears
- [ ] Content expands smoothly
- [ ] Shows: Fragrance selection (3 options)
- [ ] Shows: What's Included section
- [ ] Shows: Benefits list (5 items with checkmarks)
- [ ] Double Subscription content collapses

**Test 2: Double Subscription**
- [ ] Click "Double Subscription" radio
- [ ] "Most Popular" badge disappears
- [ ] Content expands smoothly
- [ ] Shows: Fragrance 1 selection (3 options)
- [ ] Shows: Fragrance 2 selection (3 options)
- [ ] Shows: What's Included section (2 bottles)
- [ ] Shows: Benefits list (5 items with checkmarks)
- [ ] Single Subscription content collapses

**Test 3: Expansion Animation**
- [ ] Switch between Single ↔ Double multiple times
- [ ] Animation is smooth (no jerking)
- [ ] No layout shift
- [ ] Content fully visible when expanded

### 3. Fragrance Selection

**Test 1: Single Subscription Fragrances**
- [ ] Click "Original" → card gets green border
- [ ] Click "Lily" → card gets green border, Original deselects
- [ ] Click "Rose" → card gets green border, Lily deselects
- [ ] "BEST-SELLER" badge shows on Original
- [ ] Radio button inside card updates
- [ ] "What's Included" image updates to selected fragrance

**Test 2: Double Subscription Fragrances**
- [ ] Select Fragrance 1: Original → card gets green border
- [ ] Select Fragrance 2: Lily → card gets green border
- [ ] Fragrance 1 and 2 selections are independent
- [ ] "What's Included" shows both selected fragrances
- [ ] Can select same fragrance for both (e.g., Original + Original)

**Test 3: Visual Feedback**
- [ ] Hover over fragrance card → border color changes
- [ ] Selected card has green border + ring effect
- [ ] Unselected cards have gray border
- [ ] Images display correctly in cards

### 4. Dynamic Add to Cart URL

**Test All 9 Combinations:**

Single Subscription:
- [ ] Original → URL: `/cart/add?subscription=single&fragrance=original&purchase=onetime`
- [ ] Lily → URL: `/cart/add?subscription=single&fragrance=lily&purchase=onetime`
- [ ] Rose → URL: `/cart/add?subscription=single&fragrance=rose&purchase=onetime`

Double Subscription (test a few):
- [ ] Original + Original → URL: `/cart/add?subscription=double&fragrance=original-original&purchase=onetime`
- [ ] Original + Lily → URL: `/cart/add?subscription=double&fragrance=original-lily&purchase=onetime`
- [ ] Lily + Rose → URL: `/cart/add?subscription=double&fragrance=lily-rose&purchase=onetime`
- [ ] Rose + Rose → URL: `/cart/add?subscription=double&fragrance=rose-rose&purchase=onetime`

**How to Check:**
- Hover over "Add to Cart" button
- Check bottom-left of browser for URL preview
- Or right-click → "Copy Link Address" → paste to verify

### 5. Collection Accordion

**Test 1: Expand/Collapse**
- [ ] Click item 1 header → expands (if collapsed)
- [ ] Click item 2 header → item 2 expands, item 1 collapses
- [ ] Click item 3 header → item 3 expands, item 2 collapses
- [ ] Click item 4 header → item 4 expands, item 3 collapses
- [ ] Only ONE item open at a time

**Test 2: Icon Changes**
- [ ] Collapsed item shows plus (+) icon
- [ ] Expanded item shows minus (−) icon
- [ ] Icon transitions smoothly

**Test 3: Animation**
- [ ] Content expands smoothly (not instant)
- [ ] Content collapses smoothly
- [ ] No layout jumping
- [ ] Text is readable during animation

### 6. Statistics Counter Animation

**Test 1: Scroll Trigger**
- [ ] Scroll to top of page
- [ ] Counters show 0%
- [ ] Scroll down to statistics section
- [ ] When section is ~50% visible, counters start animating
- [ ] Counters animate from 0% to target (84%, 78%, 89%, 90%)
- [ ] Animation takes ~2 seconds
- [ ] Animation is smooth (not jumpy)

**Test 2: One-Time Animation**
- [ ] Scroll past statistics section
- [ ] Scroll back up
- [ ] Counters should NOT animate again
- [ ] They should stay at final values

**Test 3: Timing**
- [ ] All four counters animate simultaneously
- [ ] All finish at approximately the same time
- [ ] Final values are exact (84%, 78%, 89%, 90%)

### 7. Comparison Table

**Desktop View (≥768px):**
- [ ] Full table displays
- [ ] GTG column has green background
- [ ] Check marks (✓) render correctly
- [ ] Cross marks (✗) render correctly
- [ ] Text values display correctly (10x, 1x, 9, 5, etc.)
- [ ] Hover over row → background changes to light gray
- [ ] Table is readable and aligned

**Mobile View (<768px):**
- [ ] Table is hidden
- [ ] Card layout displays
- [ ] Brand logos in grid (GTG + 3 others)
- [ ] Each quality is a separate card
- [ ] GTG values on left (green background)
- [ ] Competitor values on right (grid layout)
- [ ] All 8 qualities display
- [ ] Icons and text are readable

### 8. Mobile Navigation

**Test 1: Menu Toggle**
- [ ] Resize browser to <1024px
- [ ] Desktop menu hides
- [ ] Hamburger icon appears (3 lines)
- [ ] Click hamburger → menu slides in from right
- [ ] Hamburger animates to X
- [ ] Click X → menu slides out
- [ ] Hamburger animates back to 3 lines

**Test 2: Menu Content**
- [ ] Menu shows all nav links (Home, Shop, Fragrances, etc.)
- [ ] Menu shows search icon
- [ ] Menu shows "Shop Now" button
- [ ] Links are touch-friendly (not too small)

**Test 3: Close Behavior**
- [ ] Click outside menu → menu closes
- [ ] Click on a link → menu closes
- [ ] Click X button → menu closes

### 9. Newsletter Form

**Test 1: Form Submission**
- [ ] Enter email in input field
- [ ] Click "Subscribe" button
- [ ] Alert appears: "Thank you for subscribing..."
- [ ] Input field clears after submission
- [ ] Console logs email (check DevTools)

**Test 2: Validation**
- [ ] Try to submit empty form → browser validation error
- [ ] Try to submit invalid email → browser validation error
- [ ] Submit valid email → success

### 10. Responsive Design

**Test at Different Widths:**

**Mobile (375px)**
- [ ] All content fits without horizontal scroll
- [ ] Text is readable
- [ ] Buttons are touch-friendly
- [ ] Images scale correctly
- [ ] Hamburger menu works

**Tablet (768px)**
- [ ] Layout adjusts appropriately
- [ ] Product grid may be 1 column
- [ ] Table switches to cards
- [ ] Navigation still mobile menu

**Laptop (1024px)**
- [ ] Desktop navigation appears
- [ ] Product grid becomes 2 columns
- [ ] Table displays as full table
- [ ] All sections look balanced

**Desktop (1280px+)**
- [ ] Full desktop layout
- [ ] Maximum width container (91rem)
- [ ] All sections centered
- [ ] Optimal spacing

## 🔍 Technical Checks

### Console Errors
- [ ] No JavaScript errors in console
- [ ] No CSS errors
- [ ] No 404 errors for assets
- [ ] No CORS errors

### Network Tab
- [ ] All images load (200 status)
- [ ] CSS loads (200 status)
- [ ] JavaScript loads (200 status)
- [ ] No failed requests

### Performance
- [ ] Page loads in < 3 seconds
- [ ] Images load progressively
- [ ] No layout shift during load
- [ ] Smooth scrolling
- [ ] Animations run at 60fps

### Accessibility
- [ ] All images have alt text
- [ ] All buttons have labels
- [ ] Form inputs have labels
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Semantic HTML used

## 🌐 Cross-Browser Testing

Test in each browser:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

For each browser, verify:
- [ ] Layout looks correct
- [ ] All features work
- [ ] No console errors
- [ ] Animations are smooth

## 📱 Mobile Device Testing

Test on actual devices:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)

Verify:
- [ ] Touch interactions work
- [ ] Scrolling is smooth
- [ ] No horizontal scroll
- [ ] Text is readable
- [ ] Buttons are tappable

## 🎯 Final Verification

- [ ] All 50+ tests passed
- [ ] No console errors
- [ ] No visual bugs
- [ ] All features functional
- [ ] Responsive on all devices
- [ ] Cross-browser compatible
- [ ] Performance is good
- [ ] Ready for deployment

## 📊 Score Your Results

- **50/50 tests passed**: ✅ Perfect! Ready to deploy
- **45-49 tests passed**: ⚠️ Good, fix minor issues
- **40-44 tests passed**: ⚠️ Several issues, needs work
- **< 40 tests passed**: ❌ Major issues, debug required

---

**Testing Time:** ~30-45 minutes for complete checklist
**Recommended:** Test in order, check off as you go
