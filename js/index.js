import { posts } from "js/posts.js";

const defaultNumOfPostsDisplay = 3;
const aboutMeLink = document.querySelector(".about-me-link");
const articleHero = document.querySelector(".article-hero");
const recentPostsSection = document.querySelector(".recent-posts-section");
const btnView = document.querySelector(".btn-view");

renderData(0, defaultNumOfPostsDisplay);

articleHero.addEventListener("click", heroPostClick);
aboutMeLink.addEventListener("click", handleAboutMeClick);
btnView.addEventListener("click", () => {
  handleBtnViewClick(defaultNumOfPostsDisplay);
});

function renderData(startIndex, totalNumOfPosts) {
  let articles = "";
  for (let i = startIndex; i < totalNumOfPosts; i++) {
    articles += createPost(i);
  }
  recentPostsSection.innerHTML += articles;
}

function heroPostClick() {
  if (
    articleHero
      .querySelector(".article-img")
      .src.includes("hero-post-background-image.avif")
  ) {
    articleHero.innerHTML += updateHeroPost();
    articleHero.classList.add("expanded");
  }
}

function handleAboutMeClick() {
  const heroDate = articleHero.querySelector(".article-date");
  const heroImg = articleHero.querySelector(".article-img");
  const heroTitle = articleHero.querySelector(".article-title");

  heroDate.remove();
  heroImg.src = "images/hero_images/profile-pic.jpg";
  heroTitle.innerHTML =
    "Hello there! My name is Komal and welcome to my learning journal.";
  articleHero.innerHTML += updateHeroPost();
  articleHero.classList.remove("expanded");
  articleHero.classList.add("about-me");
}

function handleBtnViewClick(postsDisplayed) {
  if (btnView.textContent === "View More") {
    renderData(postsDisplayed, posts.length);
    btnView.textContent = "View Less";
  } else if (btnView.textContent === "View Less") {
    recentPostsSection.innerHTML = "";
    renderData(0, postsDisplayed);
    btnView.textContent = "View More";
  }
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

function updateHeroPost() {
  return `
  <h4 class="hero-subtitle-one">How I stay committed to learning</h4>
  <p class="hero-subtext-one">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quae enim obcaecati numquam quidem vero praesentium, hic nulla ab sed iusto culpa voluptatibus molestias debitis? Accusamus reiciendis vel labore deserunt!</p>
  <h4 class="hero-subtitle-two">How I got started</h4>
  <p class="hero-subtext-two">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quae enim obcaecati numquam quidem vero praesentium, hic nulla ab sed iusto culpa voluptatibus molestias debitis? Accusamus reiciendis vel labore deserunt!</p>
  <h4 class="recent-posts-title">Recent Posts</h4>
`;
}
