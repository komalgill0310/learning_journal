import { posts } from "/posts.js";

const defaultNumOfPostsDisplay = 4;
const recentPostsSection = document.querySelector(".recent-posts-section");
const aboutMeLink = document.querySelector("#about-me-link");
const articleHero = document.querySelector(".article-hero");
const btnView = document.getElementById("btn-view");

renderData(0, defaultNumOfPostsDisplay);

articleHero.addEventListener("click", heroPostClick);
aboutMeLink.addEventListener("click", handleAboutMeClick);
btnView.addEventListener("click", () => {
  handleBtnViewClick(defaultNumOfPostsDisplay);
});

function renderData(startIndex, postsLength) {
  let articles = "";
  for (let i = startIndex; i < postsLength; i++) {
    articles += createPost(i);
  }
  recentPostsSection.innerHTML += articles;
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

function heroPostClick() {
  if (
    articleHero
      .querySelector(".article-img")
      .src.includes("hero-post-background-image.avif")
  ) {
    articleHero.innerHTML += updateHeroPost();
    articleHero.classList.add("active");
  }
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
