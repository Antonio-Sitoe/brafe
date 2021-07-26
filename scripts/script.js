// importacao das funcionalidades

import ScrollAnimation from "./Modules/ScrollAnimation.js";
import ModalContact from "./Modules/ModalContact.js";
import Validation from "./Modules/Validation.js";
import ScrollFad from "./Modules/ScrollFad.js";
import GoogleMap from "./Modules/GoogleMap.js";
import Sliders from "./Modules/Sliders.js";

// execucao das funcionalidades

const scroolAnimation = ScrollAnimation('.menu-container [href^="#"]');
const modal = ModalContact("[data-contatos]", "ative");
const validation = Validation();
const scrollFad = ScrollFad("[data-show-bottom]");
const googleMap = GoogleMap(-25.9275984, 32.5031534, 15);
const sliders = Sliders();

//  importacao do conteudo

import AsyncViews from "./views/asyncViews.js";

const fecthViewsOnStrapi = AsyncViews(
  "http://localhost:1337/landing-pages-brafes"
);
