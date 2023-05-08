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
  mainTag.innerHTML = articles;
}

renderData(0, defaultNumOfPostsDisplay);
displayPosts(defaultNumOfPostsDisplay);

function displayPosts(postsDisplayed) {
  const btnView = document.getElementById("btn-view");
  let clickCount = 0;
  function handleClick() {
    btnView.addEventListener("click", (e) => {
      e.preventDefault();
      if (clickCount === 1 && btnView.textContent === "View Less") {
        renderData(0, postsDisplayed);
        btnView.textContent = "View More";
        clickCount--;
      } else if (clickCount === 0 && btnView.textContent === "View More") {
        renderData(0, posts.length);
        btnView.textContent = "View Less";
        clickCount++;
      }
    });
  }
  return handleClick();
}
