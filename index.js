import { posts } from "/posts.js";

function renderData() {
  const mainTag = document.querySelector(".main");
  let articles = "";
  posts.forEach((post) => {
    articles += `
      <article class="article-recent">
        <img class="article-img" src=${post.img} alt=${post.alt}/>
        <p class="article-date">${post.date}</p>
        <h2 class="article-title">${post.title}</h2>
        <p class="article-body">${post.body}</p>
      </article>
     `;
  });
  mainTag.innerHTML += articles;
}

renderData();
