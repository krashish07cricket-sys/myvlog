/**
 * ============================================================================
 * MyVlog - Professional Vlogging & Creator Website
 * File: script.js
 * Description: Complete Vanilla JavaScript implementation for interactive
 *              features, dynamic rendering, modals, filters, lightbox,
 *              theme toggling, animations, and form validation.
 * ============================================================================
 */

"use strict";

/* ==========================================================================
   1. EDITABLE SITE CONFIGURATION & SAMPLE DATA
   (Aap apna naam, social links, videos, blogs aur photos yahan badal sakte hain)
   ========================================================================== */

const SITE_CONFIG = {
  brandName: "MyVlog",
  creatorName: "Aarav Sharma",
  tagline: "Life Is an Adventure. Let's Explore It.",
  // Jab aapka asali YouTube channel ho, toh niche URL update karein:
  youtubeChannelUrl: "https://www.youtube.com",
  socialLinks: {
    youtube: "https://www.youtube.com",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    twitter: "https://x.com"
  },
  videosPerPage: 6
};

/**
 * Sample Vlogs Data (Clearly marked as Demo Content)
 * Note: 'videoUrl' uses safe, open-source sample MP4 streams for preview.
 * You can also set 'youtubeId' (e.g., "dQw4w9WgXcQ") to embed a YouTube video.
 */
const VLOGS_DATA = [
  {
    id: "vlog-1",
    title: "Solo Camping at 14,000 Ft in Spiti Valley | Zero Degrees Night",
    description:
      "Join me on an unforgettable high-altitude solo camping adventure under a billion stars in the cold desert mountains of Spiti Valley.",
    category: "Adventure",
    uploadDate: "2026-09-18",
    views: 248500,
    viewsFormatted: "248.5K views",
    duration: "18:42",
    thumbnail:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    youtubeId: "",
    isDemo: true
  },
  {
    id: "vlog-2",
    title: "48 Hours in Kyoto: Hidden Temples, Matcha & Midnight Ramen",
    description:
      "Walking through lantern-lit alleys, tasting authentic street food, and exploring peaceful bamboo forests before sunrise.",
    category: "Travel",
    uploadDate: "2026-09-04",
    views: 312900,
    viewsFormatted: "312.9K views",
    duration: "22:15",
    thumbnail:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    youtubeId: "",
    isDemo: true
  },
  {
    id: "vlog-3",
    title: "Ultimate Street Food Tour of Old Delhi | 10 Iconic Dishes",
    description:
      "From crispy parathas to centuries-old jalebis—exploring the bustling lanes and unforgettable flavors of Old Delhi.",
    category: "Food",
    uploadDate: "2026-08-21",
    views: 429000,
    viewsFormatted: "429K views",
    duration: "16:08",
    thumbnail:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    youtubeId: "",
    isDemo: true
  },
  {
    id: "vlog-4",
    title: "My Minimalist Filmmaking Desk & Travel Camera Gear (2026 Setup)",
    description:
      "A complete breakdown of the lightweight mirrorless cameras, microphones, drones, and editing workflow I use on the road.",
    category: "Lifestyle",
    uploadDate: "2026-08-05",
    views: 154200,
    viewsFormatted: "154.2K views",
    duration: "14:30",
    thumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoy.mp4",
    youtubeId: "",
    isDemo: true
  },
  {
    id: "vlog-5",
    title: "A Rainy Monsoon Day in My Life | Editing, Coffee & Creative Reset",
    description:
      "Slowing down after three weeks of non-stop travel. Brewing pour-over coffee, backing up 2TB of footage, and planning our next trip.",
    category: "Daily Vlogs",
    uploadDate: "2026-07-19",
    views: 98400,
    viewsFormatted: "98.4K views",
    duration: "11:54",
    thumbnail:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    youtubeId: "",
    isDemo: true
  },
  {
    id: "vlog-6",
    title: "Roadtripping Iceland's Ring Road in a Camper Van (7 Days)",
    description:
      "Chasing waterfalls, black sand beaches, geothermal lagoons, and the Northern Lights across Iceland's dramatic landscapes.",
    category: "Travel",
    uploadDate: "2026-06-30",
    views: 518000,
    viewsFormatted: "518K views",
    duration: "29:10",
    thumbnail:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    youtubeId: "",
    isDemo: true
  },
  {
    id: "vlog-7",
    title: "Kayaking Through Secret Sea Caves in Algarve, Portugal",
    description:
      "Paddling at sunrise into golden limestone caves and cliff-jumping into crystal-clear Atlantic waters.",
    category: "Adventure",
    uploadDate: "2026-06-12",
    views: 187600,
    viewsFormatted: "187.6K views",
    duration: "15:20",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    youtubeId: "",
    isDemo: true
  },
  {
    id: "vlog-8",
    title: "Cooking Traditional Wood-Fire Pizza in Naples with a Local Chef",
    description:
      "Learning the art of 48-hour fermented dough and San Marzano tomato sauce inside a 90-year-old family pizzeria.",
    category: "Food",
    uploadDate: "2026-05-25",
    views: 276300,
    viewsFormatted: "276.3K views",
    duration: "19:05",
    thumbnail:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    youtubeId: "",
    isDemo: true
  },
  {
    id: "vlog-9",
    title: "Behind the Scenes: How I Color Grade & Edit Travel Films",
    description:
      "Step-by-step walkthrough of my sound design, storytelling structure, and color grading workflow for cinematic vlogs.",
    category: "Daily Vlogs",
    uploadDate: "2026-05-09",
    views: 142100,
    viewsFormatted: "142.1K views",
    duration: "21:40",
    thumbnail:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoy.mp4",
    youtubeId: "",
    isDemo: true
  }
];

/**
 * Sample Travel Destinations Data
 */
const DESTINATIONS_DATA = [
  {
    id: "dest-1",
    name: "Ladakh & Zanskar",
    country: "India",
    tag: "High-Altitude Passes",
    highlight: "Monasteries, star-filled skies & dramatic mountain roads",
    story:
      "Riding across Khardung La and staying with local families in remote Himalayan villages taught me the beauty of slow, mindful travel.",
    bestSeason: "June to September",
    gearTip: "Carry polarized sunglasses, lip balm, and extra camera batteries for sub-zero nights.",
    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "dest-2",
    name: "Kyoto & Arashiyama",
    country: "Japan",
    tag: "Culture & Heritage",
    highlight: "Ancient shrines, tea houses & serene bamboo groves",
    story:
      "Waking up at 5:00 AM allowed me to film Kyoto's historic wooden streets in complete silence before the city came alive.",
    bestSeason: "March–May (Cherry Blossom) & October–November (Autumn Foliage)",
    gearTip: "A fast 35mm prime lens is perfect for low-light lantern alleys.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "dest-3",
    name: "Southern Ring Road",
    country: "Iceland",
    tag: "Glaciers & Volcanos",
    highlight: "Skógafoss waterfall, Reynisfjara black beach & glacial lagoons",
    story:
      "Living out of a compact camper van for a week meant waking up next to roaring waterfalls and editing footage while rain drummed on the roof.",
    bestSeason: "September to March for Northern Lights; June to August for Midnight Sun",
    gearTip: "Weather-sealed camera bodies and microfiber cloths are mandatory near waterfalls.",
    image:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "dest-4",
    name: "Dolomites Alpine Trail",
    country: "Italy",
    tag: "Mountain Trekking",
    highlight: "Jagged limestone peaks, emerald lakes & alpine meadows",
    story:
      "Hiking hut-to-hut across Seceda and Lago di Braies offered some of the most dramatic golden-hour light I have ever captured.",
    bestSeason: "Late June to Mid-October",
    gearTip: "Pack a lightweight carbon-fiber travel tripod for sunrise time-lapses.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80"
  }
];

/**
 * Sample Blog Posts Data (Each post has full article content for the Reader Modal)
 */
const BLOGS_DATA = [
  {
    id: "blog-1",
    title: "How to Pack a Complete Filmmaking Kit in One 35L Carry-On Backpack",
    excerpt:
      "Stop paying excess baggage fees. Here is the exact lightweight camera, audio, and drone setup I take on every international trip.",
    category: "Filmmaking Gear",
    date: "October 12, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=900&q=80",
    content: [
      "When I started travel vlogging five years ago, I used to carry two heavy pelican cases, three tripods, and five lenses. Half the time, I was too exhausted to even pull my camera out of the bag.",
      "Today, everything I need to film 4K cinematic travel documentaries fits inside a single 35-liter weather-resistant carry-on backpack. The secret is versatility: choosing a hybrid mirrorless body with strong in-body stabilization, a single 24-70mm f/2.8 zoom lens for 85% of shots, and a compact 35mm f/1.8 prime for night street scenes.",
      "For audio—which is 50% of any great vlog—I carry a compact wireless clip-on microphone with internal 32-bit float recording and a tiny on-camera shotgun mic with a deadcat windshield. Always prioritize clean audio over an extra lens!"
    ]
  },
  {
    id: "blog-2",
    title: "7 Storytelling Secrets That Keep Viewers Watching Until the Very End",
    excerpt:
      "Cinematic B-roll is great, but story is king. Learn how to structure your travel vlogs with conflict, curiosity, and emotional payoff.",
    category: "Creator Tips",
    date: "September 28, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
    content: [
      "A common mistake new vloggers make is treating a vlog like a chronological diary: 'First we woke up, then we ate breakfast, then we took a taxi.' Viewers don't just want a schedule—they want a journey with stakes.",
      "Start every video with a clear question or goal in the first 30 seconds. Instead of showing five minutes of airport footage, open right at the moment of tension or wonder, then explain how you got there.",
      "Finally, capture genuine human moments. When a train gets delayed or it rains on your hike, keep the camera rolling. How you react to unexpected challenges is what makes your audience connect with you as a creator."
    ]
  },
  {
    id: "blog-3",
    title: "Budget Solo Travel Guide: Exploring Southeast Asia on $35 a Day",
    excerpt:
      "A practical breakdown of guesthouses, night trains, street food safety, and local SIM cards for long-term solo travelers.",
    category: "Travel Guide",
    date: "September 10, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=80",
    content: [
      "You don't need a massive budget to create world-class travel stories. Some of my most watched vlogs were filmed while traveling on overnight sleeper trains and staying in family-run homestays.",
      "By eating at busy local night markets where turnover is high and ingredients are fresh, you not only save money—you also discover authentic culinary stories that luxury restaurants rarely offer.",
      "Travel slowly. Spending two weeks deeply exploring one region costs half as much in transport as hopping between six cities in ten days, and your stories will have far more depth."
    ]
  }
];

/**
 * Sample Photo Gallery Data
 */
const GALLERY_DATA = [
  {
    id: "photo-1",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    caption: "Golden hour reflection at Yosemite Valley — shot at 1/250s, f/8",
    location: "California, USA"
  },
  {
    id: "photo-2",
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    caption: "Endless desert highway during our cross-country camper van shoot",
    location: "Utah, USA"
  },
  {
    id: "photo-3",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    caption: "Early morning mist over alpine wooden boats at Lago di Braies",
    location: "Dolomites, Italy"
  },
  {
    id: "photo-4",
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
    caption: "Behind the scenes: Setting up the tripod on a windy mountain ridge",
    location: "Spiti Valley, India"
  },
  {
    id: "photo-5",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    caption: "Turquoise Atlantic waves crashing along the southern cliffs",
    location: "Algarve, Portugal"
  },
  {
    id: "photo-6",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
    thumb: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    caption: "Long-exposure night sky over snow-covered peaks (ISO 3200, 20s)",
    location: "Zanskar, India"
  }
];

/* ==========================================================================
   2. APPLICATION STATE
   ========================================================================== */

const appState = {
  searchQuery: "",
  selectedCategory: "All",
  sortBy: "newest",
  visibleVideoCount: SITE_CONFIG.videosPerPage,
  currentLightboxIndex: 0,
  lastFocusedElement: null,
  prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
};

/* ==========================================================================
   3. UTILITY HELPERS (Safe DOM Manipulation & Formatting)
   ========================================================================== */

/**
 * Formats an ISO date string (YYYY-MM-DD) into a readable date.
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

/**
 * Validates an email address format.
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(String(email).trim());
}

/**
 * Debounce helper to optimize live search input performance.
 */
function debounce(fn, delay = 200) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ==========================================================================
   4. TOAST NOTIFICATION SYSTEM
   ========================================================================== */

function ensureToastContainer() {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    container.setAttribute("aria-live", "polite");
    container.setAttribute("aria-atomic", "true");
    document.body.appendChild(container);
  }
  return container;
}

/**
 * Displays an accessible toast notification.
 * @param {string} message - Text message to display safely
 * @param {"success"|"error"|"info"} type - Visual style of toast
 */
function showToast(message, type = "info") {
  const container = ensureToastContainer();
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.setAttribute("role", "status");

  const textSpan = document.createElement("span");
  textSpan.className = "toast-message";
  textSpan.textContent = message;

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "toast-close";
  closeBtn.setAttribute("aria-label", "Close notification");
  closeBtn.textContent = "×";

  closeBtn.addEventListener("click", () => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 250);
  });

  toast.appendChild(textSpan);
  toast.appendChild(closeBtn);
  container.appendChild(toast);

  // Trigger animation frame
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }
  }, 4200);
}

/* ==========================================================================
   5. THEME TOGGLE (Dark / Light Mode)
   ========================================================================== */

function initThemeToggle() {
  const themeToggleBtn =
    document.getElementById("themeToggle") ||
    document.querySelector("[data-theme-toggle]");

  const savedTheme = localStorage.getItem("myvlog_theme");
  const defaultTheme = savedTheme || "dark";

  applyTheme(defaultTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme =
        document.documentElement.getAttribute("data-theme") === "light"
          ? "light"
          : "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem("myvlog_theme", nextTheme);
      showToast(
        `${nextTheme === "light" ? "Light" : "Dark"} mode activated`,
        "info"
      );
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.body.classList.toggle("light-mode", theme === "light");
  document.body.classList.toggle("dark-mode", theme === "dark");

  const themeToggleBtn =
    document.getElementById("themeToggle") ||
    document.querySelector("[data-theme-toggle]");

  if (themeToggleBtn) {
    const isLight = theme === "light";
    themeToggleBtn.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode"
    );
    themeToggleBtn.setAttribute("aria-pressed", String(isLight));
    themeToggleBtn.textContent = isLight ? "🌙" : "☀️";
  }
}

/* ==========================================================================
   6. NAVIGATION BAR, MOBILE MENU & SMOOTH SCROLL
   ========================================================================== */

function initNavigation() {
  const header =
    document.getElementById("navbar") ||
    document.querySelector(".navbar") ||
    document.querySelector("header");
  const mobileMenuBtn =
    document.getElementById("mobileMenuBtn") ||
    document.getElementById("hamburgerBtn") ||
    document.querySelector(".hamburger");
  const navMenu =
    document.getElementById("navMenu") ||
    document.getElementById("navLinks") ||
    document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-link, .nav-links a");

  // Sticky navbar styling on scroll
  const handleScroll = () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 40);
    }
    updateActiveNavOnScroll();
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Mobile hamburger menu toggle
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active", isOpen);
      mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu on outside click
    document.addEventListener("click", (event) => {
      if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)
      ) {
        navMenu.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Smooth scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        event.preventDefault();
        const headerOffset = header ? header.offsetHeight : 72;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: appState.prefersReducedMotion ? "auto" : "smooth"
        });
      }
    });
  });

  // Hero "Watch Latest Vlog" button action
  const watchLatestBtn =
    document.getElementById("watchLatestBtn") ||
    document.querySelector("[data-watch-latest]");
  if (watchLatestBtn) {
    watchLatestBtn.addEventListener("click", (event) => {
      if (VLOGS_DATA.length > 0) {
        event.preventDefault();
        openVideoModal(VLOGS_DATA[0]);
      }
    });
  }

  // Navbar "Subscribe" button action
  const subscribeBtns = document.querySelectorAll(
    "#navSubscribeBtn, [data-subscribe-btn]"
  );
  subscribeBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const newsletterSection = document.getElementById("newsletter");
      if (newsletterSection) {
        event.preventDefault();
        newsletterSection.scrollIntoView({
          behavior: appState.prefersReducedMotion ? "auto" : "smooth"
        });
        const emailInput = newsletterSection.querySelector('input[type="email"]');
        if (emailInput) {
          setTimeout(() => emailInput.focus(), 450);
        }
      }
    });
  });
}

/**
 * Highlights the active navigation link based on current scroll position.
 */
function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link, .nav-links a");
  const scrollPos = window.scrollY + 140;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === `#${id}`);
      });
    }
  });
}

/* ==========================================================================
   7. FEATURED VLOGS: RENDER, SEARCH, FILTER, SORT & LOAD MORE
   ========================================================================== */

function initVlogsSection() {
  const searchInput =
    document.getElementById("videoSearch") ||
    document.getElementById("searchInput") ||
    document.querySelector("[data-video-search]");
  const categoryButtons = document.querySelectorAll(
    ".filter-btn, [data-category]"
  );
  const sortSelect =
    document.getElementById("videoSort") ||
    document.getElementById("sortSelect") ||
    document.querySelector("[data-video-sort]");
  const loadMoreBtn =
    document.getElementById("loadMoreBtn") ||
    document.getElementById("loadMoreVideos");

  // Search by video title or description
  if (searchInput) {
    const handleSearch = debounce((event) => {
      appState.searchQuery = event.target.value.trim().toLowerCase();
      appState.visibleVideoCount = SITE_CONFIG.videosPerPage;
      renderVlogs();
    }, 180);

    searchInput.addEventListener("input", handleSearch);
  }

  // Filter by category buttons
  if (categoryButtons.length > 0) {
    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        categoryButtons.forEach((btn) => {
          btn.classList.remove("active");
          btn.setAttribute("aria-pressed", "false");
        });
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        const category =
          button.getAttribute("data-category") || button.textContent.trim();
        appState.selectedCategory = category;
        appState.visibleVideoCount = SITE_CONFIG.videosPerPage;
        renderVlogs();
      });
    });
  }

  // Sort by newest or most popular
  if (sortSelect) {
    sortSelect.addEventListener("change", (event) => {
      appState.sortBy = event.target.value;
      renderVlogs();
    });
  }

  // Load More pagination
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      appState.visibleVideoCount += 3;
      renderVlogs();
    });
  }

  renderVlogs();
}

function getFilteredAndSortedVlogs() {
  const filtered = VLOGS_DATA.filter((vlog) => {
    const matchesCategory =
      appState.selectedCategory.toLowerCase() === "all" ||
      vlog.category.toLowerCase() === appState.selectedCategory.toLowerCase();

    const matchesSearch =
      !appState.searchQuery ||
      vlog.title.toLowerCase().includes(appState.searchQuery) ||
      vlog.description.toLowerCase().includes(appState.searchQuery) ||
      vlog.category.toLowerCase().includes(appState.searchQuery);

    return matchesCategory && matchesSearch;
  });

  return filtered.sort((a, b) => {
    if (appState.sortBy === "popular") {
      return b.views - a.views;
    }
    // Default: newest first
    return new Date(b.uploadDate) - new Date(a.uploadDate);
  });
}

function renderVlogs() {
  const grid =
    document.getElementById("videoGrid") ||
    document.getElementById("vlogsGrid") ||
    document.querySelector(".video-grid");
  const emptyState =
    document.getElementById("noVideosMessage") ||
    document.getElementById("videoEmptyState");
  const loadMoreBtn =
    document.getElementById("loadMoreBtn") ||
    document.getElementById("loadMoreVideos");

  if (!grid) return;

  const matchingVlogs = getFilteredAndSortedVlogs();
  const visibleVlogs = matchingVlogs.slice(0, appState.visibleVideoCount);

  grid.textContent = "";

  if (matchingVlogs.length === 0) {
    if (emptyState) {
      emptyState.hidden = false;
      emptyState.style.display = "block";
    } else {
      const emptyBox = document.createElement("div");
      emptyBox.className = "empty-state";

      const msg = document.createElement("p");
      msg.textContent = `No vlogs found matching "${appState.searchQuery || appState.selectedCategory}".`;

      const resetBtn = document.createElement("button");
      resetBtn.type = "button";
      resetBtn.className = "btn btn-primary";
      resetBtn.textContent = "Reset Filters";
      resetBtn.addEventListener("click", resetVideoFilters);

      emptyBox.appendChild(msg);
      emptyBox.appendChild(resetBtn);
      grid.appendChild(emptyBox);
    }

    if (loadMoreBtn) {
      loadMoreBtn.style.display = "none";
    }
    return;
  }

  if (emptyState) {
    emptyState.hidden = true;
    emptyState.style.display = "none";
  }

  visibleVlogs.forEach((vlog) => {
    const card = createVlogCard(vlog);
    grid.appendChild(card);
  });

  if (loadMoreBtn) {
    if (appState.visibleVideoCount < matchingVlogs.length) {
      loadMoreBtn.style.display = "inline-flex";
      loadMoreBtn.textContent = `Load More Vlogs (${matchingVlogs.length - visibleVlogs.length} remaining)`;
    } else {
      loadMoreBtn.style.display = "none";
    }
  }
}

function createVlogCard(vlog) {
  const article = document.createElement("article");
  article.className = "video-card card reveal visible";

  // Thumbnail wrapper
  const thumbWrapper = document.createElement("div");
  thumbWrapper.className = "video-thumbnail-wrapper";

  const img = document.createElement("img");
  img.src = vlog.thumbnail;
  img.alt = vlog.title;
  img.loading = "lazy";
  img.className = "video-thumbnail";

  const badge = document.createElement("span");
  badge.className = "video-category-badge";
  badge.textContent = vlog.category;

  const duration = document.createElement("span");
  duration.className = "video-duration";
  duration.textContent = vlog.duration;

  const playOverlayBtn = document.createElement("button");
  playOverlayBtn.type = "button";
  playOverlayBtn.className = "video-play-btn";
  playOverlayBtn.setAttribute("aria-label", `Play ${vlog.title}`);
  playOverlayBtn.textContent = "▶";
  playOverlayBtn.addEventListener("click", () => openVideoModal(vlog));

  thumbWrapper.appendChild(img);
  thumbWrapper.appendChild(badge);
  thumbWrapper.appendChild(duration);
  thumbWrapper.appendChild(playOverlayBtn);

  // Card body
  const body = document.createElement("div");
  body.className = "video-card-body";

  const meta = document.createElement("div");
  meta.className = "video-meta";

  const dateSpan = document.createElement("span");
  dateSpan.textContent = `📅 ${formatDate(vlog.uploadDate)}`;

  const viewsSpan = document.createElement("span");
  viewsSpan.textContent = `👁️ ${vlog.viewsFormatted}`;

  meta.appendChild(dateSpan);
  meta.appendChild(viewsSpan);

  const title = document.createElement("h3");
  title.className = "video-title";
  title.textContent = vlog.title;

  const desc = document.createElement("p");
  desc.className = "video-description";
  desc.textContent = vlog.description;

  const watchBtn = document.createElement("button");
  watchBtn.type = "button";
  watchBtn.className = "btn btn-outline watch-now-btn";
  watchBtn.textContent = "Watch Now ▶";
  watchBtn.addEventListener("click", () => openVideoModal(vlog));

  body.appendChild(meta);
  body.appendChild(title);
  body.appendChild(desc);
  body.appendChild(watchBtn);

  article.appendChild(thumbWrapper);
  article.appendChild(body);

  return article;
}

function resetVideoFilters() {
  appState.searchQuery = "";
  appState.selectedCategory = "All";
  appState.sortBy = "newest";
  appState.visibleVideoCount = SITE_CONFIG.videosPerPage;

  const searchInput =
    document.getElementById("videoSearch") ||
    document.getElementById("searchInput") ||
    document.querySelector("[data-video-search]");
  if (searchInput) searchInput.value = "";

  const categoryButtons = document.querySelectorAll(
    ".filter-btn, [data-category]"
  );
  categoryButtons.forEach((btn) => {
    const cat = btn.getAttribute("data-category") || btn.textContent.trim();
    const isAll = cat.toLowerCase() === "all";
    btn.classList.toggle("active", isAll);
    btn.setAttribute("aria-pressed", String(isAll));
  });

  renderVlogs();
}

/* ==========================================================================
   8. VIDEO PLAYER MODAL
   ========================================================================== */

function ensureVideoModal() {
  let modal = document.getElementById("videoModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "videoModal";
    modal.className = "modal-overlay";
    modal.hidden = true;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "videoModalTitle");

    modal.innerHTML = `
      <div class="modal-container video-modal-container">
        <div class="modal-header">
          <span id="videoModalBadge" class="video-category-badge">Demo Preview</span>
          <button type="button" id="closeVideoModal" class="modal-close-btn" aria-label="Close video player">×</button>
        </div>
        <div id="videoPlayerContainer" class="video-player-wrapper"></div>
        <div class="modal-body">
          <h3 id="videoModalTitle" class="modal-title"></h3>
          <p id="videoModalMeta" class="video-meta"></p>
          <p id="videoModalDesc" class="modal-description"></p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector("#closeVideoModal");
    closeBtn.addEventListener("click", closeVideoModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeVideoModal();
    });
  }
  return modal;
}

function openVideoModal(vlog) {
  appState.lastFocusedElement = document.activeElement;
  const modal = ensureVideoModal();

  const playerContainer = modal.querySelector("#videoPlayerContainer");
  const titleEl = modal.querySelector("#videoModalTitle");
  const metaEl = modal.querySelector("#videoModalMeta");
  const descEl = modal.querySelector("#videoModalDesc");
  const badgeEl = modal.querySelector("#videoModalBadge");

  if (titleEl) titleEl.textContent = vlog.title;
  if (metaEl) {
    metaEl.textContent = `${vlog.category} • ${formatDate(vlog.uploadDate)} • ${vlog.viewsFormatted} (Sample Demo Video)`;
  }
  if (descEl) descEl.textContent = vlog.description;
  if (badgeEl) badgeEl.textContent = `${vlog.category} • Demo Video`;

  if (playerContainer) {
    playerContainer.textContent = "";

    if (vlog.youtubeId) {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(vlog.youtubeId)}?autoplay=1&rel=0`;
      iframe.title = vlog.title;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.className = "video-embed-frame";
      playerContainer.appendChild(iframe);
    } else {
      const video = document.createElement("video");
      video.src = vlog.videoUrl;
      video.poster = vlog.thumbnail;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.className = "video-html5-player";
      playerContainer.appendChild(video);
    }
  }

  modal.hidden = false;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector("#closeVideoModal");
  if (closeBtn) closeBtn.focus();
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  if (!modal || modal.hidden) return;

  const playerContainer = modal.querySelector("#videoPlayerContainer");
  if (playerContainer) {
    playerContainer.textContent = ""; // Stops video/audio playback immediately
  }

  modal.classList.remove("active");
  modal.hidden = true;
  document.body.style.overflow = "";

  if (appState.lastFocusedElement) {
    appState.lastFocusedElement.focus();
  }
}

/* ==========================================================================
   9. TRAVEL DESTINATIONS & BLOG ARTICLES (Dynamic Render + Detail Modals)
   ========================================================================== */

function initTravelSection() {
  const travelGrid =
    document.getElementById("travelGrid") ||
    document.getElementById("destinationsGrid") ||
    document.querySelector(".travel-grid");

  if (!travelGrid) return;

  // Render destination cards dynamically if container is empty or marked for JS render
  if (travelGrid.children.length === 0) {
    DESTINATIONS_DATA.forEach((dest) => {
      const card = document.createElement("article");
      card.className = "travel-card card reveal visible";

      const imgWrap = document.createElement("div");
      imgWrap.className = "travel-img-wrapper";

      const img = document.createElement("img");
      img.src = dest.image;
      img.alt = `${dest.name}, ${dest.country}`;
      img.loading = "lazy";

      const locationTag = document.createElement("span");
      locationTag.className = "travel-location-badge";
      locationTag.textContent = `📍 ${dest.country}`;

      imgWrap.appendChild(img);
      imgWrap.appendChild(locationTag);

      const content = document.createElement("div");
      content.className = "travel-card-body";

      const tag = document.createElement("span");
      tag.className = "travel-highlight-tag";
      tag.textContent = dest.tag;

      const title = document.createElement("h3");
      title.textContent = dest.name;

      const story = document.createElement("p");
      story.textContent = dest.story;

      const exploreBtn = document.createElement("button");
      exploreBtn.type = "button";
      exploreBtn.className = "btn btn-outline explore-dest-btn";
      exploreBtn.textContent = "Explore Destination →";
      exploreBtn.addEventListener("click", () => openDestinationModal(dest));

      content.appendChild(tag);
      content.appendChild(title);
      content.appendChild(story);
      content.appendChild(exploreBtn);

      card.appendChild(imgWrap);
      card.appendChild(content);
      travelGrid.appendChild(card);
    });
  } else {
    // Attach handlers to any existing static "Explore Destination" buttons
    const existingButtons = travelGrid.querySelectorAll(
      ".explore-dest-btn, [data-destination-id], a, button"
    );
    existingButtons.forEach((btn, idx) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        const dest = DESTINATIONS_DATA[idx % DESTINATIONS_DATA.length];
        openDestinationModal(dest);
      });
    });
  }
}

function initBlogsSection() {
  const blogGrid =
    document.getElementById("blogGrid") ||
    document.getElementById("blogsGrid") ||
    document.querySelector(".blog-grid");

  if (!blogGrid) return;

  if (blogGrid.children.length === 0) {
    BLOGS_DATA.forEach((post) => {
      const card = document.createElement("article");
      card.className = "blog-card card reveal visible";

      const imgWrap = document.createElement("div");
      imgWrap.className = "blog-img-wrapper";

      const img = document.createElement("img");
      img.src = post.image;
      img.alt = post.title;
      img.loading = "lazy";

      const catTag = document.createElement("span");
      catTag.className = "blog-category-tag";
      catTag.textContent = post.category;

      imgWrap.appendChild(img);
      imgWrap.appendChild(catTag);

      const body = document.createElement("div");
      body.className = "blog-card-body";

      const meta = document.createElement("div");
      meta.className = "blog-meta";
      meta.textContent = `${post.date} • ⏱️ ${post.readTime}`;

      const title = document.createElement("h3");
      title.className = "blog-title";
      title.textContent = post.title;

      const excerpt = document.createElement("p");
      excerpt.className = "blog-excerpt";
      excerpt.textContent = post.excerpt;

      const readMoreBtn = document.createElement("button");
      readMoreBtn.type = "button";
      readMoreBtn.className = "btn btn-link read-more-btn";
      readMoreBtn.textContent = "Read Full Article →";
      readMoreBtn.addEventListener("click", () => openBlogModal(post));

      body.appendChild(meta);
      body.appendChild(title);
      body.appendChild(excerpt);
      body.appendChild(readMoreBtn);

      card.appendChild(imgWrap);
      card.appendChild(body);
      blogGrid.appendChild(card);
    });
  } else {
    const existingLinks = blogGrid.querySelectorAll(
      ".read-more-btn, [data-blog-id], a, button"
    );
    existingLinks.forEach((btn, idx) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        const post = BLOGS_DATA[idx % BLOGS_DATA.length];
        openBlogModal(post);
      });
    });
  }
}

/**
 * Universal Content Reader Modal (Used for Blogs, Destinations, About Me & Legal Pages)
 */
function ensureContentModal() {
  let modal = document.getElementById("contentModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "contentModal";
    modal.className = "modal-overlay";
    modal.hidden = true;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "contentModalTitle");

    modal.innerHTML = `
      <div class="modal-container content-modal-container">
        <div class="modal-header">
          <span id="contentModalBadge" class="blog-category-tag">Article</span>
          <button type="button" id="closeContentModal" class="modal-close-btn" aria-label="Close dialog">×</button>
        </div>
        <img id="contentModalImage" class="modal-cover-image" src="" alt="" hidden />
        <div class="modal-body">
          <h2 id="contentModalTitle" class="modal-title"></h2>
          <p id="contentModalMeta" class="blog-meta"></p>
          <div id="contentModalBody" class="modal-rich-text"></div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal
      .querySelector("#closeContentModal")
      .addEventListener("click", closeContentModal);
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeContentModal();
    });
  }
  return modal;
}

function openBlogModal(post) {
  appState.lastFocusedElement = document.activeElement;
  const modal = ensureContentModal();

  modal.querySelector("#contentModalBadge").textContent = post.category;
  modal.querySelector("#contentModalTitle").textContent = post.title;
  modal.querySelector("#contentModalMeta").textContent =
    `${post.date} • ${post.readTime} • By ${SITE_CONFIG.creatorName}`;

  const coverImg = modal.querySelector("#contentModalImage");
  coverImg.src = post.image;
  coverImg.alt = post.title;
  coverImg.hidden = false;

  const bodyContainer = modal.querySelector("#contentModalBody");
  bodyContainer.textContent = "";
  post.content.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    bodyContainer.appendChild(p);
  });

  modal.hidden = false;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  modal.querySelector("#closeContentModal").focus();
}

function openDestinationModal(dest) {
  appState.lastFocusedElement = document.activeElement;
  const modal = ensureContentModal();

  modal.querySelector("#contentModalBadge").textContent =
    `📍 ${dest.country} • ${dest.tag}`;
  modal.querySelector("#contentModalTitle").textContent = dest.name;
  modal.querySelector("#contentModalMeta").textContent =
    `Adventure Highlight: ${dest.highlight}`;

  const coverImg = modal.querySelector("#contentModalImage");
  coverImg.src = dest.image;
  coverImg.alt = dest.name;
  coverImg.hidden = false;

  const bodyContainer = modal.querySelector("#contentModalBody");
  bodyContainer.textContent = "";

  const storyP = document.createElement("p");
  storyP.textContent = dest.story;

  const seasonP = document.createElement("p");
  seasonP.textContent = `🌤️ Best Time to Visit: ${dest.bestSeason}`;

  const gearP = document.createElement("p");
  gearP.textContent = `🎒 Creator Gear Tip: ${dest.gearTip}`;

  bodyContainer.appendChild(storyP);
  bodyContainer.appendChild(seasonP);
  bodyContainer.appendChild(gearP);

  modal.hidden = false;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  modal.querySelector("#closeContentModal").focus();
}

function openInfoModal({ badge, title, meta, paragraphs }) {
  appState.lastFocusedElement = document.activeElement;
  const modal = ensureContentModal();

  modal.querySelector("#contentModalBadge").textContent = badge;
  modal.querySelector("#contentModalTitle").textContent = title;
  modal.querySelector("#contentModalMeta").textContent = meta || "";

  const coverImg = modal.querySelector("#contentModalImage");
  coverImg.hidden = true;

  const bodyContainer = modal.querySelector("#contentModalBody");
  bodyContainer.textContent = "";
  paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    bodyContainer.appendChild(p);
  });

  modal.hidden = false;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  modal.querySelector("#closeContentModal").focus();
}

function closeContentModal() {
  const modal = document.getElementById("contentModal");
  if (!modal || modal.hidden) return;

  modal.classList.remove("active");
  modal.hidden = true;
  document.body.style.overflow = "";

  if (appState.lastFocusedElement) {
    appState.lastFocusedElement.focus();
  }
}

/* ==========================================================================
   10. PHOTO GALLERY & LIGHTBOX (With Keyboard & Touch Swipe Support)
   ========================================================================== */

function initGalleryAndLightbox() {
  const galleryGrid =
    document.getElementById("galleryGrid") ||
    document.querySelector(".gallery-grid");

  if (!galleryGrid) return;

  if (galleryGrid.children.length === 0) {
    GALLERY_DATA.forEach((item, index) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-item reveal visible";
      figure.tabIndex = 0;
      figure.setAttribute("role", "button");
      figure.setAttribute(
        "aria-label",
        `View larger image: ${item.caption} (${item.location})`
      );

      const img = document.createElement("img");
      img.src = item.thumb;
      img.alt = item.caption;
      img.loading = "lazy";

      const caption = document.createElement("figcaption");
      caption.className = "gallery-caption";
      caption.textContent = `${item.caption} — ${item.location}`;

      figure.appendChild(img);
      figure.appendChild(caption);

      figure.addEventListener("click", () => openLightbox(index));
      figure.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(index);
        }
      });

      galleryGrid.appendChild(figure);
    });
  } else {
    const existingItems = galleryGrid.querySelectorAll(".gallery-item, figure");
    existingItems.forEach((item, index) => {
      item.tabIndex = 0;
      item.addEventListener("click", () => openLightbox(index));
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(index);
        }
      });
    });
  }
}

function ensureLightbox() {
  let lightbox = document.getElementById("lightboxModal");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "lightboxModal";
    lightbox.className = "lightbox-overlay";
    lightbox.hidden = true;
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Photo Lightbox");

    lightbox.innerHTML = `
      <button type="button" id="lightboxClose" class="lightbox-close" aria-label="Close lightbox">×</button>
      <button type="button" id="lightboxPrev" class="lightbox-nav lightbox-prev" aria-label="Previous photo">❮</button>
      <div class="lightbox-content">
        <img id="lightboxImage" class="lightbox-img" src="" alt="" />
        <div class="lightbox-footer">
          <p id="lightboxCaption" class="lightbox-caption"></p>
          <span id="lightboxCounter" class="lightbox-counter"></span>
        </div>
      </div>
      <button type="button" id="lightboxNext" class="lightbox-nav lightbox-next" aria-label="Next photo">❯</button>
    `;
    document.body.appendChild(lightbox);

    lightbox
      .querySelector("#lightboxClose")
      .addEventListener("click", closeLightbox);
    lightbox
      .querySelector("#lightboxPrev")
      .addEventListener("click", () => navigateLightbox(-1));
    lightbox
      .querySelector("#lightboxNext")
      .addEventListener("click", () => navigateLightbox(1));

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    // Mobile touch swipe support
    let touchStartX = 0;
    lightbox.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.changedTouches[0].screenX;
      },
      { passive: true }
    );
    lightbox.addEventListener(
      "touchend",
      (event) => {
        const touchEndX = event.changedTouches[0].screenX;
        const deltaX = touchEndX - touchStartX;
        if (Math.abs(deltaX) > 50) {
          navigateLightbox(deltaX < 0 ? 1 : -1);
        }
      },
      { passive: true }
    );
  }
  return lightbox;
}

function openLightbox(index) {
  appState.lastFocusedElement = document.activeElement;
  appState.currentLightboxIndex = index;
  const lightbox = ensureLightbox();

  updateLightboxSlide();

  lightbox.hidden = false;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
  lightbox.querySelector("#lightboxClose").focus();
}

function updateLightboxSlide() {
  const lightbox = document.getElementById("lightboxModal");
  if (!lightbox) return;

  const item = GALLERY_DATA[appState.currentLightboxIndex];
  if (!item) return;

  const imgEl = lightbox.querySelector("#lightboxImage");
  const captionEl = lightbox.querySelector("#lightboxCaption");
  const counterEl = lightbox.querySelector("#lightboxCounter");

  imgEl.src = item.src;
  imgEl.alt = item.caption;
  captionEl.textContent = `${item.caption} (${item.location})`;
  counterEl.textContent = `${appState.currentLightboxIndex + 1} / ${GALLERY_DATA.length}`;
}

function navigateLightbox(direction) {
  const total = GALLERY_DATA.length;
  appState.currentLightboxIndex =
    (appState.currentLightboxIndex + direction + total) % total;
  updateLightboxSlide();
}

function closeLightbox() {
  const lightbox = document.getElementById("lightboxModal");
  if (!lightbox || lightbox.hidden) return;

  lightbox.classList.remove("active");
  lightbox.hidden = true;
  document.body.style.overflow = "";

  if (appState.lastFocusedElement) {
    appState.lastFocusedElement.focus();
  }
}

/* ==========================================================================
   11. ANIMATED STATISTICS COUNTERS
   ========================================================================== */

function initStatsCounter() {
  const counters = document.querySelectorAll(".stat-number, [data-target]");
  if (counters.length === 0) return;

  const animateCounter = (el) => {
    const target = Number(el.getAttribute("data-target")) || 0;
    const suffix = el.getAttribute("data-suffix") || "";

    if (appState.prefersReducedMotion || target === 0) {
      el.textContent = `${target.toLocaleString()}${suffix}`;
      return;
    }

    const duration = 1600;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic curve
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(eased * target);

      el.textContent = `${currentVal.toLocaleString()}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${target.toLocaleString()}${suffix}`;
      }
    };

    requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    counters.forEach((counter) => observer.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }
}

/* ==========================================================================
   12. NEWSLETTER & CONTACT FORM VALIDATION
   ========================================================================== */

function initForms() {
  // Newsletter Form
  const newsletterForm =
    document.getElementById("newsletterForm") ||
    document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = newsletterForm.querySelector(
        'input[name="name"], #newsletterName'
      );
      const emailInput = newsletterForm.querySelector(
        'input[type="email"], #newsletterEmail'
      );
      const feedbackEl =
        document.getElementById("newsletterFeedback") ||
        newsletterForm.querySelector(".form-feedback");

      const name = nameInput ? nameInput.value.trim() : "Explorer";
      const email = emailInput ? emailInput.value.trim() : "";

      if (nameInput && name.length < 2) {
        setFormFeedback(
          feedbackEl,
          "Please enter your name (at least 2 characters).",
          "error"
        );
        showToast("Please enter a valid name.", "error");
        nameInput.focus();
        return;
      }

      if (!isValidEmail(email)) {
        setFormFeedback(
          feedbackEl,
          "Please enter a valid email address (e.g., alex@example.com).",
          "error"
        );
        showToast("Please enter a valid email address.", "error");
        if (emailInput) emailInput.focus();
        return;
      }

      setFormFeedback(
        feedbackEl,
        `Thank you, ${name}! (Demo Mode: Connect a backend or email service like Formspree/ConvertKit to store real subscribers.)`,
        "success"
      );
      showToast(`Subscribed in Demo Mode! Welcome aboard, ${name}.`, "success");
      newsletterForm.reset();
    });
  }

  // Contact Form
  const contactForm =
    document.getElementById("contactForm") ||
    document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = contactForm.querySelector(
        'input[name="name"], #contactName'
      );
      const emailInput = contactForm.querySelector(
        'input[type="email"], #contactEmail'
      );
      const subjectInput = contactForm.querySelector(
        'input[name="subject"], #contactSubject'
      );
      const messageInput = contactForm.querySelector(
        'textarea[name="message"], #contactMessage'
      );
      const feedbackEl =
        document.getElementById("contactFeedback") ||
        contactForm.querySelector(".form-feedback");

      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const subject = subjectInput ? subjectInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      if (name.length < 2) {
        setFormFeedback(
          feedbackEl,
          "Please enter your full name.",
          "error"
        );
        showToast("Please enter your name.", "error");
        if (nameInput) nameInput.focus();
        return;
      }

      if (!isValidEmail(email)) {
        setFormFeedback(
          feedbackEl,
          "Please provide a valid email address so I can reply.",
          "error"
        );
        showToast("Invalid email address.", "error");
        if (emailInput) emailInput.focus();
        return;
      }

      if (subject.length < 3) {
        setFormFeedback(
          feedbackEl,
          "Please enter a clear subject line (at least 3 characters).",
          "error"
        );
        showToast("Please enter a subject.", "error");
        if (subjectInput) subjectInput.focus();
        return;
      }

      if (message.length < 10) {
        setFormFeedback(
          feedbackEl,
          "Please write a message of at least 10 characters.",
          "error"
        );
        showToast("Message is too short.", "error");
        if (messageInput) messageInput.focus();
        return;
      }

      setFormFeedback(
        feedbackEl,
        `Thanks for reaching out, ${name}! Your message has been validated. (Frontend Demo: Connect Formspree or a backend endpoint to receive real emails.)`,
        "success"
      );
      showToast("Message validated! (Demo Mode)", "success");
      contactForm.reset();
    });
  }
}

function setFormFeedback(element, message, status) {
  if (!element) return;
  element.textContent = message;
  element.className = `form-feedback ${status}`;
  element.hidden = false;
}

/* ==========================================================================
   13. ABOUT ME, PRIVACY POLICY, TERMS & FOOTER ACTIONS
   ========================================================================== */

function initInteractiveButtonsAndFooter() {
  // Dynamic Copyright Year
  const yearElements = document.querySelectorAll(
    "#currentYear, [data-current-year]"
  );
  const currentYear = String(new Date().getFullYear());
  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });

  // "Know More About Me" Button
  const knowMoreBtn =
    document.getElementById("knowMoreBtn") ||
    document.querySelector("[data-know-more]");
  if (knowMoreBtn) {
    knowMoreBtn.addEventListener("click", (event) => {
      event.preventDefault();
      openInfoModal({
        badge: "Creator Biography",
        title: `About ${SITE_CONFIG.creatorName} (${SITE_CONFIG.brandName})`,
        meta: "Visual Storyteller • Filmmaker • Adventure Traveler",
        paragraphs: [
          "Hi! I started vlogging with a second-hand entry-level camera and a passion for documenting untold human stories across remote landscapes.",
          "Over the past five years, MyVlog has grown into a global community of curious travelers, aspiring filmmakers, and adventure seekers. My mission is simple: to inspire you to step outside your comfort zone, travel responsibly, and appreciate the diverse cultures of our planet.",
          "When I'm not living out of a backpack or editing timelines at 2:00 AM, you'll find me brewing specialty coffee, testing vintage camera lenses, or planning the next high-altitude road trip."
        ]
      });
    });
  }

  // Footer Privacy Policy Link
  const privacyLinks = document.querySelectorAll(
    "#privacyPolicyLink, [data-privacy-link]"
  );
  privacyLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openInfoModal({
        badge: "Legal Information",
        title: "Privacy Policy (Sample Placeholder)",
        meta: `Last Updated: ${currentYear}`,
        paragraphs: [
          "1. Data Collection: This static demonstration website does not automatically collect, store, or sell personal data on any remote server.",
          "2. Local Storage: We use your browser's localStorage solely to remember your preferred display theme (Dark or Light mode).",
          "3. Embedded Media & Third-Party Links: Clicking external social links (such as YouTube or Instagram) or playing embedded third-party videos is governed by the respective platform's privacy policy."
        ]
      });
    });
  });

  // Footer Terms of Use Link
  const termsLinks = document.querySelectorAll(
    "#termsLink, [data-terms-link]"
  );
  termsLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openInfoModal({
        badge: "Legal Information",
        title: "Terms of Use (Sample Placeholder)",
        meta: `Last Updated: ${currentYear}`,
        paragraphs: [
          "1. Content Ownership: All original video footage, travel stories, and photography published on MyVlog are for personal viewing and inspiration.",
          "2. Demo Disclaimer: Statistics, sample vlogs, and newsletter/contact forms on this template are demonstration features ready to be customized by the site owner.",
          "3. External Links: External links are opened safely with rel='noopener noreferrer' attributes."
        ]
      });
    });
  });

  // Back to Top Button
  const backToTopBtn =
    document.getElementById("backToTop") ||
    document.querySelector(".back-to-top");

  if (backToTopBtn) {
    window.addEventListener(
      "scroll",
      () => {
        backToTopBtn.classList.toggle("visible", window.scrollY > 500);
      },
      { passive: true }
    );

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: appState.prefersReducedMotion ? "auto" : "smooth"
      });
    });
  }
}

/* ==========================================================================
   14. SCROLL-TRIGGERED REVEAL ANIMATIONS & GLOBAL KEYBOARD SHORTCUTS
   ========================================================================== */

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length === 0) return;

  if (appState.prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function initGlobalKeyboardShortcuts() {
  document.addEventListener("keydown", (event) => {
    // Close active modals or lightbox on Escape
    if (event.key === "Escape") {
      closeVideoModal();
      closeContentModal();
      closeLightbox();
    }

    // Lightbox Left / Right arrow navigation
    const lightbox = document.getElementById("lightboxModal");
    if (lightbox && !lightbox.hidden) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigateLightbox(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        navigateLightbox(1);
      }
    }
  });
}

/* ==========================================================================
   15. INITIALIZE APPLICATION ON DOM READY
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavigation();
  initVlogsSection();
  initTravelSection();
  initBlogsSection();
  initGalleryAndLightbox();
  initStatsCounter();
  initForms();
  initInteractiveButtonsAndFooter();
  initScrollReveal();
  initGlobalKeyboardShortcuts();
});
