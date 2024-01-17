import { connectApi } from "./api.js";

const lista = document.querySelector("[data-lista]");
const buscaInput = document.querySelector("[data-search-input]");
const buscaButton = document.querySelector("[data-search-button]");

listVideo(connectApi.getVideos());

buscaInput.addEventListener("input", () => {
  buscaVideo(buscaInput.value);
});

buscaButton.addEventListener("click", (evento) => {
  evento.preventDefault();
  buscaVideo(buscaInput.value);
});

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
  try {
    const listaApi = await videos;
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
  } catch (error) {
    lista.innerHTML =
      "<h2 class='mensagem__titulo'>Não foi possivel carregar a lista de vídeos :( </h2>";
    console.log(error);
  }
}

async function buscaVideo(termo) {
  const resultado = await connectApi.searchVideo(termo);
  lista.innerHTML = "";
  if (resultado.length === 0) {
    lista.innerHTML =
      "<h2 class='mensagem__titulo'>Não encontrado nenhum vídeo com esse termo!</h2>";
  }
  listVideo(resultado);
}
