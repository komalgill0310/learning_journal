import { posts } from "/posts.js";

const defaultNumOfPostsDisplay = 4;

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

// HOW TO UPDATE THE STYLE FOR THE HERO ARTICLE WHEN CLICK ON THE HERO'S IMAGE

function heroImageClick() {
  const heroIndex = 0;
  const articleHero = document.querySelector(`.${posts[heroIndex].id}`);
  articleHero.addEventListener("click", (e) => {
    e.preventDefault();
    articleHero.innerHTML = `
      <p class="article-date">${posts[heroIndex].date}</p>
      <h2 class="article-title">${posts[heroIndex].title}</h2>
      <p class="article-body">${posts[heroIndex].body}</p>
      <img class="article-img" src=${posts[heroIndex].img} />
      <h4 class="sub1">How I stay committed to learning</h4>
      <p class="sub1-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quae enim obcaecati numquam quidem vero praesentium, hic nulla ab sed iusto culpa voluptatibus molestias debitis? Accusamus reiciendis vel labore deserunt!</p>
      <h4 class="sub2">How I got started</h4>
      <p class="sub2-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quae enim obcaecati numquam quidem vero praesentium, hic nulla ab sed iusto culpa voluptatibus molestias debitis? Accusamus reiciendis vel labore deserunt!</p>
    `;
    articleHero.classList.add("active");
  });
}

renderData(0, defaultNumOfPostsDisplay);
heroImageClick();
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
