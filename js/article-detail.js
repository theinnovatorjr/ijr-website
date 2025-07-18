import articles from './articles.js';

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const articleId = parseInt(getQueryParam('id'), 10);
const article = articles.find(a => a.id === articleId);
const container = document.getElementById('article-detail');

if (!article) {
  container.innerHTML = '<h2>Article Not Found</h2><p>The article you are looking for does not exist.</p>';
} else {
  container.innerHTML = `
    <div class="article-detail-card">
      <div class="article-detail-image">
        <img src="../${article.image}" alt="${article.title}">
      </div>
      <div class="article-detail-content">
        <h1>${article.title}</h1>
        <div class="article-meta">
          <span class="date">${new Date(article.date).toLocaleDateString()}</span>
          <span class="tags">${article.tags.map(tag => `<span class='tag-btn'>${tag}</span>`).join(' ')}</span>
        </div>
        <div class="content">${article.content}</div>
      </div>
    </div>
  `;
} 