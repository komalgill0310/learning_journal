import { posts } from "/posts.js";

const defaultNumOfPostsDisplay = 4;

function renderData(startIndex, postsLength) {
  const mainTag = document.querySelector(".main");
  let articles = "";
  for (let i = startIndex; i < postsLength; i++) {
    articles += createPost(i);
  }
  mainTag.innerHTML = articles;
}

function createPost(index) {
  const post = `
  <article class=${posts[index].id}>
    <img class="article-img" src=${posts[index].img} alt=${posts[index].alt}/>
    <p class="article-date">${posts[index].date}</p>
    <h2 class="article-title">${posts[index].title}</h2>
    <p class="article-body">${posts[index].body}</p>
  </article>
 `;
  return post;
}

function heroImageClick() {
  const heroIndex = 0;
  const articleHero = document.querySelector(`.${posts[heroIndex].id}`);
  articleHero.addEventListener("click", (e) => {
    e.preventDefault();
    articleHero.innerHTML += `
      <h4 class="sub1">How I stay committed to learning</h4>
      <p class="sub1-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quae enim obcaecati numquam quidem vero praesentium, hic nulla ab sed iusto culpa voluptatibus molestias debitis? Accusamus reiciendis vel labore deserunt!</p>
      <h4 class="sub2">How I got started</h4>
      <p class="sub2-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quae enim obcaecati numquam quidem vero praesentium, hic nulla ab sed iusto culpa voluptatibus molestias debitis? Accusamus reiciendis vel labore deserunt!</p>
      <h4 class="recent-posts">Recent Posts</h4>
    `;
    articleHero.classList.add("active");
  });
}

renderData(0, defaultNumOfPostsDisplay);
displayPosts(defaultNumOfPostsDisplay);
heroImageClick();

function displayPosts(postsDisplayed) {
  const btnView = document.getElementById("btn-view");
  let clickCount = 0;
  function handleClick() {
    btnView.addEventListener("click", (e) => {
      e.preventDefault();
      if (clickCount === 1 && btnView.textContent === "View Less") {
        renderData(0, postsDisplayed);
        btnView.textContent = "View More";
        heroImageClick();
        clickCount--;
      } else if (clickCount === 0 && btnView.textContent === "View More") {
        renderData(0, posts.length);
        btnView.textContent = "View Less";
        heroImageClick();
        clickCount++;
      }
    });
  }
  return handleClick();
}
