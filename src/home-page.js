import { favoritePhotos as photos } from "./photos";

function getContent() {
  const content = document.createElement("div");
  const welcomeMessage = document.createElement("h2");
  const section = document.createElement("div");
  const sectionTitle = document.createElement("h3");
  const photoContainer = document.createElement("div");

  for (const photo of photos) {
    const photoDiv = document.createElement("div");
    const titleP = document.createElement("p");
    const img = document.createElement("img");
    const attributionDiv = document.createElement("div");

    photoDiv.classList.add("photo");
    titleP.classList.add("title");
    attributionDiv.classList.add("home-attribution");
    photoDiv.textContent = photo.title;
    img.src = photo.imageSrc;
    img.alt = photo.title;
    attributionDiv.innerHTML = photo.attributionHtml;

    photoDiv.appendChild(titleP);
    photoDiv.appendChild(img);
    photoDiv.appendChild(attributionDiv);
    photoContainer.appendChild(photoDiv);
  }

  welcomeMessage.textContent =
    "Welcome to Pizza Face! The best pizza you'll never have!";
  section.classList.add("section");
  sectionTitle.textContent = "Some Favorites...";
  photoContainer.classList.add("photos");

  section.appendChild(sectionTitle);
  section.appendChild(photoContainer);
  content.appendChild(welcomeMessage);
  content.appendChild(section);

  return content;
}

function closeTab() {
  const button = document.querySelector("#home-button");
  button.className = "";
}

export { getContent, closeTab };
