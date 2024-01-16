import { connectApi } from "./api.js";

const lista = document.querySelector("[data-lista]");
const buscaInput = document.querySelector("[data-search-input]");
const buscaButton = document.querySelector("[data-search-button]");

listVideo(connectApi.getVideos());

buscaInput.addEventListener("input", buscaVideo);

function constroiCard(titulo, descricao, url, imagem) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `<iframe width="100%" height="72%" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`;
  return video;
}

async function listVideo(videos) {
  let listaApi = await videos;
  listaApi.forEach((element) => {
    lista.appendChild(
      constroiCard(
        element.titulo,
        element.descricao,
        element.url,
        element.imagem
      )
    );
  });
}

async function buscaVideo(termo) {
  let resultado = await connectApi.searchVideo(termo);
  lista = document.innerHTML = "";
  listVideo(resultado);
}
