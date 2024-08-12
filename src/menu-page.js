import { menuPhotos } from "./photos";

const getContent = function () {
  const content = document.createElement("div");
  const title = document.createElement("h2");

  title.textContent = "Menu";

  content.appendChild(title);

  for (const photo of menuPhotos) {
    const menuItem = document.createElement("div");
    const image = document.createElement("img");
    const right = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const attribution = document.createElement("p");

    menuItem.className = "menu-item";
    right.className = "right";
    title.className = "title";
    description.className = "description";
    price.className = "price";
    attribution.className = "attribution";

    image.src = photo.imageSrc;
    image.alt = photo.title;
    title.textContent = photo.title;
    description.textContent = photo.description;
    price.textContent = `Price: ${photo.price}`;
    attribution.innerHTML = photo.attributionHtml;

    right.appendChild(title);
    right.appendChild(description);
    right.appendChild(price);
    right.appendChild(attribution);
    menuItem.appendChild(image);
    menuItem.appendChild(right);
    content.appendChild(menuItem);
  }

  return content;
};

const closeTab = function () {
  const button = document.querySelector("#menu-button");
  button.className = "";
};

export { getContent, closeTab };
