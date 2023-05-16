import { posts } from "/posts.js";

const defaultNumOfPostsDisplay = 4;
const heroIndex = 0;
const mainTag = document.querySelector(".main");

renderData(0, defaultNumOfPostsDisplay);
displayPosts(defaultNumOfPostsDisplay);
handleAboutMeClick();

function renderData(startIndex, postsLength) {
  let articles = "";
  for (let i = startIndex; i < postsLength; i++) {
    articles += createPost(i);
  }
  mainTag.innerHTML += articles;
  // updateHeroArticle();
  heroImageClick();
  // handleAboutMeClick();
  console.log("checking if renderData is getting called!");
}

function displayPosts(postsDisplayed) {
  const btnView = document.getElementById("btn-view");
  let clickCount = 0;
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
    console.log("checking for display Posts");
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

function heroImageClick() {
  getElement(heroIndex).addEventListener("click", () => {
    if (
      getElement(heroIndex)
        .querySelector(".article-img")
        .src.includes(`${posts[heroIndex].img}`)
    ) {
      getElement(heroIndex).innerHTML += updateHeroPost();
      getElement(heroIndex).classList.add("active");
      console.log("class active");
    }
  });
}

function handleAboutMeClick() {
  const aboutMe = document.querySelector(".about-me");
  const heroImg = getElement(heroIndex).querySelector(".article-img");
  const heroTitle = getElement(heroIndex).querySelector(".article-title");
  const heroDate = getElement(heroIndex).querySelector(".article-date");
  //NOT UPDATING THE HTML FOR THE ELEMENT
  aboutMe.addEventListener("click", () => {
    getElement(heroIndex).classList.remove("active");
    getElement(heroIndex).classList.add("about-me");
    heroDate.textContent = "";
    heroImg.src = "images/hero_images/profile-pic.jpg";
    heroTitle.innerHTML =
      "Hello there! My name is Komal and welcome to my learning journal.";
    getElement(heroIndex).innerHTML += updateHeroPost();
  });
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

function getElement(index) {
  return document.querySelector(`.${posts[index].id}`);
}

// function updateHeroArticle() {
//   const isHeroImageSrcIncluded = getElement(heroIndex)
//     .querySelector(".article-img")
//     .src.includes(`${posts[heroIndex].img}`);
//   if (isHeroImageSrcIncluded) {
//     heroImageClick();
//     console.log(isHeroImageSrcIncluded);
//   }
// }
