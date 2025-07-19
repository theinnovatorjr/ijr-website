document.addEventListener("DOMContentLoaded", function () {
  // Get the article ID from the URL
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get("id");

  // Get the article from window.articles
  const article = window.articles
    ? window.articles.find((a) => String(a.id) === String(articleId))
    : null;

  const container = document.getElementById("article-detail-container");

  if (!container) return;

  if (!article) {
    container.innerHTML = `
      <div class="not-found">
        <h2>Article Not Found</h2>
        <p>Sorry, the article you are looking for does not exist.</p>
      </div>
    `;
    return;
  }

  // Format date to a readable string (e.g., June 20, 2024)
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // Render the article
  container.innerHTML = `
      <div class="article-content">
          ${article.tags && article.tags.length
          ? `<span class="article-tags">${article.tags
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join(" ")}</span>`
          : ""}
      <h1 class="article-title">${article.title}</h1>
      <figure class="article-hero">
        <img src="../${article.image}" alt="${article.title}" class="article-hero-img" />
        ${article.gfx ? `<figcaption class="article-caption">${article.gfx}</figcaption>` : ""}
      </figure>
      <br><hr>
      <div class="article-meta">
        <span class="article-author">${article.author || ""}</span>
        <span class="article-date">${formatDate(article.date)}</span>
      </div><hr>
      <div class="article-body">
        ${article.content
          .split("\n")
          .map((p) => `<p>${p.trim()}</p>`)
          .join("")}
      </div>
    </div>
  `;
}); 

