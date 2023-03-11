const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
});

const articleData = articles
    .map((article) => {
        const { title, date, length, snippet } = article;

        return `<article class="post">
        <h2>${article.title}</h2>
        <div class="post-info">
            <span>${moment().format("MMM Do YY")}</span>
            <span>${article.length} min read</span>
            <p>${article.snippet}</p>
        </div>
    </article>`;
    })
    .join("");

articlesContainer.innerHTML = articleData;
