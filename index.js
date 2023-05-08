import { posts } from "/posts.js";

const defaultNumOfPostsDisplay = 3;

function renderData(startIndex, postsLength) {
  const mainTag = document.querySelector(".main");
  let articles = "";
  for (let i = startIndex; i < postsLength; i++) {
    articles += `
      <article class=${posts[i].id}>
        <img class="article-img" src=${posts[i].img} alt=${posts[i].alt}/>
        <p class="article-date">${posts[i].date}</p>
        <h2 class="article-title">${posts[i].title}</h2>
        <p class="article-body">${posts[i].body}</p>
      </article>
     `;
  }
  mainTag.innerHTML += articles;
}

renderData(0, defaultNumOfPostsDisplay);

document.getElementById("btn-view").addEventListener("click", (e) => {
  e.preventDefault();
  const postsDisplayed = defaultNumOfPostsDisplay;
  renderData(postsDisplayed, posts.length);
});
