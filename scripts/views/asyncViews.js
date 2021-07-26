export default function AsyncViews(url) {
  async function fecthViews(url) {
    try {
      const responseFecth = await fetch(url);
      const json = await responseFecth.json();
      teekObjectViews(json);
    } catch (error) {
      console.log(error);
    }
  }

  function teekObjectViews(json) {
    bannerView(json);
    words(json);
    products(json);
    Locations(json);
    info(json);
  }

  function bannerView(json) {
    const bannerTitle = document.querySelector(".intro h1");
    const bannerDescription = document.querySelector(".intro p");
    const bannerImage = document.querySelector(".intro");

    for (let banner of json) {
      bannerTitle.innerHTML = banner.bannerTitle;
      bannerDescription.innerText = banner.bannerDescription;
    }
  }

  function words(json) {
    const ps = Array.from(document.querySelectorAll(".slides p"));

    for (let word of json) {
      ps[0].innerHTML = word.frases.frase1;
      ps[1].innerHTML = word.frases.frase2;
      ps[2].innerHTML = word.frases.frase3;
    }
  }

  function products(json) {
    const produtoItemTitle = Array.from(
      document.querySelectorAll(".produtos-item h2")
    );
    const produtoItemContent = Array.from(
      document.querySelectorAll(".produtos-item p")
    );
    for (let produt of json) {
      produtoItemTitle[0].innerText = produt.Produtos.produto1.titulo;
      produtoItemContent[0].innerHTML = produt.Produtos.produto1.texto;

      produtoItemTitle[1].innerText = produt.Produtos.produto2.titulo;
      produtoItemContent[1].innerHTML = produt.Produtos.produto2.texto;

      produtoItemTitle[2].innerText = produt.Produtos.produto3.titulo;
      produtoItemContent[2].innerHTML = produt.Produtos.produto3.texto;
    }
  }

  function Locations(json) {
    const localItemTitle = document.querySelectorAll(".locais-item h2");
    const localItemContent = document.querySelectorAll(".locais-item p");

    for (let local of json) {
      localItemTitle[0].innerHTML = local.localizacoes.local1.titulo;
      localItemContent[0].innerHTML = local.localizacoes.local1.texto;

      localItemTitle[1].innerHTML = local.localizacoes.local2.titulo;
      localItemContent[1].innerHTML = local.localizacoes.local2.texto;

      localItemTitle[2].innerHTML = local.localizacoes.local3.titulo;
      localItemContent[2].innerHTML = local.localizacoes.local3.texto;
    }
  }

  function info(json) {
    const footerContainer = document.querySelector(".footer-container p");
    
    for (let info of json){
      footerContainer.innerHTML = info.info
    }
  }

  fecthViews(url);
  return { url };
}
