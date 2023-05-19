import { posts } from "/posts.js";

const defaultNumOfPostsDisplay = 4;
const heroIndex = 0;
const mainTag = document.querySelector(".main");

renderData(0, defaultNumOfPostsDisplay);
displayPosts(defaultNumOfPostsDisplay);

const aboutMeLink = document.querySelector("#about-me-link");
const articleHero = document.querySelector(`.${posts[heroIndex].id}`);

articleHero.addEventListener("click", heroPostClick);
aboutMeLink.addEventListener("click", handleAboutMeClick);

function renderData(startIndex, postsLength) {
  let articles = "";
  for (let i = startIndex; i < postsLength; i++) {
    articles += createPost(i);
  }
  mainTag.innerHTML += articles;
}

function displayPosts(postsDisplayed) {
  let clickCount = 0;
  const btnView = document.getElementById("btn-view");

  function handleBtnViewClick() {
    btnView.addEventListener("click", (e) => {
      e.preventDefault();
      if (clickCount === 1 && btnView.textContent === "View Less") {
        mainTag.innerHTML = "";
        renderData(0, postsDisplayed);
        btnView.textContent = "View More";
        clickCount--;
      } else if (clickCount === 0 && btnView.textContent === "View More") {
        renderData(postsDisplayed, posts.length);
        btnView.textContent = "View Less";
        clickCount++;
      }
    });
  }
  return handleBtnViewClick();
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

function heroPostClick() {
  if (
    articleHero
      .querySelector(".article-img")
      .src.includes(`${posts[heroIndex].img}`)
  ) {
    articleHero.innerHTML += updateHeroPost();
    articleHero.classList.add("active");
  }
  console.log(articleHero.classList.length);
}

function handleAboutMeClick() {
  const heroDate = articleHero.querySelector(".article-date");
  const heroImg = articleHero.querySelector(".article-img");
  const heroTitle = articleHero.querySelector(".article-title");

  heroDate.textContent = "";
  heroImg.src = "images/hero_images/profile-pic.jpg";
  heroTitle.innerHTML =
    "Hello there! My name is Komal and welcome to my learning journal.";
  articleHero.innerHTML += updateHeroPost();
  articleHero.classList.remove("active");
  articleHero.classList.add("about-me");
}

function updateHeroPost() {
  return `
  <h4 class="article-hero-sub-heading-one">How I stay committed to learning</h4>
  <p class="article-hero-sub-heading-body-one">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quae enim obcaecati numquam quidem vero praesentium, hic nulla ab sed iusto culpa voluptatibus molestias debitis? Accusamus reiciendis vel labore deserunt!</p>
  <h4 class="article-hero-sub-heading-two">How I got started</h4>
  <p class="article-hero-sub-heading-body-two">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quae enim obcaecati numquam quidem vero praesentium, hic nulla ab sed iusto culpa voluptatibus molestias debitis? Accusamus reiciendis vel labore deserunt!</p>
  <h4 class="recent-posts-heading">Recent Posts</h4>
`;
}
