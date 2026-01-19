/* ========================================
   Main JavaScript File
   GTG Perfumes Vanilla Implementation
   ======================================== */

'use strict';

// ========================================
// Data Configuration
// ========================================

const GALLERY_IMAGES = [
    'assets/images/section2/left/perfume_img_l.png',
    'assets/images/section2/left/img1.png',
    'assets/images/section2/left/img2.png',
    'assets/images/section2/left/img3.png',
    'assets/images/section2/left/img4.png',
    'assets/images/section2/left/perfume_img_l.png',
    'assets/images/section2/left/img1.png',
    'assets/images/section2/left/img2.png',
];

const FRAGRANCES = [
    {
        id: 'original',
        name: 'Original',
        image: 'assets/images/section2/right/perfume1.png',
        isBestSeller: true
    },
    {
        id: 'lily',
        name: 'Lily',
        image: 'assets/images/section2/right/perfume2.png',
        isBestSeller: false
    },
    {
        id: 'rose',
        name: 'Rose',
        image: 'assets/images/section2/right/perfume3.png',
        isBestSeller: false
    },
];

const COLLECTION_ITEMS = [
    {
        id: 1,
        title: 'Signature Scents',
        description: 'Explore our curated line of signature perfumes, designed to elevate your essence with purpose and sophistication.',
    },
    {
        id: 2,
        title: 'Signature Scents',
        description: 'Experience the timeless allure steeped by modern artistry, captured in every bottle of our fragrance.',
    },
    {
        id: 3,
        title: 'Signature Scents',
        description: 'Crafted for those who seek to elevate their essence with purpose and sophistication.',
    },
    {
        id: 4,
        title: 'Signature Scents',
        description: 'Immerse yourself in a world of refined fragrances that speak to your unique style and personality.',
    },
];

const COMPARISON_DATA = [
    { label: 'Potency Concentration', gtg: '10x', arose: '1x', bella: '1x', daisies: '10x' },
    { label: 'Longevity', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
    { label: 'Sillage', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
    { label: 'Bottle Design Score', gtg: '9', arose: '5', bella: '6', daisies: '2' },
    { label: 'Blend and Harmony', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
    { label: 'Skin Compatibility', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
    { label: 'Scent Profile', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
    { label: 'Price vs. Quality', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
];

// ========================================
// State Management
// ========================================

const state = {
    currentImageIndex: 0,
    subscriptionType: 'single',
    selectedFragrance1: 'original',
    selectedFragrance2: 'original',
    expandedAccordion: 1,
    counterAnimated: false,
};

// ========================================
// Mobile Menu
// ========================================

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (!mobileMenuBtn || !mobileMenu) return;

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when overlay is clicked
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    }

    // Close menu when nav link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// ========================================
// Product Gallery
// ========================================

function initGallery() {
    const mainImage = document.getElementById('mainImage');
    const prevBtn = document.getElementById('prevImageBtn');
    const nextBtn = document.getElementById('nextImageBtn');
    const dotsContainer = document.getElementById('galleryDots');
    const thumbnailContainer = document.getElementById('thumbnailGallery');

    if (!mainImage || !prevBtn || !nextBtn || !dotsContainer || !thumbnailContainer) return;

    // Create dots
    GALLERY_IMAGES.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to image ${index + 1}`);
        dot.addEventListener('click', () => goToImage(index));
        dotsContainer.appendChild(dot);
    });

    // Create thumbnails
    GALLERY_IMAGES.forEach((image, index) => {
        const thumbnail = document.createElement('button');
        thumbnail.className = `thumbnail-item ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail ${index + 1}">`;
        thumbnail.addEventListener('click', () => goToImage(index));
        thumbnailContainer.appendChild(thumbnail);
    });

    // Navigation functions
    function updateGallery() {
        mainImage.src = GALLERY_IMAGES[state.currentImageIndex];

        // Update dots
        const dots = dotsContainer.querySelectorAll('.gallery-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === state.currentImageIndex);
        });

        // Update thumbnails
        const thumbnails = thumbnailContainer.querySelectorAll('.thumbnail-item');
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle('active', index === state.currentImageIndex);
        });
    }

    function goToImage(index) {
        state.currentImageIndex = index;
        updateGallery();
    }

    function goToPrevious() {
        state.currentImageIndex = state.currentImageIndex === 0
            ? GALLERY_IMAGES.length - 1
            : state.currentImageIndex - 1;
        updateGallery();
    }

    function goToNext() {
        state.currentImageIndex = state.currentImageIndex === GALLERY_IMAGES.length - 1
            ? 0
            : state.currentImageIndex + 1;
        updateGallery();
    }

    // Event listeners
    prevBtn.addEventListener('click', goToPrevious);
    nextBtn.addEventListener('click', goToNext);

    // Expose functions globally for use in other modules
    window.galleryFunctions = { goToImage, goToPrevious, goToNext };
}

// ========================================
// Product Rating Stars
// ========================================

function initRatingStars() {
    const starsContainer = document.getElementById('productStars');
    if (!starsContainer) return;

    const rating = 4.7;
    const fullStars = Math.floor(rating);
    const partialFill = (rating - fullStars) * 100;

    for (let i = 0; i < 5; i++) {
        const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        star.setAttribute('width', '14');
        star.setAttribute('height', '14');
        star.setAttribute('viewBox', '0 0 16 16');
        star.classList.add('star');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M8 0l2.4 4.9 5.4.8-3.9 3.8.9 5.4L8 12.4l-4.8 2.5.9-5.4L0 5.7l5.4-.8L8 0z');

        if (i < fullStars) {
            // Full star
            path.setAttribute('fill', '#00C950');
        } else if (i === fullStars) {
            // Partial star
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            gradient.setAttribute('id', `star-grad-${i}`);

            const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop1.setAttribute('offset', `${partialFill}%`);
            stop1.setAttribute('stop-color', '#00C950');

            const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('offset', `${partialFill}%`);
            stop2.setAttribute('stop-color', '#E5E7EB');

            gradient.appendChild(stop1);
            gradient.appendChild(stop2);
            defs.appendChild(gradient);
            star.appendChild(defs);

            path.setAttribute('fill', `url(#star-grad-${i})`);
        } else {
            // Empty star
            path.setAttribute('fill', '#E5E7EB');
        }

        star.appendChild(path);
        starsContainer.appendChild(star);
    }
}

// ========================================
// Subscription Selection
// ========================================

function initSubscriptions() {
    const singleCard = document.getElementById('singleSubscription');
    const doubleCard = document.getElementById('doubleSubscription');
    const singleContent = document.getElementById('singleContent');
    const doubleContent = document.getElementById('doubleContent');

    if (!singleCard || !doubleCard) return;

    const subscriptionRadios = document.querySelectorAll('input[name="subscription"]');

    subscriptionRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.subscriptionType = e.target.value;
            updateSubscriptionDisplay();
            updateAddToCartUrl();
        });
    });

    function updateSubscriptionDisplay() {
        // Update card styles
        singleCard.classList.toggle('active', state.subscriptionType === 'single');
        doubleCard.classList.toggle('active', state.subscriptionType === 'double');

        // Show/hide content
        if (singleContent) {
            singleContent.style.display = state.subscriptionType === 'single' ? 'flex' : 'none';
        }
        if (doubleContent) {
            doubleContent.style.display = state.subscriptionType === 'double' ? 'flex' : 'none';
        }
    }

    // Initialize display
    updateSubscriptionDisplay();
}

// ========================================
// Fragrance Selection
// ========================================

function initFragranceOptions() {
    renderFragranceOptions('singleFragranceOptions', 'fragrance1-single', (id) => {
        state.selectedFragrance1 = id;
        updateIncludedImages();
        updateAddToCartUrl();
    });

    renderFragranceOptions('doubleFragrance1Options', 'fragrance1-double', (id) => {
        state.selectedFragrance1 = id;
        updateIncludedImages();
        updateAddToCartUrl();
    });

    renderFragranceOptions('doubleFragrance2Options', 'fragrance2-double', (id) => {
        state.selectedFragrance2 = id;
        updateIncludedImages();
        updateAddToCartUrl();
    });

    // Initialize included images
    updateIncludedImages();
}

function renderFragranceOptions(containerId, radioName, onChangeCallback) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    FRAGRANCES.forEach(fragrance => {
        const option = document.createElement('label');
        option.className = 'fragrance-option';

        const isSelected = fragrance.id === state.selectedFragrance1;

        option.innerHTML = `
            <div class="fragrance-card ${isSelected ? 'active' : ''}" data-fragrance-id="${fragrance.id}" data-radio-name="${radioName}">
                ${fragrance.isBestSeller ? '<span class="best-seller-badge">BEST-SELLER</span>' : ''}
                <div class="fragrance-radio-label">
                    <input
                        type="radio"
                        name="${radioName}"
                        value="${fragrance.id}"
                        class="fragrance-radio"
                        ${isSelected ? 'checked' : ''}
                    >
                    <span class="fragrance-name">${fragrance.name}</span>
                </div>
                <img src="${fragrance.image}" alt="${fragrance.name}" class="fragrance-image">
            </div>
        `;

        const radio = option.querySelector('.fragrance-radio');
        const card = option.querySelector('.fragrance-card');

        radio.addEventListener('change', () => {
            onChangeCallback(fragrance.id);

            // Update all cards with same radio name
            const allCards = document.querySelectorAll(`[data-radio-name="${radioName}"]`);
            allCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });

        container.appendChild(option);
    });
}

function updateIncludedImages() {
    // Update single subscription included image
    const singleIncludedImage = document.getElementById('singleIncludedImage');
    if (singleIncludedImage) {
        const selectedFragrance = FRAGRANCES.find(f => f.id === state.selectedFragrance1);
        if (selectedFragrance) {
            singleIncludedImage.innerHTML = `<img src="${selectedFragrance.image}" alt="${selectedFragrance.name}">`;
        }
    }

    // Update single subscription samples
    const singleIncludedSamples = document.getElementById('singleIncludedSamples');
    if (singleIncludedSamples) {
        singleIncludedSamples.innerHTML = FRAGRANCES.map(f => `
            <div class="sample-image">
                <img src="${f.image}" alt="${f.name}">
            </div>
        `).join('');
    }

    // Update double subscription included images
    const doubleIncludedImages = document.getElementById('doubleIncludedImages');
    if (doubleIncludedImages) {
        const frag1 = FRAGRANCES.find(f => f.id === state.selectedFragrance1);
        const frag2 = FRAGRANCES.find(f => f.id === state.selectedFragrance2);

        doubleIncludedImages.innerHTML = '';
        if (frag1) {
            const img1 = document.createElement('img');
            img1.src = frag1.image;
            img1.alt = frag1.name;
            doubleIncludedImages.appendChild(img1);
        }
        if (frag2) {
            const img2 = document.createElement('img');
            img2.src = frag2.image;
            img2.alt = frag2.name;
            doubleIncludedImages.appendChild(img2);
        }
    }

    // Update double subscription samples
    const doubleIncludedSamples = document.getElementById('doubleIncludedSamples');
    if (doubleIncludedSamples) {
        doubleIncludedSamples.innerHTML = FRAGRANCES.map(f => `
            <div class="sample-image">
                <img src="${f.image}" alt="${f.name}">
            </div>
        `).join('');
    }
}

// ========================================
// Add to Cart URL
// ========================================

function updateAddToCartUrl() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (!addToCartBtn) return;

    const fragrance = state.subscriptionType === 'single'
        ? state.selectedFragrance1
        : `${state.selectedFragrance1}-${state.selectedFragrance2}`;

    const url = `/cart/add?subscription=${state.subscriptionType}&fragrance=${fragrance}&purchase=onetime`;
    addToCartBtn.href = url;
}

// ========================================
// Collection Accordion
// ========================================

function initAccordion() {
    const accordionContainer = document.getElementById('collectionAccordion');
    if (!accordionContainer) return;

    COLLECTION_ITEMS.forEach(item => {
        const accordionItem = document.createElement('div');
        accordionItem.className = `accordion-item ${item.id === state.expandedAccordion ? 'active' : ''}`;

        accordionItem.innerHTML = `
            <button class="accordion-header" data-item-id="${item.id}">
                <span class="accordion-title">${item.title}</span>
                <svg class="accordion-icon" width="24" height="24" viewBox="0 0 24 24">
                    ${item.id === state.expandedAccordion
                        ? '<line x1="6" y1="12" x2="18" y2="12" stroke="#032E15" stroke-width="2" stroke-linecap="round"/>'
                        : '<line x1="6" y1="12" x2="18" y2="12" stroke="#032E15" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="6" x2="12" y2="18" stroke="#032E15" stroke-width="2" stroke-linecap="round"/>'
                    }
                </svg>
            </button>
            <div class="accordion-content">
                <div class="accordion-body">
                    <p class="accordion-text">${item.description}</p>
                </div>
            </div>
        `;

        const header = accordionItem.querySelector('.accordion-header');
        header.addEventListener('click', () => toggleAccordion(item.id));

        accordionContainer.appendChild(accordionItem);
    });
}

function toggleAccordion(itemId) {
    state.expandedAccordion = state.expandedAccordion === itemId ? null : itemId;

    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const itemIdData = parseInt(header.dataset.itemId);
        const isExpanded = itemIdData === state.expandedAccordion;

        item.classList.toggle('active', isExpanded);

        // Update icon
        const icon = item.querySelector('.accordion-icon');
        if (isExpanded) {
            icon.innerHTML = '<line x1="6" y1="12" x2="18" y2="12" stroke="#032E15" stroke-width="2" stroke-linecap="round"/>';
        } else {
            icon.innerHTML = '<line x1="6" y1="12" x2="18" y2="12" stroke="#032E15" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="6" x2="12" y2="18" stroke="#032E15" stroke-width="2" stroke-linecap="round"/>';
        }
    });
}

// ========================================
// Statistics Counter Animation
// ========================================

function initCounterAnimation() {
    const statsContainer = document.getElementById('statisticsContainer');
    if (!statsContainer) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !state.counterAnimated) {
                state.counterAnimated = true;
                animateCounters();
            }
        });
    }, observerOptions);

    observer.observe(statsContainer);
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-percentage');

    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current += increment;

            if (step >= steps) {
                current = target;
                clearInterval(timer);
            }

            counter.textContent = Math.floor(current) + '%';
        }, duration / steps);
    });
}

// ========================================
// Comparison Table
// ========================================

function initComparisonTable() {
    renderDesktopTable();
    renderMobileComparison();
}

function renderDesktopTable() {
    const tbody = document.getElementById('comparisonTableBody');
    if (!tbody) return;

    tbody.innerHTML = COMPARISON_DATA.map(row => `
        <tr class="table-row">
            <td class="table-row-quality">${row.label}</td>
            <td class="table-cell-gtg">
                ${renderTableCell(row.gtg)}
            </td>
            <td>
                ${renderTableCell(row.arose)}
            </td>
            <td>
                ${renderTableCell(row.bella)}
            </td>
            <td>
                ${renderTableCell(row.daisies)}
            </td>
        </tr>
    `).join('');
}

function renderTableCell(value) {
    if (value === 'check') {
        return `
            <div class="check-icon-wrapper">
                <div class="check-icon">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                        <polyline points="4,9 7,12 12,5" fill="none" stroke="#F0EEE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        `;
    } else if (value === 'cross') {
        return `
            <div class="check-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="#CCCCCC" stroke-width="1.5" fill="none"/>
                    <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
        `;
    } else {
        return `<span class="table-cell-text">${value}</span>`;
    }
}

function renderMobileComparison() {
    const mobileContainer = document.getElementById('comparisonMobile');
    if (!mobileContainer) return;

    // Brand headers
    const brandHeaders = `
        <div class="mobile-brand-headers">
            <div class="mobile-brand-gtg">
                <div class="mobile-brand-logo">
                    <img src="assets/images/section5/gtg.png" alt="GTG">
                </div>
                <span class="mobile-brand-name" style="font-weight: 700; font-size: 1.125rem;">GTG</span>
            </div>
            <div class="mobile-brand-others">
                <div class="mobile-other-brands">
                    <div class="mobile-brand-item">
                        <div class="mobile-brand-logo">
                            <img src="assets/images/section5/arose.png" alt="Arose">
                        </div>
                        <span class="mobile-brand-name">Arose</span>
                    </div>
                    <div class="mobile-brand-item">
                        <div class="mobile-brand-logo">
                            <img src="assets/images/section5/bella.png" alt="Bella">
                        </div>
                        <span class="mobile-brand-name">Bella</span>
                    </div>
                </div>
                <div class="mobile-brand-item-full">
                    <div class="mobile-brand-logo">
                        <img src="assets/images/section5/daisies.png" alt="Daisies">
                    </div>
                    <span class="mobile-brand-name">Daisies</span>
                </div>
            </div>
        </div>
    `;

    // Comparison cards
    const comparisonCards = COMPARISON_DATA.map(row => `
        <div class="mobile-comparison-card">
            <h3 class="mobile-card-label">${row.label}</h3>
            <div class="mobile-card-grid">
                <div class="mobile-card-gtg">
                    ${renderMobileValue(row.gtg)}
                </div>
                <div class="mobile-card-others">
                    <div class="mobile-card-other">
                        ${renderMobileValue(row.arose, true)}
                    </div>
                    <div class="mobile-card-other">
                        ${renderMobileValue(row.bella, true)}
                    </div>
                    <div class="mobile-card-other mobile-card-other-full">
                        ${renderMobileValue(row.daisies, true)}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    mobileContainer.innerHTML = brandHeaders + comparisonCards;
}

function renderMobileValue(value, isSmall = false) {
    if (value === 'check') {
        const iconClass = isSmall ? 'mobile-check-icon-small' : 'mobile-check-icon';
        return `
            <div class="check-icon-wrapper">
                <div class="${iconClass}">
                    <svg width="14" height="14" viewBox="0 0 16 16">
                        <polyline points="4,9 7,12 12,5" fill="none" stroke="#F0EEE6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        `;
    } else if (value === 'cross') {
        return `
            <div class="check-icon-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="#CCCCCC" stroke-width="1.5" fill="none"/>
                    <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
        `;
    } else {
        const fontSize = isSmall ? 'font-size: 0.75rem;' : 'font-size: 0.875rem;';
        return `<span class="mobile-value-text" style="${fontSize}">${value}</span>`;
    }
}

// ========================================
// Newsletter Form
// ========================================

function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('newsletterEmail');

    if (!form || !emailInput) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (email) {
            console.log('Subscribing email:', email);
            alert(`Thank you for subscribing with ${email}!`);
            emailInput.value = '';
        }
    });
}

// ========================================
// Initialize All Modules
// ========================================

function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }
}

function initializeApp() {
    // Initialize all modules
    initMobileMenu();
    initGallery();
    initRatingStars();
    initSubscriptions();
    initFragranceOptions();
    initAccordion();
    initCounterAnimation();
    initComparisonTable();
    initNewsletterForm();

    // Initialize Add to Cart URL
    updateAddToCartUrl();

    console.log('GTG Perfumes - Vanilla Implementation Loaded Successfully ✓');
}

// Start the application
init();
