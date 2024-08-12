import veganPizza from "./images/vegan-pizza.jpg";
import supremePizza from "./images/supreme-pizza.jpg";
import cheesePizza from "./images/cheese-pizza.jpg";
import pepperoniPizza from "./images/pepperoni-pizza.jpg";
import pizzaArt from "./images/pizza-art.png";
import mysteryPizza from "./images/mystery-pizza.jpg";

const menuPhotos = [
  {
    title: "Vegan Pizza",
    description:
      "A delectable pizza made with fake cheese and no meat, perfect for those who do not partake of animal products.",
    price: "$49.99",
    isFavorite: true,
    imageSrc: veganPizza,
    attributionHtml:
      'Image by <a href="https://pixabay.com/users/hoaluu-5512970/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2589575">Hoa Luu</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2589575">Pixabay</a>',
  },
  {
    title: "Pizza Supreme",
    description: "A pizza with everything.",
    price: "$59.99",
    isFavorite: true,
    imageSrc: supremePizza,
    attributionHtml:
      'Image by <a href="https://pixabay.com/users/publicdomainimages-327722/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=386717">PublicDomainImages</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=386717">Pixabay</a>',
  },
  {
    title: "Mystery Meat Special",
    description: "A pizza with meat on it, but who knows what kind.",
    price: "$4.99",
    isFavorite: true,
    imageSrc: mysteryPizza,
    attributionHtml:
      'Image by <a href="https://pixabay.com/users/engin_akyurt-3656355/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2802332">Engin Akyurt</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2802332">Pixabay</a>',
  },
  {
    title: "Pizza Art",
    description:
      "If you're not hungry, and would rather have something that you could keep forever, try our pizza art.",
    price: "$9999.99",
    isFavorite: false,
    imageSrc: pizzaArt,
    attributionHtml:
      'Image by <a href="https://pixabay.com/users/deeznutz1-3086161/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8184596">Dee</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8184596">Pixabay</a>',
  },
  {
    title: "Cheese Pizza",
    description: "A pizza with lots of cheese.",
    price: "$69.99",
    isFavorite: false,
    imageSrc: cheesePizza,
    attributionHtml:
      'Image by <a href="https://pixabay.com/users/designer798-4949426/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4282169">kyung jin Kim</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4282169">Pixabay</a>',
  },
  {
    title: "Pepperoni Pizza",
    description: "Our classic pepperoni pizza.",
    price: "$39.99",
    isFavorite: false,
    imageSrc: pepperoniPizza,
    attributionHtml:
      'Image by <a href="https://pixabay.com/users/rstamats-19733153/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5880022">Richard Stamats</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5880022">Pixabay</a>',
  },
];

const favoritePhotos = menuPhotos.filter((photo) => photo.isFavorite);

export { favoritePhotos, menuPhotos };
