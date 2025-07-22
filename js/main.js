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
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");

      // Animate hamburger menu
      const spans = mobileMenuBtn.querySelectorAll("span");
      if (mobileMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove("active");

        // Reset hamburger menu
        const spans = mobileMenuBtn.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }

  // Mobile Dropdown Toggle
  const mobileDropdownBtns = document.querySelectorAll(".mobile-dropdown-btn");

  mobileDropdownBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const dropdown = this.parentElement;
      dropdown.classList.toggle("active");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // === Article Loading System ===
  if (window.articles) {
    const articlesGrid = document.getElementById("articles-grid");
    const loadMoreBtn = document.getElementById("load-more-btn");
    const searchInput = document.querySelector(".search-input");

    let currentPage = 1;
    const articlesPerPage = 6;
    let filteredArticles = window.articles;

    const path = window.location.pathname;
    const pageName = path.split('/').pop().split('.')[0]; 

    // Feature articles filter
    if (pageName === "features") {
      filteredArticles = window.articles.filter(article => article.tags.includes("Feature"));
    }

    // News articles filter
    if (pageName === "news") {
      filteredArticles = window.articles.filter(article => article.tags.includes("News"));
    }

    // Opinion articles filter
    if (pageName === "opinion") {
      filteredArticles = window.articles.filter(article => article.tags.includes("Opinion"));
    }

    // Sci-tech articles filter
    if (pageName === "sci-tech") {
      filteredArticles = window.articles.filter(article => article.tags.includes("Sci-Tech"));
    }

    // Sports articles filter
    if (pageName === "sports") {
      filteredArticles = window.articles.filter(article => article.tags.includes("Sports"));
    }
    // Render articles
    function renderArticles() {
      if (!articlesGrid) return;

      const startIndex = 0;
      const endIndex = currentPage * articlesPerPage;
      const articlesToShow = filteredArticles.slice(startIndex, endIndex);

      articlesGrid.innerHTML = articlesToShow.map(article => `
        <article class="article-card" data-id="${article.id}">
          <div class="article-image">
            <img src="/${article.image}" alt="${article.title}">
            <div class="article-tag">${article.tags[0] || ''}</div>
          </div>
          <div class="article-content">
            <h3>${article.title}</h3>
            <p>${article.excerpt || article.content.substring(0, 150) + '...'}</p>
            <div class="article-meta">
              <span class="author">${article.author || ''}</span>
              <span class="date">${formatDate(article.date)}</span>
            </div>
          </div>
        </article>
      `).join('');

    // Filter articles
    const featureArticles = window.articles.filter(article => article.tags.includes("Feature"));
    
      // Make cards clickable
      articlesGrid.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('click', function() {
          const id = this.getAttribute('data-id');
          window.location.href = `pages/article.html?id=${id}`;
        });
      });

      // Show/hide load more button
      if (loadMoreBtn) {
        if (endIndex >= filteredArticles.length) {
          loadMoreBtn.style.display = 'none';
        } else {
          loadMoreBtn.style.display = 'block';
        }
      }
    }

    // Format date
    function formatDate(dateStr) {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }

    // Load more handler
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderArticles();
      });
    }

    // Search functionality
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        filteredArticles = window.articles.filter(article =>
          article.title.toLowerCase().includes(query) ||
          (article.author && article.author.toLowerCase().includes(query)) ||
          (article.content && article.content.toLowerCase().includes(query))
        );
        currentPage = 1;
        renderArticles();
      });
    }

    // Initial render
    renderArticles();
  }
});
