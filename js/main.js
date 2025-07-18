document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (themeIcon) updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      if (themeIcon) updateThemeIcon(newTheme);
    });
  }
  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === "dark") {
      themeIcon.className = "fas fa-sun";
    } else {
      themeIcon.className = "fas fa-moon";
    }
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")

    // Animate hamburger menu
    const spans = mobileMenuBtn.querySelectorAll("span")
    if (mobileMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Mobile Dropdown Toggle
  const mobileDropdownBtns = document.querySelectorAll(".mobile-dropdown-btn")

  mobileDropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const dropdown = this.parentElement
      dropdown.classList.toggle("active")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.remove("active")

      // Reset hamburger menu
      const spans = mobileMenuBtn.querySelectorAll("span")
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Newsletter Form
  const newsletterForm = document.querySelector(".newsletter-form")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const email = this.querySelector('input[type="email"]').value

      if (email) {
        // Simulate form submission
        alert("Thank you for subscribing! You will receive our latest updates.")
        this.querySelector('input[type="email"]').value = ""
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Header scroll effect
  let lastScrollTop = 0
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Add fade-in animation to articles on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe all article cards
  document.querySelectorAll(".article-card").forEach((card) => {
    observer.observe(card)
  })

  // === Automated Article Publishing System ===

  if (window.articles) {
    const initialArticlesPerPage = 3;
    const articlesPerPage = 6;
    let currentPage = 1;
    let filteredTag = null;
    let searchQuery = '';

    const featuredContainer = document.getElementById('featured-article-container');
    const articlesGrid = document.getElementById('articles-grid');
    const tagFilter = document.getElementById('tag-filter');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const searchInput = document.querySelector('.search-input');

    // Get all unique tags
    const allTags = Array.from(new Set(window.articles.flatMap(a => a.tags)));

    // Render featured article
    function renderFeatured() {
      if (!window.articles.length) return;
      const article = window.articles[0];
      featuredContainer.innerHTML = `
        <article class="article-card featured" data-id="${article.id}">
          <div class="article-image">
            <img src="${article.image}" alt="${article.title}">
            <div class="article-tag">${article.tags[0] || ''}</div>
          </div>
          <div class="article-content">
            <h3>${article.title}</h3>
            <div class="article-meta">
              <span class="date">${article.date}</span>
              ${article.author ? `<span class="author">${article.author}</span>` : ''}
            </div>
          </div>
        </article>
      `;
      // Make featured card clickable
      featuredContainer.querySelector('.article-card').addEventListener('click', function() {
        window.location.href = `pages/article.html?id=${article.id}`;
      });
    }

    // Render tag filter buttons
    function renderTagFilter() {
      tagFilter.innerHTML = '';
      const allBtn = document.createElement('button');
      allBtn.textContent = 'All';
      allBtn.className = 'tag-btn' + (filteredTag === null ? ' active' : '');
      allBtn.onclick = () => {
        filteredTag = null;
        currentPage = 1;
        renderArticles();
        renderTagFilter();
      };
      tagFilter.appendChild(allBtn);
      allTags.forEach(tag => {
        const btn = document.createElement('button');
        btn.textContent = tag;
        btn.className = 'tag-btn' + (filteredTag === tag ? ' active' : '');
        btn.onclick = () => {
          filteredTag = tag;
          currentPage = 1;
          renderArticles();
          renderTagFilter();
        };
        tagFilter.appendChild(btn);
      });
    }

    // Render articles (excluding featured)
    function renderArticles() {
      let articlesToShow = window.articles.slice(1); // Exclude featured
      if (filteredTag) {
        articlesToShow = articlesToShow.filter(a => a.tags.includes(filteredTag));
      }
      if (searchQuery) {
        articlesToShow = articlesToShow.filter(a =>
          a.title.toLowerCase().includes(searchQuery) ||
          (a.author && a.author.toLowerCase().includes(searchQuery))
        );
      }
      // Show 3 on first load, then +6 each time
      const start = 0;
      const end = initialArticlesPerPage + (currentPage - 1) * articlesPerPage;
      const visibleArticles = articlesToShow.slice(start, end);
      articlesGrid.innerHTML = visibleArticles.map(article => {
        return `
        <article class="article-card" data-id="${article.id}">
          <div class="article-image">
            <img src="${article.image}" alt="${article.title}">
            <div class="article-tag">${article.tags[0] || ''}</div>
          </div>
          <div class="article-content">
            <h3>${article.title}</h3>
            <div class="article-meta">
              <span class="date">${article.date}</span>
              ${article.author ? `<span class="author">${article.author}</span>` : ''}
            </div>
          </div>
        </article>
      `;
      }).join('');
      // Make cards clickable
      articlesGrid.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('click', function() {
          const id = this.getAttribute('data-id');
          window.location.href = `pages/article.html?id=${id}`;
        });
      });
      // Show/hide load more
      if (articlesToShow.length > visibleArticles.length) {
        loadMoreBtn.style.display = '';
      } else {
        loadMoreBtn.style.display = 'none';
      }
    }

    // Load more handler (loads 6 more each time)
    loadMoreBtn.addEventListener('click', () => {
      currentPage++;
      renderArticles();
    });

    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        searchQuery = this.value.toLowerCase();
        currentPage = 1;
        renderArticles();
      });
    }

    // Initial render
    renderFeatured();
    renderTagFilter();
    renderArticles();
  }
})
